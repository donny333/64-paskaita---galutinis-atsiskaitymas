import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    gap: 10px;
        .deleteIcon {
            color: var(--links);
        }
        .deleteIcon:hover{
            cursor: pointer;
        }
        a {
            text-decoration: none;
            color: var(links);
        }
`;

const EditIcons = ({ user, question }) => {
    const { currentUser } = useContext(UsersContext);

    return ( 
        <StyledDiv>
        {   
            currentUser && currentUser.id === user.id?
            <>
                <Link to={`/${question.id}/edit`}>
                    <EditSharpIcon />
                </Link>
                    <DeleteForeverSharpIcon className="deleteIcon"/>
            </> :
            <span className="ivisible"></span>
        }
    </StyledDiv>
    );
}
 
export default EditIcons;