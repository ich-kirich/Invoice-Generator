import { Router } from "express";
import InvoiceControllers from "../controllers/invoiceControllers";

const invoiceRouter = Router();

invoiceRouter.post("/", InvoiceControllers.createInvoice);
invoiceRouter.get("/", InvoiceControllers.getInvoice);
invoiceRouter.get("/pdf", InvoiceControllers.getPDF);

export default invoiceRouter;
