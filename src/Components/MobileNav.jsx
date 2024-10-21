import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function MobileNav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <AppBar id="mobileNav" sx={{ backgroundColor: "white" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            src="/images/logo-green 1 (3).png"
            sx={{
              width: { xs: "100px" },
            }}
          />
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box width="280px">
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
          <Stack spacing={6} sx={{ alignItems: "center" }}>
            <Typography>Home</Typography>
            <Typography>Features</Typography>
            <Typography>Pricing</Typography>
            <Typography>FAQs</Typography>
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
        </Box>
      </Drawer>
    </>
  );
}

export default MobileNav