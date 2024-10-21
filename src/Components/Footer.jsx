import React from "react";
import { Typography, Stack } from "@mui/material";
function Footer() {
  return (
      <Stack
      direction={{ lg: "row" }}
      sx={{alignItems:"center" ,justifyContent: "space-between", padding: "64px" }}
    >
      <Stack spacing={2}>
        <Typography>Copyright © 2023 Promix</Typography>
        <Typography> All rights reserved</Typography>
      </Stack>
      <Stack>
        <Typography variant="h6">Product</Typography>
        <Typography> Individual</Typography>
        <Typography>Business</Typography>
        <Typography>Request Demo </Typography>
        <Typography> Pricing</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h6">Legal</Typography>
        <Typography> Privacy Policy</Typography>
        <Typography> Terms of Service</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h6">Resources </Typography>
        <Typography>FAQs</Typography>
        <Typography> Blog </Typography>
        <Typography>Career</Typography>
        <Typography>Customer Stories</Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography>info@brookessoftware.com</Typography>
        <Typography>+234 816 124 1827 , +234 806 020 2011</Typography>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
          <input placeholder="Your email address" style={{ border: "none" }} />
          <img src="/images/footer-send.svg" alt="send-icon" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
