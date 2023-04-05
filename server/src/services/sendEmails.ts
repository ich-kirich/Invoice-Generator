import config from "config";
import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";
import { Readable } from "stream";
import ApiError from "../error/apiError";

async function sendEmail(pdfFile: Buffer, emailToSend: string) {
  const transporter = nodemailer.createTransport({
    host: config.get("EMAIL_HOST_NAME"),
    port: config.get("EMAIL_HOST_PORT"),
    secure: false,
    auth: {
      user: config.get("EMAIL_USERNAME"),
      pass: config.get("EMAIL_USER_PASSWORD"),
    },
  });
  const pdfBuffer = Buffer.from(pdfFile);
  const pdfStream = new Readable();
  pdfStream.push(pdfBuffer);
  pdfStream.push(null);
  try {
    const info = await transporter.sendMail({
      from: config.get("EMAIL_USERNAME"),
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
