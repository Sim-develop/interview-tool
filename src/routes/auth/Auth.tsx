import styled from "styled-components";
import {theme} from "../../assets/theme/theme.ts";

const PageWrapper = styled.div`
    background-color: ${theme.colors.primaryMedium};
    padding: 20px;
`
const Component = () => {
    return (
        <PageWrapper>
        <p>This is Auth form</p>
        </PageWrapper>
    )
}

export default Component