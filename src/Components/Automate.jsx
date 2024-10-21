import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

function Automate() {
  return (
    <Stack
      spacing={{ xs: 4, lg: 0 }}
      direction={{ xs: "column", lg: "row" }}
      sx={{
        alignItems: "center",
        justifyContent: "space-around",
        padding: { xs: 0, sm: "50px", lg: "60px" },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          textAlign: { xs: "center", lg: "initial" },
          alignItems: { xs: "center", lg: "initial" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: { xs: "30px", sm: "50px" } }}
        >
          Automate Your Accounting System And Reap the Rewards
        </Typography>
        <Typography sx={{ opacity: "60%", width: { xs: "80%" } }}>
          Whether you are a small business, a non profit or a more medium size
          enterprise, we’ll help you find the perfect accounting solution. Run
          multiple companies? We can help with that too by centralizing
          accounting for all your businesses.
        </Typography>
        <Typography sx={{ width: { xs: "80%" } }}>
          Our accounting software is designed to make your business life easier.
          It automates processes like pay-slips and tax calculations, so you
          don’t have to worry about pay-slip errors ever again. Pay your
          employees the right amount on time, every time with an efficient,
          intuitive accounting solution.
        </Typography>
        <Button
          sx={{
            color: "white",
            backgroundColor: "hsl(148, 55%, 39%)",
            textTransform: "none",
            height: "42px",
            width: "140px",
          }}
          disableElevation // to remove elevation from button
          disableRipple
        >
          Try it now
        </Button>
      </Stack>

      <Box
        component="img"
        src="/images/sctnimg.png"
        alt="hero-img"
        sx={{ width: { xs: "300px", sm: "600px", lg: "600px" } }}
      />
    </Stack>
  );
}

export default Automate;
