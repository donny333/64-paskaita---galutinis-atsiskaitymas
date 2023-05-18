import styled from "styled-components";
import UserCard from "../molecules/UserCard";
import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const StyledSection = styled.section`
    background-color: var(--bgSide);
    border-radius: var(--br);
    > h2 {
        margin-top: 0;
        text-align: center;
    }
    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

const UsersSideBar = () => {

    const { users } = useContext(UsersContext)

    return ( 
        <StyledSection>
            <h2>Top Users!</h2>
            <div>
                {
                    users.length === 0 ?
                    <h1>Loading.</h1>:
                    users.map(user =>
                        <UserCard 
                            key={user.id}
                            user={user}
                        />
                    )
                }
            </div>
        </StyledSection>
    );
}
 
export default UsersSideBar;