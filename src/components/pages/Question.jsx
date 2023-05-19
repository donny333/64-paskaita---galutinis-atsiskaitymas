import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 4rem);
    padding: 2rem;
    display: grid;
    grid-template-columns: 100px 1fr;

    > div:first-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        > p {
            margin: 5px;
            font-size: 1.5rem;
        }
    }
    
`;

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

const Question = () => {

    const { currentUser }  = useContext(UsersContext)

    const { id } = useParams();

    const [question, setQuestion] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8080/questions/${ id }`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    },[])
    
    return ( 
        <StyledMain>
            <div>
                <ThumbUpIcon />
                <p>0</p>
                <ThumbDownIcon />
            </div>
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
                {   
                    question.editDate && <p style={{color:'red', fontWeight:'bold'}}>{`Last edited: ${question.editDate.slice(0, 10)}`}</p>
                }
            </StyledDiv>

        </StyledMain>
    );
}
 
export default Question;