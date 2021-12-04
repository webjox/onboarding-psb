import { DragNDropField } from "@consta/uikit/DragNDropField";
import { Text } from "@consta/uikit/Text";
import styled from "@emotion/styled";

const DragNDrop = () => {
    return (
        <DragNDropBody>
            <DragNDropField
                accept="image/*"
                onDropFiles={(files) => console.log(files)}
            >
                <Text>
                    Сюда можно перетаскивать только картинки, зато любые (ну
                    почти)
                </Text>
                <Text view="ghost" font="mono">
                    image/*
                </Text>
            </DragNDropField>
        </DragNDropBody>
    );
};

export default DragNDrop;

const DragNDropBody = styled.div`
    padding: 10px 20px;
`;
