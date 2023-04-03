import { Router } from "express";
import InvoiceControllers from "../controllers/invoiceControllers";

const invoiceRouter = Router();

invoiceRouter.get("/", InvoiceControllers.getInvoice);

export default invoiceRouter;
