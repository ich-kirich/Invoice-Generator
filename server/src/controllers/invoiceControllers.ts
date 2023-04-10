import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { addWorks, generateLogs } from "../services/invoiceService";
import ApiError from "../error/apiError";
import queue from "../services/queue";

class InvoiceControllers {
  async createListWorks(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, works } = req.body;
      const log = await generateLogs(email, new Date(Date.now()));
      const invoice = await addWorks(email, works);
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
