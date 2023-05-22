import { useContext, useState } from "react";
import styled from "styled-components";
import {v4 as generateID} from 'uuid'
import AnswersContext from "../../contexts/AnswersContex";


const StyledDiv = styled.div`
    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        > textarea {
            height: 5rem;
            width: 80%;
            border-radius: var(--br);
            padding: 10px;
        }
        > button {
            height: 2rem;
            padding: 5px 20px;
            border: none;
            background-color: white;
            color: black;
            border-radius: var(--br);
        }
        > button:hover{
            cursor: pointer;
        }
    }
`;

const Answer = ({ userId, questionID }) => {

    const { setAnswers, answersActionTypes } = useContext(AnswersContext);

    const [values, setValues] = useState({
        answer:''
    })
    
    const inputHandler = e => {
        setValues({answer:e.target.value})
    }
    
    const submitHandle = e => {
        e.preventDefault();
        const newAnswer = {
            ...values,
            userId:userId,
            questionID:questionID,
            id:generateID()
        }
        setAnswers({
            type:answersActionTypes.add,
            data: newAnswer
        })
        setValues({answer:''})
    }

    return ( 
        <StyledDiv>
            <form onSubmit={e => submitHandle(e)}>
                <textarea 
                name="answer" id="answer"
                value={values.answer}
                onChange={(e)=>inputHandler(e)}
                />
                <button type="submit">Answer</button>
            </form>
        </StyledDiv>
    );
}
 
export default Answer;