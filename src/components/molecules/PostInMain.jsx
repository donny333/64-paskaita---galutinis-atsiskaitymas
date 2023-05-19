import styled from "styled-components";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { Link } from "react-router-dom";
import EditIcons from "./EditIcons";

const StyledDiv = styled.div`
    padding: 10px;
    background-color: var(--bgInputs);
    border-radius: var(--br);
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
    > img {
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: var(--br);
    }
    > div{
        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            > p {
                margin: 0;
                border: 1px solid white;
                padding: 5px 10px;
                border-radius: var(--br);
            }
        }
        a {
            margin: 0;
            text-decoration: none;
            color: var(--links);
            > h3{
                margin: 5px 0;
            }
        } 
        > p{
            margin: 5px 0;
            text-align: justify;
        }
    }
`;

const PostInMain = ({question, user}) => {

    const { currentUser } = useContext(UsersContext);

    return ( 
        <StyledDiv>
            <img src={user.avatarURL} alt="" />
            <div>
                <div>
                    <EditIcons 
                        user={user}
                        question={question}
                    />
                    <p>{question.tag}</p>
                </div>
                <Link to={`/${question.id}`}>
                    <h3>
                        {question.title}
                    </h3>
                </Link>
                <p>
                {question.description}
                </p>
            </div>
        </StyledDiv>
    );
}
 
export default PostInMain;