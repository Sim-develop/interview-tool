import { theme } from "../../assets/theme/theme.ts";
import styled, { keyframes } from "styled-components";
import { Box, Grid } from "@chakra-ui/react";

const moveAround = (index: number) => keyframes`
    0%, 20% {
        transform: translate(0, 0);
    }
    25%, 45% {
        transform: translate(${
          index % 3 === 0 ? 0 : index % 2 === 0 ? "100%" : "-100%"
        }, ${index % 3 !== 0 ? 0 : index !== 0 ? "-100%" : "100%"});
    }
    50%, 70% {
        transform: translate(${index % 2 === 0 ? "100%" : "-100%"}, ${
  index >= 2 ? "-100%" : "100%"
});
    }
    75%, 95%{
        transform: translate(${
          index % 3 !== 0 ? 0 : index !== 0 ? "-100%" : "100%"
        }, ${index % 3 !== 0 ? (index % 2 === 0 ? "-100%" : "100%") : 0});
    }
`;

const Block = styled.span<{ backgroundcolor: string; index: number }>`
  aspect-ratio: 1/1;
  padding: 20px;
  animation: ${(props) => moveAround(props.index)} 20s ease-in-out infinite;
  > div {
    background-color: ${(props) => props.backgroundcolor};
    width: 100%;
    height: 100%;
    border-radius: 10%;
    color: ${theme.colors.primaryText};
  }
`;
const Component = () => {
  return (
    <Box background={theme.colors.primaryLight} p={5}>
      <Grid templateColumns="repeat(2, 1fr)">
        {Array(4)
          .fill("")
          .map((_: any, index: number) => {
            const color =
              index % 3 === 0
                ? theme.colors.primaryDark
                : theme.colors.primaryMedium;
            return (
              <Block backgroundcolor={color} index={index} key={index}>
                <div>Guest</div>
              </Block>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Component;
