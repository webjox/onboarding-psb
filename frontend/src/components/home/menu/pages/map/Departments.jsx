import styled from "@emotion/styled/macro";
import { useContext } from "react";
import { StoreMap } from "./Map";

const Departments = () => {
    const state = useContext(StoreMap);
    return (
        <DepartmentsBody>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("-680px", "-200px");
                    state.setNav("Бухгалтерия");
                }}
            >
                <HoverBlock />
                Бухгалтерия
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("90px", "170px");
                    state.setNav("Кадры");
                }}
            >
                <HoverBlock />
                Кадры
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("-470px", "170px");
                    state.setNav("Ресепшн");
                }}
            >
                <HoverBlock />
                Ресепшн
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("-210px", "170px");
                    state.setNav("Отдел разработки CRM");
                }}
            >
                <HoverBlock />
                Отдел разработки CRM
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("-680px", "160px");
                    state.setNav("Отдел мобильной разработки");
                }}
            >
                <HoverBlock />
                Отдел мобильной разработки
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("400px", "170px");
                    state.setNav("Рекрутмент");
                }}
            >
                <HoverBlock />
                Рекрутмент
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("690px", "160px");
                    state.setNav("Юридический отдел");
                }}
            >
                <HoverBlock />
                Юридический отдел
            </ButtonDepart>
            <ButtonDepart
                onClick={() => {
                    state.setGeo("690px", "-200px");
                    state.setNav("Отдел безопасности банка");
                }}
            >
                <HoverBlock />
                Отдел безопасности банка
            </ButtonDepart>
        </DepartmentsBody>
    );
};

export default Departments;

const DepartmentsBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const HoverBlock = styled.div`
    background-color: #d23f00;
    height: 100%;
    width: 0px;
    margin-right: 5px;
    border-radius: 3px;
    transition: 0.1s;
`;

const ButtonDepart = styled.div`
    display: flex;
    background-color: #3b454e;
    padding: 12px 24px;
    width: 100%;
    color: #9c9c9c;
    font-size: 16px;
    line-height: 150%;
    align-items: center;
    color: #9c9c9c;
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    &:hover {
        ${HoverBlock} {
            width: 5px;
        }
    }
`;
