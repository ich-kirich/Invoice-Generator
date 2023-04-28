import { Box, Typography } from "@mui/material";
import React from "react";
import { createDate } from "../../libs/utils";
import { IPageProps } from "../../../types/types";

function DateComplete(props: IPageProps) {
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
        This invoice is for work completed by Brick and Willow Design on{" "}
        {createDate(new Date(invoice.dataValues.updatedAt))}
      </Typography>
    </Box>
  );
}

export default DateComplete;
