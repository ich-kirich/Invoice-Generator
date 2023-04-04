import { Box, Typography } from "@mui/material";
import React from "react";
import { IPageProps } from "../../../types/types";

function InformCustomer(props: IPageProps) {
  const { invoice } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 5,
      }}
    >
      <Typography variant="h6" component="p">
        Invoice #{invoice.dataValues.id}
      </Typography>
      <Typography variant="h6" component="p">
        Customer: {invoice.dataValues.firstName}
      </Typography>
      <Typography variant="h6" component="p">
        {invoice.dataValues.email}
      </Typography>
    </Box>
  );
}

export default InformCustomer;
