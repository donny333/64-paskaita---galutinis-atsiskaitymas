import { createContext, useEffect, useReducer } from "react";

const QuestionsContext = createContext()

const questionsActionTypes = {
    load: 'load_all_questions',
    add: 'add_new_question'
}

const reducer = (state, action) =>{
    switch(action.type){
        case questionsActionTypes.load:
            return action.data
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
            questions
        }}
        >
            { children }
        </QuestionsContext.Provider>

    );
}

export { QuestionsProvider };
export default QuestionsContext;