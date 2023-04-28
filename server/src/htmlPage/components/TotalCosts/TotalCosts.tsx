import { Box, Typography } from "@mui/material";
import React from "react";
import { totalCount } from "../../libs/utils";
import { IPageProps } from "../../../types/types";

function TotalCosts(props: IPageProps) {
  const { invoice } = props;
  return (
    <Box
      className="cost"
      sx={{
        padding: 5,
      }}
    >
      <Typography variant="h4" component="p">
        Total Due
      </Typography>
      <Typography variant="h4" component="p">
        {totalCount(invoice.dataValues.works)}$
      </Typography>
    </Box>
  );
}

export default TotalCosts;
