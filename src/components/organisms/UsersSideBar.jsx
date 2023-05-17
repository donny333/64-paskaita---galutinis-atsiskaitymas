import styled from "styled-components";
import UserCard from "../molecules/UserCard";

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
    return ( 
        <StyledSection>
            <h2>Top Users!</h2>
            <div>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
        </StyledSection>
    );
}
 
export default UsersSideBar;