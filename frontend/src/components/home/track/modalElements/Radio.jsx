import { RadioGroup } from "@consta/uikit/RadioGroup";
import { useState } from "react";
import styled from "@emotion/styled/macro";

const simpleItems = ["один", "два", "три", "четыре", "пять"];

const Radio = () => {
    const [value, setValue] = useState();
    return (
        <RadioBody>
            <Title>Опросник</Title>
            <Title></Title>
            <RadioGroupMy
                value={value}
                items={simpleItems}
                getLabel={(item) => item}
                onChange={({ value }) => setValue(value)}
                direction="column"
            />
        </RadioBody>
    );
};

export default Radio;

const RadioBody = styled.div`
    padding: 15px 20px;
`;

const RadioGroupMy = styled(RadioGroup)`
    .Radio-Label {
        color: white;
    }
    .Radio-Input {
        color: orange;
    }
`;

const Title = styled.h3`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
`;
