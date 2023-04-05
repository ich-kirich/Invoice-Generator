import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import Invoice from "../../models/invoice";
import { createInfInvoice, createPdf } from "../services/invoiceService";
import ApiError from "../error/apiError";
import ERROR_NOT_FOUND from "../libs/constants";
import Work from "../../models/work";
import sendEmail from "../services/sendEmails";

class InvoiceControllers {
  async createInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, firstName, lastName, company, works } = req.body;
      const checkInvoice = await Invoice.findOne({ where: { email } });
      const invoice = await createInfInvoice(
        checkInvoice,
        email,
        firstName,
        lastName,
        company,
        works,
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
        try {
          const pdfFile = await createPdf(invoice);
          await sendEmail(pdfFile, invoice.dataValues.email);
          return res.json("Email successfully sent");
        } catch (e) {
          return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
        }
      }
      return next(new ApiError(StatusCodes.NOT_FOUND, ERROR_NOT_FOUND));
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new InvoiceControllers();
