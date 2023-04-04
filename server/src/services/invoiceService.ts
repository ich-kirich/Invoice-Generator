import htmlPdfNode from "html-pdf-node";
import { IWork } from "../types/types";
import Invoice from "../../models/invoice";
import Work from "../../models/work";
import { createPage } from "../htmlPage/htmlPage";

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

export async function createInfInvoice(
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

export async function createPdf(invoice: Invoice) {
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
