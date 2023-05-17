import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogo = styled.div`
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;
        > h1{
            margin: 0;
            letter-spacing: 3px;
            font-weight: 400;
        }
        > svg{
            height: 2rem;
            width: 2rem;
        }
    }
`;

const Logo = () => {
    return ( 
        <StyledLogo>
            <Link to={'/'}>
                <ShareSharpIcon />
                <h1>ONNE</h1>
                <ShareSharpIcon />
                <h1>T</h1>
            </Link>
        </StyledLogo>
     );
}
 
export default Logo;