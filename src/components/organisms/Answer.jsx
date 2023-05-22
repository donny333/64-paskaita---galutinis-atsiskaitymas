import styled from "styled-components";

const StyledDiv = styled.div`
    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        > textarea {
            height: 5rem;
            width: 80%;
            border-radius: var(--br);
        }
        > button {
            height: 2rem;
            padding: 5px 20px;
            border: none;
            background-color: white;
            color: black;
            border-radius: var(--br);
        }
    }
`;

const Answer = () => {
    return ( 
        <StyledDiv>
            <form>
                <textarea name="answer" id="answer"></textarea>
                <button type="submit">Answer</button>
            </form>
        </StyledDiv>
    );
}
 
export default Answer;