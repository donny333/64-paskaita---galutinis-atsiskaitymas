import styled from "styled-components";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useState } from "react";

const StyledAnswerCorrection = styled.div`
    width: 100%;
    > form {
        display: flex;
        gap: 1rem;
        > textarea{
            width: 600px;
            height: 4rem;
            border-radius: var(--br);
            padding: 10px;
        }
        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > button {
                background-color: var(--bgSide);
                border: none;
            }
            svg{
                color: white;
                width: 2rem;
                height: 2rem;
            }
            svg:hover{
                cursor: pointer;
            }
        }
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
        e.preventDefault();
        const correctionDate = new Date();
        console.log(correctionDate.toString())
        setAnswers({
            type: answersActionTypes.edit,
            id: answerId,
            answer: values.answer,
            correctionDate: correctionDate.toISOString()
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