import styled from "styled-components";
import Logo from "../atoms/Logo";

const StyledHeader = styled.header`
    background: rgb(27,27,30);
    background: linear-gradient(90deg, rgba(27,27,30,1) 0%, rgba(109,109,115,1) 100%);
    height: 100px;
`;

const Header = () => {
    return ( 
        <StyledHeader>
            <Logo />
            <div>
                
            </div>
        </StyledHeader>
    );
}
 
export default Header;