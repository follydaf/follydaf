import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";

function Works() {
  const steps = [
    {
      number: 1,
      title: "Sign up",
      description: "Choose the favorite pricing and sign up",
    },
    {
      number: 2,
      title: "Pricing",
      description: "Choose the favorite pricing and sign up",
    },
    {
      number: 3,
      title: "Link Accounts",
      description: "Choose the favorite pricing and sign up",
    },
    {
      number: 4,
      title: "Add Employee's Info",
      description: "Choose the favorite pricing and sign up",
    },
    {
      number: 5,
      title: "Sign up",
      description: "Choose the favorite pricing and sign up",
    },
    {
      number: 6,
      title: "Sign up",
      description: "Choose the favorite pricing and sign up",
    },
  ];

  return (
    <Stack
      spacing={{ xs: 3, sm: 4, lg: 0 }}
      direction={{ xs: "column", lg: "row" }}
      sx={{
        alignItems: "center",
        justifyContent: "space-around",
        padding: { xs: 0, sm: "80px", lg: "60px" },
      }}
    >
      {/* Left Side Steps Section */}

      <Stack
        spacing={4}
        sx={{
          alignItems: "center",
          textAlign: { xs: "center", sm: "initial" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", fontSize: { xs: "50px", sm: "80px" } }}
        >
          How it works
        </Typography>
        <Typography sx={{ width: { xs: "70%", lg: "60%" } }}>
          Automate your accounting management system today. Our software
          solutions will help streamline accounting management
        </Typography>
        <Grid container spacing={3} sx={{ maxWidth: "600px" }}>
          {steps.map((step, index) => (
            <Grid item xs={11.2} sm={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  textAlign: "left",
                  backgroundColor: index === 0 ? "grey.800" : "grey.200", // Use index for alternating colors
                  color: index === 0 ? "white" : "grey.800",
                  padding: "20px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "white",
                    color: "grey.800",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {step.number}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {step.title}
                </Typography>
                <Typography>{step.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* Right Side Phone Image */}
      <Box
        component="img"
        alt="phone-img"
        src="/images/phone.png"
        sx={{ width: { xs: "100px", sm: "180px", lg: "400px" } }}
      />
    </Stack>
  );
}

export default Works;
