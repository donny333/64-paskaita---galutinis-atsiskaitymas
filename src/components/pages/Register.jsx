import styled from "styled-components";

const StyledMain = styled.main`
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        > div{
            display: flex;
            > label {
                display: block;
                background-color: white;
                color: black;
                border-top-left-radius: var(--br);
                border-bottom-left-radius: var(--br);
                line-height: 2rem;
                padding-left: 10px;
                width: 150px;
            }
            > input {
                width: 250px;
                height: 2rem;
                border: none;
                background-color: white;
                border-top-right-radius: var(--br);
                border-bottom-right-radius: var(--br);
                padding: 0px 10px;
            }
        }
        > button {
            height: 2rem;
            border: none;
            background-color: white;
            border-radius: var(--br);
            padding: 3px 10px;
        }
    }
    a {
        text-decoration: none;
        color: var(--links);
    }
`;

const Register = () => {
    return (
        <StyledMain>
            <form>
                <div>
                    <label htmlFor="userName">User name: </label>
                    <input type="userName"
                    name="userName" id="userName"

                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email"
                    name="email" id="email"

                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password"
                    name="password" id="password"

                    />
                </div>
                <div>
                    <label htmlFor="repeatPassword">Repeat password: </label>
                    <input type="password"
                    name="repeatPassword" id="repeatPassword"

                    />
                </div>
                <button type="submit">Register</button>
            </form>

        </StyledMain>
    );
}
 
export default Register;