import styled from "styled-components";
import Rating from "../atoms/Rating";

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bgInputs);
    padding: 5px;
    >img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    > h3{
        margin: 0;
    }

`;

const UserCard = () => {
    return ( 
        <StyledDiv>
            <img src="https://media.discordapp.net/attachments/1101880155149967370/1102261659495563316/donny333_A_vibrant_and_energetic_photograph_of_your_father_perf_837f4e97-2d39-48c3-948d-e53fe47047b7.png?width=920&height=920" alt="avatar" />
            <h3>userName</h3>
            <Rating />
        </StyledDiv>
    );
}
 
export default UserCard;