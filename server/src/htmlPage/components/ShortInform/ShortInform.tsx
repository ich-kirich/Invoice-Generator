import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { createDate } from "../../libs/utils";
import { IPageProps } from "../../../types/types";

function ShortInform(props: IPageProps) {
  const { invoice } = props;
  return (
    <Container maxWidth="md">
      <hr />
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
      <hr />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Typography variant="h6" component="p">
          This invoice is for work completed by Brick and Willow Design on{" "}
          {createDate(new Date(invoice.dataValues.updatedAt))}
        </Typography>
      </Box>
      <hr />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Typography variant="h6" component="p">
          It was pleasure to work with you and your tear. Please let me know if
          you have any questions and we hope you will keep us in mind for future
          freelance projects. Thank you!
        </Typography>
      </Box>
      <hr />
    </Container>
  );
}

export default ShortInform;
