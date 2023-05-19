import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 4rem);
    padding: 2rem;
    display: grid;
    grid-template-columns: 100px 1fr;
    > div > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h1 {
            margin: 0;
        }
        > p {
            margin: 0;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: var(--br);
        }
    }
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

const Question = () => {

    const { id } = useParams();

    const [question, setQuestion] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:8080/questions/${ id }`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    },[])
    console.log(question)

    return ( 
        <StyledMain>
            <div>
                <ThumbUpIcon />
                <p>0</p>
                <ThumbDownIcon />
            </div>
            <div>
                <div>
                    <h1>{question.title}</h1>
                    <p>{question.tag}</p>
                </div>
                <p>{question.text}</p>
            </div>
        </StyledMain>
    );
}
 
export default Question;