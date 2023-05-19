import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionBlock from "../molecules/QuestionBlock";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useContext } from "react";
import QuestionsContext from "../../contexts/QuestionsContext";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 4rem);
    padding: 2rem;
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
        }
        > div:first-child > textarea{
            width: 600px;
            height: 6rem;
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 10px;
        }
        > botton:hover{
            cursor: pointer;
        }
        > p {
            margin: 0;
            color: red;
        }
    }
`;

const StyledDiv = styled.div`
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        > p {
            margin: 0;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: var(--br);
        }
        > div {
            display: flex;
            align-items: center;
            gap: 1rem;
                > h1 {
                    margin: 0;
                }
                > a {
                    color: var(--links);
                    > svg{
                        font-size: 2rem;
                    }
                }
                > svg {
                    color: var(--links);
                    font-size: 2rem;
                }
        }
    }
`;

const QuestionEdit = () => {

    const { id } = useParams();

    const [question, setQuestion] = useState([])

    const { setQuestions, questionsActionTypes} = useContext(QuestionsContext)

    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:8080/questions/${ id }`)
            .then(res => res.json())
            .then(data => setQuestion(data))
    },[])

    const questionSchema = Yup.object({
        description: Yup.string()
            .min(15, 'Description should have at least 15 symbols')
            .max(150, 'Maximum description lenght is 150 symbols')
            .required('This field is required.'),
        text: Yup.string()
            .min(50, 'Description should have at least 50 symbols')
            .max(1000, 'Maximum description lenght is 1000 symbols')
            .required('This field is required.'),
    })
    
    const values = {
        description:'',
        text:''
    }

    const formik = useFormik({
        validationSchema: questionSchema,
        initialValues: values,
        onSubmit: (values) =>{
            const submitDate = new Date;
            values.editDate = submitDate;
            setQuestions({
                type: questionsActionTypes.edit,
                data:values,
                id:question.id
            })
            navigate('/')
        }
    })    

    return ( 
        <StyledMain>
            <StyledDiv>
                <div>
                    <div>
                        <h1>{question.title}</h1>
                      </div>
                    <p>{question.tag}</p>
                </div>
                <h2>{question.description}</h2>
                <p>{question.text}</p>
            </StyledDiv>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="description">Edit description: </label>
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
                    <label htmlFor="text">Edit text: </label>
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
                <button type="submit">Submit</button>
            </form>
        </StyledMain>
    );
}
 
export default QuestionEdit;