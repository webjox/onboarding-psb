import { useState, useContext } from "react";
import { Store } from "../../App.js";
import styled from "@emotion/styled/macro";
import { TextField } from "@consta/uikit/TextField";
import { Button as ButtonCtr } from "@consta/uikit/Button";
import { Text as TextCtr } from "@consta/uikit/Text";
import { Link } from "react-router-dom";
import request from "../../request";
import { forwardRefWithAs } from "@consta/uikit/__internal__/src/utils/types/PropsWithAsAttributes";

const Login = () => {
    const state = useContext(Store);
    const [username, setUsername] = useState("vovababaev");
    const [password, setPassword] = useState("147852369");

    async function postUser(data) {
        try {
            const response = await request({
                entityName: "token",
                data,
                method: "post",
            });
            const tokens = response.data;
            localStorage.setItem("token-refresh", tokens.refresh);
            localStorage.setItem("token-access", tokens.access);
            state.setTokens(tokens);
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }
    return (
        <LoginContainer>
            <img src="/logo/logo.svg" alt="" />
            <LoginBody>
                <Title>Добро пожаловать на борт сильных людей</Title>
                <Input
                    value={username}
                    setValue={setUsername}
                    type="text"
                    placeholder="Логин"
                />
                <Input
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder="Пароль"
                />
                <Link to="/home">
                    <Button
                        onClick={() => postUser({ username, password })}
                        label="Войти"
                    />
                </Link>
            </LoginBody>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
    width: 360px;
    height: 444px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
`;

const LoginBody = styled.div`
    background-color: #2c353d;
    width: 100%;
    height: 360px;
    padding: 40px;
    border-radius: 5px;
    margin-top: 25px;
`;

const Input = styled(TextField)`
    width: 100%;
    margin-top: 12px;
    background: #313b44;
    color: #ffffff;
    border-radius: 4px;
    .TextField-InputContainer {
        background-color: #313b44;
        border: 1px solid rgba(255, 255, 255, 0.35);
        color: #ffffff;
        padding: 5px 12px;
    }
    .TextField-InputContainer ::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.35);
    }
    .TextField-Input {
        color: #ffffff;
    }
`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 20px;
`;

const Button = styled(ButtonCtr)`
    margin-top: 32px;
    background-color: #d23f00;
    width: 94px;
    height: 48px;
`;
