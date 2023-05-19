import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { v4 as generateId } from 'uuid'
import QuestionsContext from "../../contexts/QuestionsContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 4rem);
    padding: 2rem;
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
                width: 125px;
            }
            > textarea {
                width: 600px;
                height: 15rem;
                border: none;
                background-color: white;
                border-top-right-radius: var(--br);
                border-bottom-right-radius: var(--br);
                padding: 0px 10px;
            }
            > input {
                width: 600px;
                border: none;
                background-color: white;
                border-top-right-radius: var(--br);
                border-bottom-right-radius: var(--br);
                padding: 0px 10px;
            }
        }
        > div:first-child > textarea{
            width: 600px;
            height: 2rem;
        }
        > div:nth-child(2) > textarea{
            width: 600px;
            height: 4rem;
        }
        > div:last-of-type {
            width: calc(755px - 20px);
            background-color: white;
            padding: 5px 0;
            border-radius: var(--br);
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            > div {
                display: flex;
                gap: 10px;
                > input {
                    width: 25px;
                }
                > label {
                    color: black;
                }
            }
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 10px;
        }
        > button:hover{
            cursor: pointer;
        }
        > p {
            margin: 0;
            color: red;
        }
    }
`;

const QuestionAdd = () => {

    const { currentUser } = useContext(UsersContext)
    const {setQuestions, questionsActionTypes} = useContext(QuestionsContext)
    const navigate = useNavigate();
    const [tagSelected, setTagSelected] = useState(true)

    !currentUser && navigate('/')

    const questionSchema = Yup.object({
        title: Yup.string()
            .min(10, 'Title should have at least 10 symbols')
            .max(50, 'Maximum title lenght is 50 symbols')
            .required('This field is required.'),
        description: Yup.string()
            .min(50, 'Description should have at least 50 symbols')
            .max(150, 'Maximum description lenght is 150 symbols')
            .required('This field is required.'),
        text: Yup.string()
            .min(100, 'Description should have at least 100 symbols')
            .max(1000, 'Maximum description lenght is 1000 symbols')
            .required('This field is required.'),
    })
    
    const values = {
        title:'',
        description:'',
        text:'',
        tag:''
    }

    const formik = useFormik({
        initialValues: values,
        validationSchema: questionSchema,
        onSubmit: (values) => {
            if(values.tag){
                const newQuestion = {
                    ...values,
                    userId: currentUser.id,
                    id: generateId()
                }
                setQuestions({
                    type: questionsActionTypes.add,
                    data: newQuestion
                })
                setTagSelected(true)
                navigate('/')
            } else {
                setTagSelected(false)
            }
        }
    })

    return ( 
        <StyledMain>
            <h1>Create new question</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Enter title: </label>
                    <input type="text" 
                        name="title" id="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.title && formik.errors.title &&
                        <p>{formik.errors.title}</p>
                    }
                <div>
                    <label htmlFor="description">Enter description: </label>
                    <textarea type="text" 
                        name="description" id="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.description && formik.errors.description &&
                        <p>{formik.errors.description}</p>
                    }
                <div>
                    <label htmlFor="text">Enter text: </label>
                    <textarea type="text" 
                        name="text" id="text"
                        value={formik.values.text}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                    {
                        formik.touched.text && formik.errors.text &&
                        <p>{formik.errors.text}</p>
                    }
                <div>
                    <div>                        
                        <label htmlFor="science">Science</label>
                        <input type="radio" id="science" name="tag" value="science"
                        onClick={formik.handleChange}
                        />
                    </div>
                    <div>                        
                        <label htmlFor="technology">Technology</label>
                        <input type="radio" id="technology" name="tag" value="technology"
                        onClick={formik.handleChange}
                        />
                    </div>
                    <div>                        
                        <label htmlFor="travel">Travel</label>
                        <input type="radio" id="travel" name="tag" value="travel"
                        onClick={formik.handleChange}
                        />
                    </div>
                    <div>                        
                        <label htmlFor="books">Books</label>
                        <input type="radio" id="books" name="tag" value="books"
                        onClick={formik.handleChange}
                        />
                    </div>
                </div>
                    {
                        !tagSelected && <p>Please select category for question.</p>
                    }
                <button type="submit">Submit</button>
            </form>
        </StyledMain>
    );
}
 
export default QuestionAdd;