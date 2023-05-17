import styled from "styled-components";

const StyledDiv = styled.div`
    > h3{
        margin: 0 0 10px 0;
        text-align: center;
        letter-spacing: 2px;
    }
    > form {
        display: flex;
        align-items: center;
        > input {
            height: 2rem;
            width: 240px;
            margin: 0;
            padding: 0;
            border: none;
            border-top-left-radius: var(--br);
            border-bottom-left-radius: var(--br);
            padding-left: 10px;
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-top-right-radius: var(--br);
            border-bottom-right-radius: var(--br);
            padding: 3px 10px;
        }
        > button:hover{
            cursor: pointer;
        }
    }

`;

const SubscribeForm = () => {
    return ( 
        <StyledDiv>
            <h3>Subscribe for our newsletter!</h3>
            <form>
                <input type="email" placeholder="Enter email..."/>
                <button>Subscribe</button>
            </form>
        </StyledDiv>
    );
}
 
export default SubscribeForm;