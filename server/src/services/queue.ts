import { Queue, Worker } from "bullmq";
import config from "config";
import { generateInvoice } from "./invoiceService";

const queue = new Queue("sent", {
  connection: {
    host: config.get("queue_host"),
    port: config.get("queue_port"),
  },
});

const generatePDFWorker = new Worker(
  "sent",
  async (job) => {
    await generateInvoice(job.data.sent);
  },
  {
    connection: {
      host: config.get("queue_host"),
      port: config.get("queue_port"),
    },
  },
);

export default queue;
