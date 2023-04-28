import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Box>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 10,
            backgroundColor: "#536476",
          }}
        >
          <Typography variant="h6" component="h1" sx={{ color: "#fff" }}>
            Brick and Willow Design
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
