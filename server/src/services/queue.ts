import { Queue } from "bullmq";
import config from "config";

const queue = new Queue("Paint", {
  connection: {
    host: config.get("queue_host"),
    port: config.get("queue_port"),
  },
});

async function addJobs() {
  await queue.add("cars", { pdf: "createPdf" });
}

export default addJobs;
