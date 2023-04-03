import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "../error/apiError";
class InvoiceControllers {
  
  async getInvoice(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json("1");
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }
}

export default new InvoiceControllers();
