import { Box, Typography } from "@mui/material";
import React from "react";
import { totalCount } from "../../libs/utils";
import { IPageProps } from "../../../types/types";

function IntermediateCosts(props: IPageProps) {
  const { invoice } = props;
  return (
    <Box
      sx={{
        padding: 5,
      }}
    >
      <Box className="cost">
        <Typography variant="h6" component="p">
          Subtotal
        </Typography>
        <Typography variant="h6" component="p">
          {totalCount(invoice.dataValues.works)}$
        </Typography>
      </Box>
      <Box className="cost">
        <Typography variant="h6" component="p">
          Tax
        </Typography>
        <Typography variant="h6" component="p">
          0$
        </Typography>
      </Box>
    </Box>
  );
}

export default IntermediateCosts;
