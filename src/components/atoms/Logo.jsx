import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import styled from 'styled-components';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    > h1{
        margin: 0;
        letter-spacing: 3px;
    }
    > svg{
        height: 2rem;
        width: 2rem;
    }
`;

const Logo = () => {
    return ( 
        <StyledLogo>
            <ShareSharpIcon />
            <h1>ONNE</h1>
            <ShareSharpIcon />
            <h1>T</h1>
        </StyledLogo>
     );
}
 
export default Logo;