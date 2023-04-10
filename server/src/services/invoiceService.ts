import htmlPdfNode from "html-pdf-node";
import { StatusCodes } from "http-status-codes";
import ApiError from "../error/apiError";
import ERROR_NOT_FOUND from "../libs/constants";
import { IWork } from "../types/types";
import Invoice from "../../models/invoice";
import Work from "../../models/work";
import Logs from "../../models/log";
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

function generatePdfPromise(
  htmlFile: {
    content: string;
  },
  options: Object,
): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    htmlPdfNode.generatePdf(
      htmlFile,
      options,
      (err: Error | null, pdfBuffer?: Buffer) => {
        if (err) {
          reject(err);
        } else if (!pdfBuffer) {
          reject(new Error("PDF buffer is empty."));
        } else {
          resolve(pdfBuffer);
        }
      },
    );
  });
}

async function createPdf(invoice: Invoice) {
  const options = { format: "A4" };
  const htmlFile = createPage(invoice);
  return generatePdfPromise(htmlFile, options);
}

export async function addWorks(email: string, works: IWork[]) {
  const checkInvoice = await Invoice.findOne({ where: { email } });
  if (checkInvoice) {
    await createInfo(works, checkInvoice.dataValues.id);
    return checkInvoice;
  }
  return new ApiError(StatusCodes.NOT_FOUND, ERROR_NOT_FOUND);
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

export async function generateLogs(email: string, date: Date) {
  try {
    const log = await Logs.create({ email, date });
    console.log(log);
    await log.save();
    console.log(1);
    return log;
  } catch (e) {
    return new ApiError(StatusCodes.BAD_REQUEST, e.message);
  }
}
