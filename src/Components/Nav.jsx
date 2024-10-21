import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack, Box } from "@mui/material";

function Nav() {
  return (
    <AppBar
      id="desktopNav"
      sx={{ backgroundColor: "white", color: "black" }}
      elevation={2}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          src="/images/logo-green 1 (3).png"
          sx={{
            width: { sm: "100px" },
          }}
        />
        {/*               
              Stack is a container in material ui and typography is used to display text, the efault text is paragraph tag <p></p> but here i changed the variant to a smaller text.
              sx is just style but i use sx so i can have access to other screen sizes, this is also from material ui same thing with spacing, to give space between the texts. */}

        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          spacing={{ sm: 2.3, lg: 5 }}
        >
          <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
            Home
          </Typography>
          <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
            Features
          </Typography>
          <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
            Pricing
          </Typography>
          <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
            FAQs
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{ alignItems: "center" }}
          spacing={{ sm: 2.3, lg: 5 }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "hsl(148, 55%, 39%)",
              borderColor: "hsl(148, 55%, 39%)",
              textTransform: "none",
              height: "32px",
              width: "90px",
            }}
            disableElevation // to remove elevation from button
            disableRipple
          >
            Log In
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "hsl(148, 55%, 39%)",
              textTransform: "none",
              height: "32px",
              width: "90px",
            }}
            disableElevation
            disableRipple
          >
            Sign Up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
