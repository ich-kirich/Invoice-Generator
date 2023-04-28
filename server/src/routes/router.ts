import { Router } from "express";
import invoiceRouter from "./invoice";

const router = Router();
router.use("/", invoiceRouter);

export default router;
