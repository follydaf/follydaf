import React from "react";
import { Box, Typography, Stack } from "@mui/material";

function Smart() {
  return (
    <Stack
      spacing={3}
      sx={{
        padding: { xs: 0, sm: "50px", lg: "60px" },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "50px" },
          width: { lg: "70%" },
        }}
      >
        Why smart accounting software makes good business sense
      </Typography>
      <Typography sx={{ width: { xs: "70%", lg: "70%" } }}>
        Whether you are a small business, a non profit or a more medium size
        business, we’ll help you find the perfect accounting solution. Run
        multiple companies? We can help with that too by centralizing accounting
        for all your businesses.
      </Typography>
      <Box
        component="img"
        src="/images/smartakant.png"
        sx={{ width: { xs: "350px", sm: "600px", lg: "1200px" } }}
      />
    </Stack>
  );
}

export default Smart;