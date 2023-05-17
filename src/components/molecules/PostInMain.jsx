import styled from "styled-components";
import EditSharpIcon from '@mui/icons-material/EditSharp';

const StyledDiv = styled.div`
    padding: 10px;
    background-color: var(--bgInputs);
    border-radius: var(--br);
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h3 {
            margin: 0;
        }
    }
    > h3{
        margin: 5px 0;
    }
    > p{
        margin: 5px 0;
        text-align: justify;
    }

`;

const PostInMain = () => {
    return ( 
        <StyledDiv>
            <div>
                <h3>UserName</h3>
                <EditSharpIcon />
            </div>
            <h3>
                Lorem ipsum dolor sit amet.
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in cum distinctio eaque, dolorem possimus fugiat ab ea quisquam incidunt?
            </p>
        </StyledDiv>
    );
}
 
export default PostInMain;