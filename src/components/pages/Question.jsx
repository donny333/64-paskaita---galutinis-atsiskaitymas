import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import QuestionsContext from "../../contexts/QuestionsContext";
import Answer from "../molecules/Answer";
import AnswersContext from "../../contexts/AnswersContex";
import AnswerText from "../molecules/AnswerText";
import { v4 as generateId } from 'uuid'

const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 4rem);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    section {
        display: flex;
        gap: 2rem;
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
        svg:hover {
            cursor: pointer;
        }
    }
`;

const StyledThumbs = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            > p {
                margin: 5px;
                font-size: 1.5rem;
            }
            > svg:hover {
                cursor: pointer;
            }
`;

const Question = () => {

    const { currentUser, users, setUsers, UsersActionTypes }  = useContext(UsersContext);
    const { questionsActionTypes, setQuestions } = useContext(QuestionsContext);
    const { answers } = useContext(AnswersContext)
    const { id } = useParams();
    const [question, setQuestion] = useState([]);
    const navigate = useNavigate();
    const [userVote, setUserVote] = useState(0)
    const [ totalRating, setTotalRating ] = useState(0)

    useEffect(()=>{
        fetch(`http://localhost:8080/questions/${id}`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    },[])

    const deleteQuestion = () => {
        setQuestions({
            type: questionsActionTypes.delete,
            id: question.id
        })
        navigate('/')
    }


    let currentRating = 0;
    let userVotedUp = false;
    let userVotedDown = false;


    if(question.questionRating !== undefined){
        if(question.questionRating.length === 1){
            currentRating += question.questionRating[0].vote
        } else if(question.questionRating.length > 1){
            question.questionRating.forEach(rate => {currentRating += rate.vote})
        }
        if(currentUser) {
            question.questionRating.forEach(rate => {
                if(rate.userId === currentUser.id){
                    if(rate.vote === 1){
                        userVotedUp = true
                    } else if(rate.vote === -1){
                        userVotedDown = true
                    }
                }
            })
        }
    }
    
    const questionRatingUp = () => {
        if(currentUser && userVote < 1){
            setTotalRating(totalRating + 1)
            setUserVote(userVote + 1)
            setQuestions({
                type: questionsActionTypes.addQR,
                questionId:question.id,
                data: [...question.questionRating, {
                    id: generateId(),
                    userId: currentUser.id,
                    vote: userVote
                }]
            })
        }
    }

    console.log(totalRating)
    console.log(question)
    
    const questionRatingDown = () => {
        if(currentUser && userVote > -1){
            setTotalRating(totalRating - 1)
            setUserVote(userVote - 1)
            setQuestions({
                type: questionsActionTypes.addQR,
                questionId:question.id,
                data: [...question.questionRating, {
                    id: generateId(),
                    userId: currentUser.id,
                    vote: userVote
                }]
            })
        }
    }
    
    return ( 
        <StyledMain>
            <section>
                <StyledThumbs>
                    {

                    }
                    <ThumbUpIcon 
                        onClick={() => questionRatingUp()}
                        style={{ color: userVote === 1 && 'green'}}
                    />
                    <p>{totalRating}</p>
                    <ThumbDownIcon 
                        onClick={() => questionRatingDown()} 
                        style={{ color: userVote === -1 && 'red'}}
                    />
                </StyledThumbs>
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
                                        <DeleteForeverSharpIcon 
                                            className="deleteIcon"
                                            onClick={()=>{deleteQuestion()}}
                                        />
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
            </section>
            {
                answers &&
                answers.map(answer => {
                    if(answer.questionID === question.id){
                        return <AnswerText
                            key={answer.id}
                            answer={answer}                           
                        />
                    }
                })
            }
            {
                currentUser && 
                <Answer 
                userId = {currentUser.id}
                questionID = {question.id}
                />
            }

        </StyledMain>
    );
}
 
export default Question;