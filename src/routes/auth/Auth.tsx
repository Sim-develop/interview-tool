import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { motion } from "framer-motion";
import { theme } from "../../assets/theme/theme";

const Component = () => {
    // const {toogleForm, setToggleForm} = React.useState(false)
    return (

        <Flex 
        backgroundColor={theme.colors.primaryMedium} 
        p={5} direction="column" >
            <Box fontSize="3xl" as={motion.div} initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition='0.5'>Sign Up</Box>
        </Flex>
    )
}

export default Component