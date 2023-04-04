import React from "react";
import ReactDOMServer from "react-dom/server";
import { StyledEngineProvider } from "@mui/material";
import Header from "./components/Header/Header";
import Invoice from "../../models/invoice";
import { IPageProps } from "../types/types";
import PayInvoice from "./components/PayInvoice/PayInvoice";
import ShortInform from "./components/ShortInform/ShortInform";
import CostInvoice from "./components/CostInvoice/CostInvoice";

function App(props: IPageProps) {
  const { invoice } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Invoice</title>
        <style>
          {`
          html {
            -webkit-print-color-adjust: exact;
          }
          .cost {
            display: flex;
            -webkit-justify-content: space-between;
          }
        `}
        </style>
      </head>

      <body>
        <StyledEngineProvider injectFirst>
          <Header />
          <PayInvoice works={invoice.dataValues.works} />
          <ShortInform invoice={invoice} />
          <CostInvoice invoice={invoice} />
        </StyledEngineProvider>
      </body>
    </html>
  );
}

export function createPage(invoice: Invoice) {
  return {
    content: ReactDOMServer.renderToString(<App invoice={invoice} />),
  };
}

export default createPage;
