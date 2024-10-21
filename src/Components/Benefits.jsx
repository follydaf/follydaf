import React from "react";
import { Box, Typography, Stack } from "@mui/material";

function Benefits() {
  return (
    <Stack
      spacing={3}
      sx={{
        padding: { xs: 0, sm: "50px", lg: "60px" },
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "58px", lg: "50px" },
        }}
      >
        Discover the benefits of our accounting solution
      </Typography>

      <Box
        component="img"
        src="/images/misionvision.png"
        sx={{ width: { xs: "350px", sm: "600px", lg: "1200px" } }}
      />
    </Stack>
  );
}

export default Benefits;
