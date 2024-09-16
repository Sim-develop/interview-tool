import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { theme } from "../../assets/theme/theme";
import { InputTypeProps } from "./Input.type";

const Component = ({
  type,
  placeholder,
  subElement,
  addOn,
  id,
  ...prop
}: InputTypeProps) => {
  const { inputLeftElement, inputRightElement } = subElement ?? {};
  const { addOnLeft, addOnRight } = addOn ?? {};
  return (
    <InputGroup size="md">
      <Input
        id={id}
        pr="4rem"
        background={theme.colors.primaryText}
        type={type}
        placeholder={placeholder}
        _placeholder={{ opacity: 0.4, color: theme.colors.primaryDark }}
        focusBorderColor="transparent"
        {...prop}
      />
      {inputLeftElement && (
        <InputLeftElement width="4.5rem">{inputLeftElement}</InputLeftElement>
      )}
      {inputRightElement && (
        <InputRightElement width="4.5rem">
          {inputRightElement}
        </InputRightElement>
      )}
      {addOnLeft && <InputLeftAddon>{addOnLeft}</InputLeftAddon>}
      {addOnRight && <InputRightAddon>{addOnRight}</InputRightAddon>}
    </InputGroup>
  );
};

export default Component;
