import styled from "styled-components";

const StyledDiv = styled.div`
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 20px;
        }
        > button:hover {
            cursor: pointer;
        }
`;

const LoginButton = () => {
    return (  
        <StyledDiv>
            <button>Login</button>
        </StyledDiv>
    );
}
 
export default LoginButton;