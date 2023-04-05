import { Box, Typography } from "@mui/material";
import Work from "models/work";
import React from "react";
import { upperFirstLetter } from "../../libs/utils";
import { IPageProps } from "../../../types/types";

function WorksList(props: IPageProps) {
  const { invoice } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 5,
      }}
    >
      {invoice.dataValues.works.map((item: Work) => (
        <Box className="cost" key={item.dataValues.id}>
          <Typography variant="h6" component="p">
            {upperFirstLetter(item.dataValues.nameWork)}
          </Typography>
          <Typography variant="h6" component="p">
            {item.dataValues.priceWork}$
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default WorksList;
