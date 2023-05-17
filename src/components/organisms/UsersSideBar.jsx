import styled from "styled-components";

const StyledSection = styled.section`
    background-color: var(--bgSide);
    border-radius: var(--br);
    > h2 {
        margin-top: 0;
        text-align: center;
    }
`;

const UsersSideBar = () => {
    return ( 
        <StyledSection>
            <h2>Top Users!</h2>

        </StyledSection>
    );
}
 
export default UsersSideBar;