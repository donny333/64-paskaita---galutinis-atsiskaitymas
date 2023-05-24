import styled from "styled-components";
import UsersSideBar from "../organisms/UsersSideBar";
import HomeMainView from "../organisms/HomeMainView";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 2rem);
`;

const Home = () => {
    return ( 
        <StyledMain>
            {/* <UsersSideBar /> */}
            <HomeMainView />
        </StyledMain>
    );
}
 
export default Home;