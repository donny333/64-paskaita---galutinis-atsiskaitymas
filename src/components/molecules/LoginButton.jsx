import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

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
        >div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            > img{
                height: 50px;
                width: 50px;
                object-fit: cover;
                border-radius: 25px;
            }
            > p{
                font-size: 1.25rem;
            }
            > span:hover{
                cursor: pointer;
            }
        }
`;

const LoginButton = () => {

    const { currentUser, setCurrentUser } = useContext(UsersContext);

    return (  
        <StyledDiv>
            {
                currentUser ?
                    <div>
                        <img src={currentUser.avatarURL} alt={`${currentUser.userName} avatar`} />
                        <p>{currentUser.userName}</p>
                        <span onClick={() => setCurrentUser(null)}><LogoutSharpIcon/></span>
                    </div> :
                    <Link to={'/login'}>
                        <button>Login</button>
                    </Link>
            }
        </StyledDiv>
    );
}
 
export default LoginButton;