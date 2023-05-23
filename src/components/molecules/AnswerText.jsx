import { useContext, useState } from "react";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import AnswersContext from "../../contexts/AnswersContex";
import AnswerCorrection from "./AnswerCorrection";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem ;
    background-color: var(--bgSide);
    border-radius: var(--br);
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        > img {
            height: 60px;
            width: 60px;
            object-fit: cover;
            border-radius: 50px;
        }
        > div > svg {
            color: var(--links);
        }
        > div > svg:hover{
            cursor:pointer;
        }
    }
`;

const StyledThumbs = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            > p {
                margin: 5px;
                font-size: 1.5rem;
            }  
`;


const AnswerText = ({answer}) => {
    
    const { users, currentUser } = useContext(UsersContext);
    const { setAnswers, answersActionTypes } = useContext(AnswersContext);
    const [ correctionNeeded, setCorrectionNeeded ] = useState(false)
    
    const userWhoAnswered = users.find(user => 
        user.id === answer.userId
    );
        
    const deleteAnswer = () => {
        setAnswers(({
            type:answersActionTypes.delete,
            data: answer.id
        }))
    }
    
    return (  
        <StyledDiv>
            <div>
                <img src={userWhoAnswered.avatarURL} alt="" />
                <div>
                    {   
                        currentUser && currentUser.id === answer.userId?
                        <>
                            <EditSharpIcon onClick={() => setCorrectionNeeded(true)}/>
                            <DeleteForeverSharpIcon 
                                className="deleteIcon"
                                onClick={()=>{deleteAnswer()}}
                            />
                        </> :
                        <span className="ivisible">{userWhoAnswered.userName}</span>
                    }
                </div>
            </div>
            <div>
                    <p>{answer.answer}</p>
                {
                    correctionNeeded &&
                    <AnswerCorrection 
                    setCorrectionNeeded={setCorrectionNeeded}
                    answerId = {answer.id}
                    setAnswers = {setAnswers}
                    answersActionTypes = {answersActionTypes}
                    />
                }
                {

                    answer.correctionDate && 
                    <p style={{color:'red', fontWeight:'bold'}}>
                        {`Last edited: ${answer.correctionDate.slice(0, 10)}`}
                    </p>
                }

            </div>

            <StyledThumbs>
                <ThumbUpIcon />
                <p>0</p>
                <ThumbDownIcon />
            </StyledThumbs>
        </StyledDiv>
    );
}
 
export default AnswerText;