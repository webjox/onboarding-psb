import styled from "@emotion/styled/macro";
import { useContext } from "react";
import { StoreChapters } from "./Marketplace";

const ButtonMarketplace = () => {
    const state = useContext(StoreChapters);
    return (
        <ButtonsCommandBody>
            <Button
                selector={"Мерч ПСБ"}
                select={state.chapter}
                onClick={() => state.setChapter("Мерч ПСБ")}
            >
                Мерч ПСБ
            </Button>
            <Button
                selector={"Сертификаты"}
                select={state.chapter}
                onClick={() => state.setChapter("Сертификаты")}
            >
                Сертификаты
            </Button>
        </ButtonsCommandBody>
    );
};

export default ButtonMarketplace;

const ButtonsCommandBody = styled.div`
    display: flex;
    width: 262px;
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
