import React from "react";
import ReactDOMServer from "react-dom/server";
import { StyledEngineProvider } from "@mui/material";
import Header from "./components/Header/Header";

function App() {
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
        `}
        </style>
      </head>

      <body>
        <StyledEngineProvider injectFirst>
          <Header />
        </StyledEngineProvider>
      </body>
    </html>
  );
}

export function createPage() {
  return { content: ReactDOMServer.renderToString(<App />) };
}

export default createPage;
