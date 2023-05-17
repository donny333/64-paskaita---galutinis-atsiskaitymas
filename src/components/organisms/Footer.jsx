import styled from "styled-components";
import SubscribeForm from "../molecules/SubscribeForm";
import FollowUs from "../molecules/FollowUs";

const StyledFooter = styled.footer`
    background: rgb(27,27,30);
    background: linear-gradient(90deg, rgba(27,27,30,1) 0%, rgba(109,109,115,1) 100%);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <p>© 1990-{new Date().getFullYear()} by connect.com, Inc.</p>
            <FollowUs />
            <SubscribeForm />
        </StyledFooter>
     );
}
 
export default Footer;