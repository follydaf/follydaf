import React from "react";
import { Button, Typography, Stack } from "@mui/material";

function Discover() {
  return (
    <Stack
      spacing={4}
      className="discover"
      sx={{
        alignItems: "center",
        textAlign: "center",
        padding: { xs: "30px", lg: "80px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "30px", sm: "28px", lg: "50px" },
        }}
      >
        Discover the benefits of our accounting solutions
      </Typography>
      <Button
        sx={{
          color: "hsl(148, 55%, 39%)",
          backgroundColor: "white",
          "&:hover": {
            border: " 1px solid white",
            backgroundColor: "hsl(148, 55%, 39%)",
            color: "white",
          },
          textTransform: "none",
          fontWeight: "bold",
        }}
        disableElevation
        disableRipple
      >
        Sign Up now
      </Button>
    </Stack>
  );
}

export default Discover;