import styled from "styled-components";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const StyledDiv = styled.div`
    > h3{
        margin: 0 0 10px 0;
        text-align: center;
        letter-spacing: 2px;
    }
    > div{
        display: flex;
        gap: 10px;
    }
`;

const FollowUs = () => {
    return ( 
        <StyledDiv>
            <h3>Follow Us!</h3>
            <div>
                <FacebookSharpIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <InstagramIcon />
            </div>
        </StyledDiv>
     );
}
 
export default FollowUs