import React from "react";
import { Box, Stack, Typography , Button} from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "211px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      postion="relative"
      p={20}
    >
      <Typography color={"#FF2625"} fontWeight={600} fontSize={26}>
        Fittness App
      </Typography>

      <Typography fontWeight={700}
      sx={{fontsize : {lg : "44px", xs : "40px"}}}>
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontsize={'22px'} lineHeight={'35px'} mb={2}>check out the the most effective Exercises
      </Typography>
      <Button variant="contained" color="error">
        Explore Excerises 
      </Button>
    </Box>
  );
};

export default HeroBanner;
