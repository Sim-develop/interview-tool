import { Flex } from "@chakra-ui/react";
import { FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { theme } from "../../assets/theme/theme";
import { useForm } from "react-hook-form";

const listVariants = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 5,
    },
  },
};

const itemVariants = {
  hidden: { x: 500, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 2 } },
};

const Component = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  function onSubmit(values: any) {
    console.log(values);
  }
  return (
    <Flex backgroundColor={theme.colors.primaryMedium} p={5} direction="column">
      <motion.ul variants={listVariants} initial="hidden" animate="visible">
        <motion.li variants={itemVariants}>Item 1</motion.li>
        <motion.li variants={itemVariants}>Item 2</motion.li>
        <motion.li variants={itemVariants}>Item 3</motion.li>
      </motion.ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            id="name"
            placeholder="name"
            {...register("name", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default Component;
