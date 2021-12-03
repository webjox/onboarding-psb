import styled from "@emotion/styled/macro";
import { useContext } from "react";
import { StoreRole } from "./Command";

const ButtonsCommand = () => {
    const state = useContext(StoreRole);
    return (
        <ButtonsCommandBody>
            <Button
                selector={"разработчики"}
                select={state.role}
                onClick={() => state.setRole("разработчики")}
            >
                Разработчики
            </Button>
            <Button
                selector={"аналитики"}
                select={state.role}
                onClick={() => state.setRole("аналитики")}
            >
                Аналитики
            </Button>
            <Button
                selector={"тестировщики"}
                select={state.role}
                onClick={() => state.setRole("тестировщики")}
            >
                Тестировщики
            </Button>
            <Button
                selector={"дизайнеры"}
                select={state.role}
                onClick={() => state.setRole("дизайнеры")}
            >
                Дизайнеры
            </Button>
            <Button
                selector={"проджекты"}
                select={state.role}
                onClick={() => state.setRole("проджекты")}
            >
                Проджекты
            </Button>
            <Button
                selector={"продакты"}
                select={state.role}
                onClick={() => state.setRole("продакты")}
            >
                Продакты
            </Button>
        </ButtonsCommandBody>
    );
};

export default ButtonsCommand;

const ButtonsCommandBody = styled.div`
    display: flex;
    width: 725px;
    border-radius: 4px;
    background-color: #414c56;
    padding: 4px;
    margin-top: 12px;
`;

const Button = styled.button`
    font-weight: bold;
    width: 100%;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #ffffff;
    padding: 8px 12px;
    background-color: ${(props) =>
        props.selector === props.select ? "#313B44" : "#414c56"};
    transition: 0.2s;
`;
