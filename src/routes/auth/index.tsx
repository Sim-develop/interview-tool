import styled from "styled-components";
import Introduction from "./Introduction.tsx";
import Auth from "./Auth.tsx";

const PageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 1024px;
        height: 80%;
        border-radius: 12px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
    }
`

const Component = () => {
    return (
        <PageWrapper>
            <div>
                <Introduction/>
                <Auth/>
            </div>
        </PageWrapper>
    )
}

export default Component