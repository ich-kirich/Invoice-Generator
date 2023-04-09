import htmlPdfNode from "html-pdf-node";
import { StatusCodes } from "http-status-codes";
import ApiError from "../error/apiError";
import ERROR_NOT_FOUND from "../libs/constants";
import { IWork } from "../types/types";
import Invoice from "../../models/invoice";
import Work from "../../models/work";
import { createPage } from "../htmlPage/htmlPage";
import sendEmail from "./sendEmails";

async function createInfo(info: IWork[], id: number) {
  if (info) {
    try {
      for (const item of info) {
        try {
          await Work.create({
            nameWork: item.nameWork,
            priceWork: item.priceWork,
            InvoiceId: id,
          });
        } catch (e) {
          console.error(e.message);
        }
      }
      return;
    } catch (e) {
      console.error(e.message);
    }
  }
}

async function createInfInvoice(
  checkInvoice: Invoice,
  email: string,
  firstName: string,
  lastName: string,
  company: string,
  works: IWork[],
) {
  if (checkInvoice) {
    return checkInvoice;
  }
  const invoice = await Invoice.create({
    email,
    firstName,
    lastName,
    company,
  });
  await invoice.save();
  await createInfo(works, invoice.dataValues.id);
  return invoice;
}

async function createPdf(invoice: Invoice) {
  const options = { format: "A4" };
  const htmlFile = createPage(invoice);
  const generatePdfPromise = () =>
    new Promise<Buffer>((resolve, reject) => {
      htmlPdfNode.generatePdf(htmlFile, options, (err, pdfBuffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(pdfBuffer);
        }
      });
    });
  return generatePdfPromise();
}

export async function addWorks(
  email: string,
  firstName: string,
  lastName: string,
  company: string,
  works: IWork[],
) {
  const checkInvoice = await Invoice.findOne({ where: { email } });
  const invoice = await createInfInvoice(
    checkInvoice,
    email,
    firstName,
    lastName,
    company,
    works,
  );
  return invoice;
}

export async function generateInvoice(email: string) {
  const invoice = await Invoice.findOne({
    where: {
      email,
    },
    include: [{ model: Work, as: "works" }],
  });
  if (invoice) {
    try {
      const pdfFile = await createPdf(invoice);
      await sendEmail(pdfFile, invoice.dataValues.email);
      return "Email successfully sent";
    } catch (e) {
      return new ApiError(StatusCodes.BAD_REQUEST, e.message);
    }
  }
  return new ApiError(StatusCodes.NOT_FOUND, ERROR_NOT_FOUND);
}
