import styled from "styled-components";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const StyledDiv = styled.div`
    height: 2rem;
    > form {
        display: flex;
        align-items: center;
        > select{
            border: none;
            height: 2rem;
            margin: 0;
            padding: 0;
            border-top-left-radius: var(--br);
            border-bottom-left-radius: var(--br);
        }
        > input {
            height: 2rem;
            width: 300px;
            margin: 0;
            padding: 0;
            border: none;
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-top-right-radius: var(--br);
            border-bottom-right-radius: var(--br);
            padding: 3px 10px;
        }
    }
`;

const SearchMain = () => {
    return (  
    <StyledDiv>
        <form>
            <select name="cars" id="cars">
                <option value="saab">Science</option>
                <option value="mercedes">Technology</option>
                <option value="volvo">Travel</option>
                <option value="audi">Books</option>
            </select>
            <input type="text" />
            <button><SearchSharpIcon/></button>
        </form>
    </StyledDiv>
    );
}
 
export default SearchMain;