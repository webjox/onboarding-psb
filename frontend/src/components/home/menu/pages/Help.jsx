import styled from "@emotion/styled/macro";
import { TextField } from "@consta/uikit/TextField";
import { IconSearch } from "@consta/uikit/IconSearch";
import { Button as ButtonCtr } from "@consta/uikit/Button";
import { useState } from "react";
import request from "../../../../request";

const Help = () => {
    const [search, setSearch] = useState();

    async function getHelp(url) {
        try {
            const response = request({
                entityName: "documentations_reference/?search=JIRA",
                method: "get",
            });
        } catch {}
    }
    return (
        <div>
            <SubTitle>Поиск документов по ближайшей галактике</SubTitle>
            <Input
                leftSide={IconSearch}
                placeholder="Например архитектура проекта"
            />
            <Result>
                <TitleResult>Welcome Book</TitleResult>
                <Text>
                    В своём стремлении повысить качество жизни, они забывают,
                    что высокое качество позиционных исследований создаёт
                    необходимость включения в производственный план целого ряда
                    внеочередных мероприятий с учётом комплекса системы
                    массового участия.
                </Text>
                <Button label="Читать" />
            </Result>
            <Result>
                <TitleResult>Другая статья или что тут будет</TitleResult>
                <Text>
                    Как принято считать, сторонники тоталитаризма в науке
                    призывают нас к новым свершениям, которые, в свою очередь,
                    должны быть призваны к ответу.
                </Text>
                <Button label="Читать" />
            </Result>
        </div>
    );
};

export default Help;

const SubTitle = styled.h2`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    line-height: 150%;
    color: #ffffff;
`;

const Input = styled(TextField)`
    width: 420px;
    margin: 15px 0 24px 0;
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
`;

const Result = styled.div`
    width: 715px;
    background-color: #3b454e;
    margin-top: 8px;
    padding: 20px;
`;

const TitleResult = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    align-items: center;

    color: #ffffff;
`;

const Text = styled.h3`
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */
    margin-top: 12px;
    display: flex;
    align-items: center;

    color: #ffffff;
`;

const Button = styled(ButtonCtr)`
    background-color: transparent;
    color: #d23f00;
    border: 1px solid rgba(255, 255, 255, 0.35);
    margin-top: 16px;
    &:hover {
        background-color: transparent;
        border: 1px solid rgba(210, 63, 0, 1);
        /* color: blue; */
    }
`;

export { SubTitle };
