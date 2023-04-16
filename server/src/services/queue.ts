import { Queue, Worker } from "bullmq";
import config from "config";
import { generatePdfClient } from "./invoiceService";
import sendEmail from "./sendEmails";

const queuePdf = new Queue("generate-pdf", {
  connection: {
    host: config.get("queue.host"),
    port: config.get("queue.port"),
  },
});

const queueEmal = new Queue("sent-email", {
  connection: {
    host: config.get("queue.host"),
    port: config.get("queue.port"),
  },
});

const generatePDFWorker = new Worker(
  "generate-pdf",
  async (job) => {
    const pdfFile = await generatePdfClient(job.data.sent);
    await queueEmal.add("sent-email", { pdfFile, email: job.data });
  },
  {
    connection: {
      host: config.get("queue.host"),
      port: config.get("queue.port"),
    },
  },
);

const sentEmailWorker = new Worker(
  "sent-email",
  async (job) => {
    await sendEmail(job.data.pdfFile, job.data.email.sent);
  },
  {
    connection: {
      host: config.get("queue.host"),
      port: config.get("queue.port"),
    },
  },
);

export default queuePdf;
