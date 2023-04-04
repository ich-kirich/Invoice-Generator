import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { createDate, totalCount } from "../../libs/utils";
import { IWorksProps } from "../../../types/types";

function PayInvoice(props: IWorksProps) {
  const { works } = props;
  const date = new Date(Date.now());
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Typography variant="h6" component="h1">
          New Invoice
        </Typography>
        <Typography variant="h6" component="h1">
          {totalCount(works)}$ due on {createDate(date)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#536476",
            borderRadius: 10,
            color: "#fff",
          }}
        >
          Pay Invoice
        </Box>
      </Box>
    </Container>
  );
}

export default PayInvoice;
