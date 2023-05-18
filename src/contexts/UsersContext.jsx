import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext = createContext();

const UsersActionTypes = {
    load: 'load_all_users',
    add: 'add_new_user'
}

const reducer = (state, action) => {
    switch(action.type){
        case UsersActionTypes.load:
            return action.data
        case UsersActionTypes.add:
            fetch('http://localhost:8080/users', {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(action.data)
            })
            return [...state, action.data]
        default:
            return state
    }
}

const UsersProvider = ({ children }) => {
    
    const [users, setUsers] = useReducer(reducer, []);
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers({
                type: UsersActionTypes.load,
                data: data
            }))
    },[])
    
    return ( 
        <UsersContext.Provider
            value={{
                users,
                setUsers,
                currentUser,
                setCurrentUser,
                UsersActionTypes
            }}
        >
            { children }
        </UsersContext.Provider>
     );
}

export { UsersProvider };
export default UsersContext;