import { Queue } from "bullmq";
import { createPdf } from "./invoiceService";

const queue = new Queue("Paint", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

async function addJobs() {
  await queue.add("cars", { pdf: "createPdf" });
}

export default addJobs;
