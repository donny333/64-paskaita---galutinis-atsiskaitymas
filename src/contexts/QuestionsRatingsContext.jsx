import { createContext, useEffect, useReducer } from "react";

const QuestionsRatingsContext = createContext();

const questionsRatingsActionTypes = {
    load: 'load_all_questions_ratings'
}

const reducer = (state, action) => {
    switch(action.type){
        case questionsRatingsActionTypes.load:
            return action.data
        default:
            return state
    }
}


const QuestionsRatingsProvider = ( { children } ) => {

    const [questionsRatings, setQuestionsRatings] = useReducer(reducer, [])

    useEffect(()=>{
        fetch('http://localhost:8080/questionsRatings')
            .then(res => res.json())
            .then(data => setQuestionsRatings({
                type: questionsRatingsActionTypes.load,
                data: data
            }))
    },[])

    // console.log(questionsRatings)

    return ( 
        <QuestionsRatingsContext.Provider
            value={{
                questionsRatings,
                setQuestionsRatings,
                questionsRatingsActionTypes
            }}
        >
            { children }
        </QuestionsRatingsContext.Provider>
    );
}

export default QuestionsRatingsContext;
export { QuestionsRatingsProvider };