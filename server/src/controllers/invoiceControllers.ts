import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import Invoice from "../../models/invoice";
import { createInfInvoice, createPdf } from "../services/invoiceService";
import ApiError from "../error/apiError";
import ERROR_NOT_FOUND from "../libs/constants";
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
        try {
          const pdfFile = await createPdf(invoice);
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader(
            "Content-Disposition",
            "attachment; filename=invoice.pdf",
          );
          return res.send(pdfFile);
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
