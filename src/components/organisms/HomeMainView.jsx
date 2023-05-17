import styled from "styled-components";
import PostInMain from "../molecules/PostInMain";

const StyledSection = styled.section`
    > div:first-child {
        position: relative;
        background-color: #3a2e2e72;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: -10;
            border-radius: var(--br);
        }
    }
    > div:last-child{
        >h1{
            text-align: center;
            margin: 0;
            margin-top: 1rem;
        }
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

const HomeMainView = () => {
    return ( 
        <StyledSection>
            <div>
                <h2>Connect your knowledge.</h2>
                <img src="https://media.discordapp.net/attachments/1101880155149967370/1108033219019939940/donny333_an_abstract_image_that_represents_connections_or_netwo_1e71d5cb-52cc-41b8-9d4a-ae79100a3420.png?width=1509&height=566" alt="molecules connecting together" />
            </div>
            <div>
                <h1>All posts</h1>
                <PostInMain />
                <PostInMain />
                <PostInMain />
                <PostInMain />
                <PostInMain />
                <PostInMain />
                <PostInMain />
                <PostInMain />

            </div>
        </StyledSection>
    );
}
 
export default HomeMainView;