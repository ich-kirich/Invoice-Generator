import { Container } from "@mui/material";
import React from "react";
import { IPageProps } from "../../../types/types";
import InformCustomer from "../InformCustomer/InformCustomer";
import DateComplete from "../DateComplete/DateComplete";
import Thanks from "../Thanks/Thanks";

function ShortInform(props: IPageProps) {
  const { invoice } = props;
  return (
    <Container maxWidth="md">
      <hr />
      <InformCustomer invoice={invoice} />
      <hr />
      <DateComplete invoice={invoice} />
      <hr />
      <Thanks />
      <hr />
    </Container>
  );
}

export default ShortInform;
