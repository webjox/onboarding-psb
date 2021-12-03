import { useContext } from "react";
import styled from "@emotion/styled/macro";

import { StoreMenu } from "../Menu";

const ButtonsPage = () => {
    const state = useContext(StoreMenu);
    console.log(state);
    return (
        <ButtonsBody>
            <Button
                selector={"help"}
                select={state.page}
                onClick={() => state.setPage("help")}
            >
                Помощь
            </Button>
            <Button
                selector={"map"}
                select={state.page}
                onClick={() => state.setPage("map")}
            >
                Карта
            </Button>
            <Button
                selector={"command"}
                select={state.page}
                onClick={() => state.setPage("command")}
            >
                Команда
            </Button>
            <Button
                selector={"marketplace"}
                select={state.page}
                onClick={() => state.setPage("marketplace")}
            >
                Маркет плэйс
            </Button>
        </ButtonsBody>
    );
};

export default ButtonsPage;

const ButtonsBody = styled.div`
    display: flex;
`;

const Button = styled.button`
    background-color: ${(props) =>
        props.selector === props.select ? "#313B44" : "#2c353d"};
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.26);
    font-weight: bold;
    font-size: 24px;
    padding: 9px 21px;
    &:first-child {
        border-radius: 6px 0px 0px 0px;
    }
    &:last-child {
        border-radius: 0px 6px 0px 0px;
    }
`;
