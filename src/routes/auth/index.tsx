import styled from "styled-components";
import Introduction from "./Introduction.tsx";
import Auth from "./Auth.tsx";
import { motion } from "framer-motion";
import { AbsoluteCenter, Box, Flex } from "@chakra-ui/react";



const Component = () => {
    return (
        <Box as={motion.div} initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition='1s' width='100%' height="100vh" position="relative">                
            <AbsoluteCenter axis='both' width="80%" height={"80%"}>
                <Flex height={"100%"} width="100%">
                <Introduction/>
                <Auth/>
                </Flex>
            </AbsoluteCenter>
        </Box>
    )
}

export default Component