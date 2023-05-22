import { createContext, useEffect, useReducer } from "react";

const AnswersContext = createContext()

const answersActionTypes = {
    load: 'load_all_answers',
    add: 'add_new_answer',
    delete: 'delete_answer',
    edit: 'edit_answer'
}

const reducer = (state, action) => {
    switch(action.type){
        case answersActionTypes.load:
            return action.data
        case answersActionTypes.add:
            fetch('http://localhost:8080/answers', {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
            case answersActionTypes.delete:
                fetch(`http://localhost:8080/answers/${action.data}`, {
                    method: "DELETE"
                })
                return state.filter(answer => answer.id !== action.data)
            case answersActionTypes.edit:
                fetch(`http://localhost:8080/answers/${action.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        answer:action.answer,
                        correctionDate: action.correctionDate
                    })
                });
                return state.map(answerCorrection => {
                    if(answerCorrection.id === action.id){
                        return {
                            ...answerCorrection,
                            answer:action.answer, 
                            correctionDate:action.correctionDate                            
                        }
                    } else {
                        return answerCorrection
                    }
                })
        default:
            return state
    }
}

const AnswersProvider = ( {children } ) => {

    const [answers, setAnswers] = useReducer(reducer, [])

    useEffect(()=>{
        fetch('http://localhost:8080/answers')
            .then(res => res.json())
            .then(data => setAnswers({
                type: answersActionTypes.load,
                data: data
            }))
    },[]);

    return ( 
        <AnswersContext.Provider
        value={{
            answers,
            setAnswers,
            answersActionTypes            
        }}
        >
            { children }
        </AnswersContext.Provider>
    );
}
 
export { AnswersProvider };
export default AnswersContext;