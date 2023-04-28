import config from "config";
import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";
import { Readable } from "stream";
import ApiError from "../error/apiError";

async function sendEmail(pdfFile: Buffer, emailToSend: string) {
  const transporter = nodemailer.createTransport({
    host: config.get("email.name"),
    port: config.get("email.port"),
    secure: false,
    auth: {
      user: config.get("email.username"),
      pass: config.get("email.password"),
    },
  });
  const pdfBuffer = Buffer.from(pdfFile);
  const pdfStream = new Readable();
  pdfStream.push(pdfBuffer);
  pdfStream.push(null);
  try {
    const info = await transporter.sendMail({
      from: config.get("email.username"),
      to: emailToSend,
      subject: "Invoice",
      attachments: [
        {
          filename: "invoice.pdf",
          content: pdfStream,
        },
      ],
    });
    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    console.log(new ApiError(StatusCodes.BAD_REQUEST, e.message));
  }
}

export default sendEmail;
