import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import htmlPdfNode from "html-pdf-node";
import Invoice from "../../models/invoice";
import createInfInvoice from "../services/invoiceService";
import ApiError from "../error/apiError";
import { ERROR_NOT_FOUND } from "../libs/constants";
import Work from "../../models/work";

class InvoiceControllers {
  async createInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, works, firstName, lastName, company } = req.body;
      const checkInvoice = await Invoice.findOne({ where: { email } });
      const invoice = await createInfInvoice(
        checkInvoice,
        email,
        works,
        firstName,
        lastName,
        company,
      );
      return res.json(invoice);
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }

  async getInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const invoice = await Invoice.findOne({
        where: {
          email,
        },
        include: [{ model: Work, as: "works" }],
      });
      if (invoice) {
        return res.json(invoice);
      }
      return next(new ApiError(StatusCodes.NOT_FOUND, ERROR_NOT_FOUND));
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }

  async getPDF(req: Request, res: Response, next: NextFunction) {
    try {
      const options = { format: "A4" };
      const file = {
        content: `<html>
      <head>
        <style>
          h1 {
            color: red;
          }
        </style>
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
    </html>`,
      };
      const generatePdfPromise = () =>
        new Promise<Buffer>((resolve, reject) => {
          htmlPdfNode.generatePdf(file, options, (err, pdfBuffer) => {
            if (err) {
              reject(err);
            } else {
              resolve(pdfBuffer);
            }
          });
        });
      const pdfBuffer = await generatePdfPromise();
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=file.pdf");
      return res.send(pdfBuffer);
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new InvoiceControllers();
