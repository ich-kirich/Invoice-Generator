import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { addWorks } from "../services/invoiceService";
import ApiError from "../error/apiError";
import queue from "../services/queue";

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
      await queue.add("sentPdf", { sent: email });
      return res.json("Succes Sent");
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new InvoiceControllers();
