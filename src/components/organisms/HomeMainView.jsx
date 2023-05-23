import styled from "styled-components";
import PostInMain from "../molecules/PostInMain";
import { useContext, useState } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";
import UsersContext from "../../contexts/UsersContext";
import AnswersContext from '../../contexts/AnswersContex'

const StyledSection = styled.section`
    > div:first-child {
        position: relative;
        background-color: #3a2e2e72;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        > h1 {
            letter-spacing: 3px;
        }
        > img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: -10;
            border-radius: var(--br);
        }
    }
    > div:last-child{
        > div:first-child {
            display: flex;
            justify-content: space-between;
            padding: 0 2rem;
            >h1{
                text-align: center;
                margin: 0;
                margin-top: 1rem;
                font-weight: 400;
            }
            >h1:hover{
                cursor: pointer;
            }
        }
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

const HomeMainView = () => {

    const { questions } = useContext(QuestionsContext)
    const { users } = useContext(UsersContext)
    const { answers } = useContext(AnswersContext)
    const [ filter, setFilter ] = useState(null)
    
    return ( 
        <StyledSection>
            <div>
                <h1>CONNECT YOUR KNOWLEDGE.</h1>
                <img src="https://media.discordapp.net/attachments/1101880155149967370/1108033219019939940/donny333_an_abstract_image_that_represents_connections_or_netwo_1e71d5cb-52cc-41b8-9d4a-ae79100a3420.png?width=1509&height=566" alt="molecules connecting together" />
            </div>
            <div>
                <div>
                    <h1 
                    onClick={()=>setFilter(null)}
                    style={{color: filter === null && 'var(--links)'}}
                    >
                        All questions
                    </h1>
                    <h1 
                    onClick={()=>setFilter('answered')}
                    style={{color: filter === 'answered' && 'var(--links)'}}
                    >
                        Answered questions
                    </h1>
                    <h1 
                    onClick={()=>setFilter('unanswered')}
                    style={{color: filter === 'unanswered' && 'var(--links)'}}
                    >
                        Unaswered questions
                    </h1>
                </div>
                {
                    !questions ?
                    <h1>LOADING</h1> :
                    questions.map(question => {
                        if(filter === null){
                            const usersPost = users.find(user => user.id === question.userId)
                            return <PostInMain 
                                key={question.id}
                                question={question}
                                user={usersPost}
                            />
                        } else if(filter === 'answered'){
                            const questionHasAnswer = answers.find(answer => answer.questionID === question.id)
                            if(questionHasAnswer){
                                const usersPost = users.find(user => user.id === question.userId)
                                return <PostInMain 
                                    key={question.id}
                                    question={question}
                                    user={usersPost}
                                />
                            }
                        } else {
                            const questionHasAnswer = answers.find(answer => answer.questionID === question.id)
                            if(!questionHasAnswer){
                                const usersPost = users.find(user => user.id === question.userId)
                                return <PostInMain 
                                    key={question.id}
                                    question={question}
                                    user={usersPost}
                                />
                            }
                        }
                    }
                    )
                }
            </div>
        </StyledSection>
    );
}
 
export default HomeMainView;