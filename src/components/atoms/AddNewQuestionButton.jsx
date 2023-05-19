import styled from "styled-components";
import { Link } from "react-router-dom";
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
`;

const AddNewQuestionButton = () => {

    const { currentUser, setCurrentUser } = useContext(UsersContext);

    return (  
        <StyledDiv>
            {
                currentUser &&
                    <Link to={'/add-question'}>
                        <button>Add question</button>
                    </Link>
            }
        </StyledDiv>
    );
}
 
export default AddNewQuestionButton;