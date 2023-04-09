import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { addWorks, generateInvoice } from "../services/invoiceService";
import ApiError from "../error/apiError";

class InvoiceControllers {
  async createInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, firstName, lastName, company, works } = req.body;
      const invoice = await addWorks(
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
      const result = await generateInvoice(email);
      return res.json(result);
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new InvoiceControllers();
