import styled from "styled-components";
import Logo from "../atoms/Logo";
import SearchMain from "../molecules/SearchMain";
import LoginButton from "../molecules/LoginButton";
import AddNewQuestionButton from "../atoms/AddNewQuestionButton";

const StyledHeader = styled.header`
    background: rgb(27,27,30);
    background: linear-gradient(90deg, rgba(27,27,30,1) 0%, rgba(109,109,115,1) 100%);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

const Header = () => {
    return ( 
        <StyledHeader>
            <Logo />
            <SearchMain />
            <AddNewQuestionButton />
            <LoginButton />
        </StyledHeader>
    );
}
 
export default Header;