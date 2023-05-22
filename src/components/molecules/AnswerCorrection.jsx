import styled from "styled-components";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useContext, useState } from "react";
import AnswersContext from "../../contexts/AnswersContex";

const StyledAnswerCorrection = styled.div`
    width: 100%;
    > form {
        display: flex;
    }
`;

const AnswerCorrection = ({setCorrectionNeeded, answerId, setAnswers, answersActionTypes}) => {

    // const [setAnswers, answersActionTypes] = useContext(AnswersContext)

    const [ values, setValues ] = useState({
        answer:''
    })

    const inputHandler = e => {
        setValues({answer:e.target.value})
    }

    const submitHandler = e => {
        setAnswers({
            type: answersActionTypes.edit,
            id: answerId,
            answer: values.answer
        })
        setCorrectionNeeded(false)
    }

    return ( 
        <StyledAnswerCorrection>
            <form onSubmit={e => submitHandler(e)}>
                <textarea 
                name="" id=""
                value={values.answer}
                onChange={(e)=>inputHandler(e)}                
                />
                <div>
                    <ClearSharpIcon onClick={() => setCorrectionNeeded(false)}/>
                    <button type="submit">
                        <CheckSharpIcon/>
                    </button>
                </div>
            </form>
        </StyledAnswerCorrection>
    );
}
 
export default AnswerCorrection;