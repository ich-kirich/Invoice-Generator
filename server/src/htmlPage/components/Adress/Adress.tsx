import { Box, Typography } from "@mui/material";
import React from "react";

function Adress() {
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
        Brick and Willow Design,
      </Typography>
      <Typography variant="h6" component="p">
        101 Main Street, San Francisco, CA 94105
      </Typography>
      <Typography variant="h6" component="p">
        415-555-4721
      </Typography>
    </Box>
  );
}

export default Adress;
