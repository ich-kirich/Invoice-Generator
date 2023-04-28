import { Box, Typography } from "@mui/material";
import React from "react";

function Thanks() {
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
        It was pleasure to work with you and your tear. Please let me know if
        you have any questions and we hope you will keep us in mind for future
        freelance projects. Thank you!
      </Typography>
    </Box>
  );
}

export default Thanks;
