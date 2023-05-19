import styled from "styled-components";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        > p {
            margin: 0;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: var(--br);
        }
        > div {
            display: flex;
            align-items: center;
            gap: 1rem;
                > h1 {
                    margin: 0;
                }
                > a {
                    color: var(--links);
                    > svg{
                        font-size: 2rem;
                    }
                }
                > svg {
                    color: var(--links);
                    font-size: 2rem;
                }
        }
    }
`;

const QuestionBlock = ( { question } ) => {

    const { currentUser }  = useContext(UsersContext)

    return ( 
        <StyledDiv>
            <div>
                <div>
                    <h1>{question.title}</h1>
                    {   
                        currentUser && currentUser.id === question.userId?
                        <>
                            <Link to={`/${question.id}/edit`}>
                                <EditSharpIcon />
                            </Link>
                                <DeleteForeverSharpIcon className="deleteIcon"/>
                        </> :
                        <span className="ivisible"></span>
                    }
                </div>
                <p>{question.tag}</p>
            </div>
            <h2>{question.description}</h2>
            <p>{question.text}</p>
        </StyledDiv>
    );
}
 
export default QuestionBlock;