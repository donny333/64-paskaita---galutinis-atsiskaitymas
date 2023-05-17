import styled from "styled-components";
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        margin: 0;
    }
`;

const Rating = () => {
    return ( 
        <StyledDiv>
            <TrendingUpSharpIcon />
            <h4>10</h4>

        </StyledDiv>
    );
}
 
export default Rating;