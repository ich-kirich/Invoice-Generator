import { Container } from "@mui/material";
import React from "react";
import { IPageProps } from "../../../types/types";
import WorksList from "../WorksList/WorksList";
import IntermediateCosts from "../IntermediateCosts/IntermediateCosts";
import TotalCosts from "../TotalCosts/TotalCosts";
import Adress from "../Adress/Adress";

function CostInvoice(props: IPageProps) {
  const { invoice } = props;
  return (
    <Container maxWidth="md">
      <WorksList invoice={invoice} />
      <hr />
      <IntermediateCosts invoice={invoice} />
      <hr />
      <TotalCosts invoice={invoice} />
      <hr />
      <Adress />
    </Container>
  );
}
export default CostInvoice;
