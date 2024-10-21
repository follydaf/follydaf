import React from "react";
import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  return (
    <Stack
      spacing={3}
      sx={{
        padding: { xs: "20px", sm: "50px", lg: "60px" },
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
        FAQs
      </Typography>
      <p>See answers to some frequently asked questions here</p>
      <Box sx={{ width: { lg: "60%" } }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Is there a free trial available ?
          </AccordionSummary>
          <AccordionDetails>
            Yes, you can try us for free for 30days. If you want, we'll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Can i change my plan later ?
          </AccordionSummary>
          <AccordionDetails>
            Yes, you can change your plan at anytime
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What is your cancellation Policy ?
          </AccordionSummary>
          <AccordionDetails>
            Yes, you can change your plan at anytime
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}

export default Faq;