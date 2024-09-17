import {
  Checkbox,
  Flex,
  FormErrorMessage,
  Link,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { FormControl, Button, Text } from "@chakra-ui/react";
import { theme } from "../../assets/theme/theme";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "../../schemas/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Lock, Unlock } from "../../assets/icons";
import Input from "../../components/Input";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Component = () => {
  const [show, setShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => console.log(data);
  return (
    <Flex
      background={theme.colors.primaryMedium}
      p={5}
      direction="column"
      alignItems="stretch"
      justifyContent="center"
    >
      <Text fontSize="4xl" textAlign="center" mb={10}>
        Hello Again!
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack
          spacing={5}
          as={motion.ul}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <FormControl
            isInvalid={!!errors.email}
            as={motion.div}
            variants={itemVariants}
          >
            <Input id="email" placeholder="Email" {...register("email")} />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors.password}
            as={motion.div}
            variants={itemVariants}
          >
            <Input
              id="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              subElement={{
                inputRightElement: (
                  <Button
                    h="3rem"
                    size="sm"
                    background="transparent"
                    _hover={{ background: "transparent" }}
                    onClick={() => setShow(!show)}
                  >
                    {show ? <Unlock height="1rem" /> : <Lock height="1rem" />}
                  </Button>
                ),
              }}
              {...register("password")}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Flex
            justifyContent="space-between"
            width="100%"
            as={motion.div}
            variants={itemVariants}
          >
            <Checkbox colorScheme="#E5E5CB" color={theme.colors.primaryLight}>
              Remember Me
            </Checkbox>
            <Link color={theme.colors.primaryText}>Recovery Password</Link>
          </Flex>
        </VStack>
        <Button
          mt={10}
          type="submit"
          variant="outline"
          color="white"
          colorScheme="transparent"
        >
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default Component;
