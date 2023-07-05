import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../../../contexts/UsersContext";
import QuestionsContext from "../../../contexts/QuestionsContext";
import Answer from "../../molecules/Answer";
import AnswersContext from "../../../contexts/AnswersContex";
import AnswerText from "../../molecules/AnswerText";
import { StyledDiv, StyledMain, StyledThumbs} from "./QuestionStyles"
import { v4 as generateId } from 'uuid'

const Question = () => {

    const { currentUser }  = useContext(UsersContext);
    const { questionsActionTypes, setQuestions } = useContext(QuestionsContext);
    const { answers } = useContext(AnswersContext)
    const { id } = useParams();
    const [question, setQuestion] = useState([]);
    const navigate = useNavigate();
    const [ currentRating, setCurrentRating ] = useState(0)

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

    let primaryCurrentRating = 0;
    
    if(question.questionRating !== undefined){
        question.questionRating.forEach(rate => {
            if(!rate.userVotedUp && !rate.userVotedDown){
                primaryCurrentRating += 0;
            } else if(rate.userVotedUp && !rate.userVotedDown) {
                primaryCurrentRating += 1;
            } else if(!rate.userVotedUp && rate.userVotedDown){
                primaryCurrentRating -= 1;
            }
    });
}
    
    const questionRatingUp = () => {
        if(currentUser){
            if(question.questionRating.length > 0){
                let didUserVoted = question.questionRating.find(rate => currentUser.id === rate.userId)
                if(!didUserVoted){
                    console.log("User didn't voted")
                } else {
                    console.log("User voted")
                }
            } else {
                const newRating = {
                    id:generateId(),
                    userId: currentUser.id,
                    userVotedDown: false,
                    userVotedUp: true
                }
                setQuestion(
                   {...question,
                    questionRating:[newRating]
                }
                )
                setQuestions({
                    type: questionsActionTypes.addQR,
                    questionId: question.id,
                    data: [newRating]
                })

            }

        }
    }
    
    const questionRatingDown = () => {

    }
    
    return ( 
        <StyledMain>
            <section>
                <StyledThumbs>
                    {

                    }
                    <ThumbUpIcon 
                        onClick={() => questionRatingUp()}
                        style={{ color: question.questionRating && currentUser && question.questionRating.find((rating)=> rating.userId === currentUser.id && rating.userVotedUp === true) ? 'green' : ''}}
                    />
                    <p>{primaryCurrentRating + currentRating}</p>
                    <ThumbDownIcon 
                        onClick={() => questionRatingDown()}
                        style={{ color: question.questionRating && currentUser && question.questionRating.find((rating)=> rating.userId === currentUser.id && rating.userVotedDown === true) ? 'red' : ''}}
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