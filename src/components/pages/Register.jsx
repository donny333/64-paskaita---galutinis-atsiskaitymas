import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {v4 as generateId} from 'uuid'
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                width: 150px;
            }
            > input {
                width: 250px;
                height: 2rem;
                border: none;
                background-color: white;
                border-top-right-radius: var(--br);
                border-bottom-right-radius: var(--br);
                padding: 0px 10px;
            }
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 10px;
        }
        > p {
            margin: 0;
            color: red;
        }
    }
    a {
        text-decoration: none;
        color: var(--links);
    }
`;

const values ={
    userName:'',
    email:'',
    avatarURL:'',
    password:'',
    repeatPassword:''
}

const usersSchema = Yup.object({
    userName: Yup.string()
        .min(3, 'Username should have at least 3 letters')
        .max(15, 'Username can have maximum 15 letters')
        .required('Field is required'),
    email: Yup.string()
        .email('Please enter valid e-mail.')
        .required('Field is required'),
    avatarURL: Yup.string()
        .url('Please enter valid URL')
        .required('Field is required'),
    password: Yup.string()
        .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .trim()
      .required('Input must be filled'),
    repeatPassword: Yup.mixed()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Input must be filled')
});

const Register = () => {
    const navigate = useNavigate();
    const { setCurrentUser, users, setUsers, UsersActionTypes} = useContext(UsersContext)
    const [userNameExists, setUserNameExists] = useState(false)
    const [emailExists, setEmailExists] = useState(false)

    const formik = useFormik({
        initialValues:values,
        validationSchema: usersSchema,
        onSubmit: (values) => {
            setEmailExists(false)
            setUserNameExists(false)
            const existingUser = users.find(user => user.userName === values.userName || user.email === values.email);
            if (existingUser){
                if(existingUser.email === values.email){
                    setEmailExists(true)
                } else if(existingUser.userName === values.userName) {
                    setUserNameExists(true)
                }
            }

            let existingEmail = false
            let existingUserName = false;
            if (existingUser){
                if(existingUser.email === values.email){
                    existingEmail = true
                } else if(existingUser.userName === values.userName){
                    existingUserName = true
                }
            }
            if(existingEmail == false && existingUserName == false){
                const newUser = {
                    ...values,
                    id: generateId()
                }
                delete newUser.repeatPassword
                setUsers({
                    type: UsersActionTypes.add,
                    data: newUser
                })
                setCurrentUser(newUser)
                navigate('/')
            }
        }
    })
    return (
        <StyledMain>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="userName">User name: </label>
                    <input type="userName"
                    name="userName" id="userName"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.userName && formik.errors.userName &&
                        <p>{formik.errors.userName}</p>
                    }
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                    name="email" id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.email && formik.errors.email &&
                        <p>{formik.errors.email}</p>
                    }
                <div>
                    <label htmlFor="avatarURL">Avatar URL: </label>
                    <input type="text"
                    name="avatarURL" id="avatarURL"
                    value={formik.values.avatarURL}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.avatarURL && formik.errors.avatarURL &&
                        <p>{formik.errors.avatarURL}</p>
                    }
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    name="password" id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.password && formik.errors.password &&
                        <p>{formik.errors.password}</p>
                    }
                <div>
                    <label htmlFor="repeatPassword">Repeat password: </label>
                    <input type="password"
                    name="repeatPassword" id="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.repeatPassword && formik.errors.repeatPassword &&
                        <p>{formik.errors.repeatPassword}</p>
                    }
                <button type="submit">Register</button>
                {
                    userNameExists && <p>This user name already exists.</p>
                }
                {
                    emailExists && <p>User with this email already exists.</p>
                }
            </form>

        </StyledMain>
    );
}
 
export default Register;