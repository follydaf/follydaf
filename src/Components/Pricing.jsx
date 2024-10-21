import React from "react";
import { Box, Typography, Stack } from "@mui/material";

function Pricing() {
  return (
    <Stack
      spacing={3}
      sx={{
        padding: { xs: "20px", sm: "50px", lg: "60px" },
        textAlign: "center",
        backgroundColor: "hsl(140, 60%, 98%)",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "50px", lg: "50px" },
        }}
      >
        Pricing
      </Typography>
      <Typography sx={{ width: { xs: "70%" } }}>
        Choose the pricing that works for you and align to your business
      </Typography>
      <Box
        component="img"
        src="/images/pricing.png"
        sx={{ width: { xs: "350px", sm: "600px", lg: "1200px" } }}
      />
    </Stack>
  );
}

export default Pricing;