import {theme} from "../../assets/theme/theme.ts";
import styled, {keyframes} from "styled-components";

const PageWrapper = styled.div`
    background-color: ${theme.colors.primaryLight};
    padding: 20px;
`
const moveAround = keyframes`
    10%, 90% {
        transform: translate(0, 0);
    }
    20%, 30% {
        transform: translate(0, 100%);
    }
    40%, 60% {
        transform: translate(100%, 100%);
    }
    70%, 80%{
        transform: translate(100%, 0);
    }
`;

const Blocks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;   
`

const Block = styled.span<{backgroundColor: string}>`
    background-color: ${props => props.backgroundColor};
    aspect-ratio: 1/1;
    border-radius: 12px;
    animation: ${moveAround} 10s linear infinite;
`
const Component =() => {
    return (
        <PageWrapper>
            <Blocks>
                {Array(1).fill("").map((_, index) => {
                    const color = (index % 3) === 0 ? theme.colors.primaryDark : theme.colors.primaryMedium;
                    return (
                        <Block backgroundColor={color}/>
                    );
                })}
            </Blocks>
        </PageWrapper>
    )
}

export default Component
