import { Container, Box, Typography } from "@mui/material";
import Work from "models/work";
import React from "react";
import { totalCount, upperFirstLetter } from "../../libs/utils";
import { IPageProps } from "../../../types/types";

function CostInvoice(props: IPageProps) {
  const { invoice } = props;
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 5,
        }}
      >
        {invoice.dataValues.works.map((item: Work) => (
          <Box className="cost">
            <Typography variant="h6" component="p">
              {upperFirstLetter(item.dataValues.nameWork)}
            </Typography>
            <Typography variant="h6" component="p">
              {item.dataValues.priceWork}$
            </Typography>
          </Box>
        ))}
      </Box>
      <hr />
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
      <hr />
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
          Brick and Willow Design,
        </Typography>
        <Typography variant="h6" component="p">
          101 Main Street, San Francisco, CA 94105
        </Typography>
        <Typography variant="h6" component="p">
          415-555-4721
        </Typography>
      </Box>
    </Container>
  );
}
export default CostInvoice;
