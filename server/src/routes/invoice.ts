import { Router } from "express";
import InvoiceControllers from "../controllers/invoiceControllers";

const invoiceRouter = Router();

invoiceRouter.post("/", InvoiceControllers.createListWorks);
invoiceRouter.get("/", InvoiceControllers.getInvoice);

export default invoiceRouter;
