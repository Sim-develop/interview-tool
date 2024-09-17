import Introduction from "./Introduction.tsx";
import Auth from "./Auth.tsx";
import { motion } from "framer-motion";
import { AbsoluteCenter, Box, Grid } from "@chakra-ui/react";

const Component = () => {
  return (
    <Box width="100%" height="100vh" position="relative">
      <AbsoluteCenter axis="both" width="80%" height="80%" maxW="4xl">
        <motion.div
          animate={{
            opacity: [0, 1],
            scale: [0, 1],
            borderRadius: ["100px", "12px"],
          }}
          transition={{ duration: 1, bounce: 0 }}
          style={{ height: "100%", overflow: "hidden" }}
        >
          <Grid templateColumns="repeat(2, 1fr)" height="100%">
            <Introduction />
            <Auth />
          </Grid>
        </motion.div>
      </AbsoluteCenter>
    </Box>
  );
};

export default Component;
