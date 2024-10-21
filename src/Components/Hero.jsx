import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <Stack
      className="hero"
      direction={{ xs: "column-reverse", lg: "row" }}
      sx={{
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: { xs: "80px", lg: "60px" },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: { xs: "center", lg: "initial" },
          textAlign: { xs: "center", lg: "left" },
          marginLeft: { lg: "40px" },
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: { xs: "60px", sm: "80px" } }}
        >
          Seamless Accounting
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: { xs: "30px", sm: "50px" } }}
          >
            Software for SMEs
          </Typography>
          <Box
            component="img"
            src="/images/Vector 11.png"
            alt="img"
            sx={{
              width: { xs: "130px", sm: "240px" },
              position: "absolute",
              top: { sm: 60 },
              left: { xs: -2, sm: -4, lg: 0 },
            }}
          />
        </Box>
        <Typography sx={{ width: "80%" }}>
          Automate your accounting management system today. Our software
          solutions will help streamline account management
        </Typography>
        <Stack direction="row">
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
            Get started
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "black",
              border: "none",
              textTransform: "none",
            }}
            disableElevation // to remove elevation from button
            disableRipple
          >
            See how it works
          </Button>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Stack>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              10k
            </Typography>
            <Typography>Businesses</Typography>
          </Stack>
          <Stack>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              100k
            </Typography>
            <Typography>Customers</Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box
        component="img"
        src="/images/Group 427322620.png"
        alt="hero-img"
        sx={{ width: { xs: "300px", sm: "400px", lg: "600px" } }}
      />
    </Stack>
  );
}

export default Hero;