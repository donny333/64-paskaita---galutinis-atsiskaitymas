import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        > div{
            display: flex;
            > label {
                display: block;
                background-color: white;
                color: black;
                border-top-left-radius: var(--br);
                border-bottom-left-radius: var(--br);
                line-height: 2rem;
                padding-left: 10px;
                width: 75px;
            }
            > input {
                width: 200px;
                height: 2rem;
                border: none;
                background-color: white;
                border-top-right-radius: var(--br);
                border-bottom-right-radius: var(--br);
                padding: 0px 10px;
            }
        }
        > p {
            color: red;
            font-size: 1.25rem;
            margin: 0;
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 10px;
        }
    }
    a {
        text-decoration: none;
        color: var(--links);
    }
`;

const Login = () => {

    const navigate = useNavigate();

    const {users, setCurrentUser } = useContext(UsersContext);

    const [ wrongLogIn, setWrongLogin ] = useState(false)
    
    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const inputHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e =>{
        e.preventDefault();
        const logingUser = users.find((user)=>
            user.email === values.email && user.password === values.password
        )
        if(!logingUser){
            setWrongLogin(true);
        } else {
            setCurrentUser(logingUser);
            setWrongLogin(false);
            navigate('/')
        }
    }
    
    return ( 
        <StyledMain>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                    name="email" id="email"
                    value={values.email}
                    onChange={e => {
                        inputHandler(e)
                    }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    name="password" id="password"
                    value={values.password}
                    onChange={e => {
                        inputHandler(e)
                    }}
                    />
                </div>
                <button type="submit">Login</button>
                {
                    wrongLogIn && <p>Wrong login data!</p>
                }
            </form>
            <p>If you dont have an account, click <Link to={'/register'}>here</Link> to register.</p>
        </StyledMain>
    );
}
 
export default Login;