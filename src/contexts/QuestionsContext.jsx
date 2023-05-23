import { createContext, useEffect, useReducer } from "react";

const QuestionsContext = createContext()

const questionsActionTypes = {
    load: 'load_all_questions',
    add: 'add_new_question',
    edit: 'edit_question',
    delete: 'delete_question',
    addQR: 'add_new_question_rating'
}

const reducer = (state, action) =>{
    switch(action.type){
        case questionsActionTypes.load:
            return action.data
        case questionsActionTypes.edit:
            fetch(`http://localhost:8080/questions/${action.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    text:action.data.text,
                    description:action.data.description,
                    editDate:action.data.editDate,
                    tag:action.data.tag
                })
            })            
            return state.map(question =>{
                if(question.id === action.id){
                    return {...question, 
                        text:action.data.text,
                        description:action.data.description,
                        editDate:action.data.editDate,
                        tag:action.data.tag
                    }
                } else {
                    return question
                }
            })
        case questionsActionTypes.add:
            fetch(`http://localhost:8080/questions/`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
        case questionsActionTypes.delete:
            console.log('laba diena')
            fetch(`http://localhost:8080/questions/${action.id}`, { method: 'DELETE' })
            return state.filter(question => question.id !== action.id)
        case questionsActionTypes.addQR:
            return state.map(question => {
                if(question.id === action.questionId){
                    console.log(question)
                    const newRates = [...question.questionRating, action.data]
                    console.log(newRates)
                    return {
                        ...question,
                        questionRating:newRates
                    }
                }
            })
        default:
            return state
    }
}

const QuestionsProvider = ({ children }) => {

    const[questions, setQuestions] = useReducer(reducer, [])

    useEffect(()=>{
        fetch('http://localhost:8080/questions')
            .then(res => res.json())
            .then(data => setQuestions({
                type: questionsActionTypes.load,
                data: data
            }))
    },[])

    return ( 
        <QuestionsContext.Provider
        value={{
            questions,
            setQuestions,
            questionsActionTypes
        }}
        >
            { children }
        </QuestionsContext.Provider>

    );
}

export { QuestionsProvider };
export default QuestionsContext;