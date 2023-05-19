import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import QuestionsContext from "../../contexts/QuestionsContext";

const StyledDiv = styled.div`
    display: flex;
    gap: 10px;
        .deleteIcon {
            color: var(--links);
        }
        .deleteIcon:hover{
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color: var(links);
        }
`;

const EditIcons = ({ user, question }) => {

    const { currentUser } = useContext(UsersContext);
    const { setQuestions, questionsActionTypes } = useContext(QuestionsContext);
    const navigate = useNavigate();

    const deleteQuestion = () => {
        setQuestions({
            type: questionsActionTypes.delete,
            id: question.id
        })
    }


    return ( 
        <StyledDiv>
        {   
            currentUser && currentUser.id === user.id?
            <>
                <Link to={`/${question.id}/edit`}>
                    <EditSharpIcon />
                </Link>
                    <DeleteForeverSharpIcon 
                    className="deleteIcon"
                    onClick={()=>{deleteQuestion()}}                    
                    />
            </> :
            <span className="ivisible"></span>
        }
    </StyledDiv>
    );
}
 
export default EditIcons;