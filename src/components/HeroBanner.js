import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position={'relative'} p={'20px'}
    >
      <Typography color={'#FF2625'} fontWeight='600' fontSize='26px'>
        Fittness App
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontsize: { lg: "44px", xs: "40px" } }}
      >
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontsize={"22px"} lineHeight={"35px"} mb={2}>
        check out the the most effective Exercises
      </Typography>
      <Button variant="contained" color="error" href="#Exercises">
        Explore Excerises
      </Button>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner
