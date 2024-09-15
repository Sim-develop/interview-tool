import {theme} from "../../assets/theme/theme.ts";
import styled, {keyframes} from "styled-components";

const PageWrapper = styled.div`
    background-color: ${theme.colors.primaryLight};
    padding: 20px;
`
const moveAround= (index: number) => keyframes`
    0%, 20% {
        transform: translate(0, 0);
    }
    25%, 45% {
        transform: translate(${index % 3 === 0 ? 0 : index % 2 === 0 ? "100%" : "-100%"}, ${index % 3 !== 0 ? 0 : index !== 0 ? "-100%" : "100%" });
    }
    50%, 70% {
        transform: translate(${index % 2 === 0 ? "100%" : "-100%"}, ${index >= 2 ? '-100%' : "100%" });
    }
    75%, 95%{
        transform: translate(${index % 3 !== 0 ? 0 : index !== 0 ? "-100%" : "100%"}, ${index % 3 !== 0 ? index % 2 === 0 ? "-100%" : "100%" : 0});
    }
`;

// const moveRules = [
//     {x1:0,y1:100, x2:100, y2:100, x3:100, y3:0},
//     [{x:-100,y:0}, {x:-100, y:100}, {x:0, y:100}],
//     [{x:100, y:0}, {x:100, y:-100}, {x:0, y:-100}],
//     [{x:0,y:-100}, {x:-100, y:-100}, {x:-100, y:0}],
// ]

const Blocks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Block = styled.span<{backgroundColor: string, index: number}>`
    aspect-ratio: 1/1;
    padding: 20px;
    animation: ${props => moveAround(props.index)} 10s linear infinite;
    >div {
        background-color: ${props => props.backgroundColor};
        width: 100%;
        height: 100%;
        border-radius: 10%;
        color: ${theme.colors.primaryText};
    }
`
const Component =() => {
    return (
        <PageWrapper>
            <Blocks>
                {Array(4).fill("").map((_, index) => {
                    const color = (index % 3) === 0 ? theme.colors.primaryDark : theme.colors.primaryMedium;
                    return (
                        <Block backgroundColor={color} index={index}>
                            <div>Guest</div>
                        </Block>
                    );
                })}
            </Blocks>
        </PageWrapper>
    )
}

export default Component
