import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
        a > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 20px;
        }
        a > button:hover {
            cursor: pointer;
        }
`;

const LoginButton = () => {
    return (  
        <StyledDiv>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
        </StyledDiv>
    );
}
 
export default LoginButton;