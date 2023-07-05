import styled from "styled-components";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px - 4rem);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    section {
        display: flex;
        gap: 2rem;
    }
`;

const StyledDiv = styled.div`
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        > p {
            margin: 0;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: var(--br);
        }
        > div {
            display: flex;
            align-items: center;
            gap: 1rem;
                > h1 {
                    margin: 0;
                }
                > a {
                    color: var(--links);
                    > svg{
                        font-size: 2rem;
                    }
                }
                > svg {
                    color: var(--links);
                    font-size: 2rem;
                }
        }
        svg:hover {
            cursor: pointer;
        }
    }
`;

const StyledThumbs = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            > p {
                margin: 5px;
                font-size: 1.5rem;
            }
            > svg:hover {
                cursor: pointer;
            }
`;

export { StyledDiv, StyledMain, StyledThumbs};