import styled from "@emotion/styled/macro";
import { Button as ButtonCtr } from "@consta/uikit/Button";

const Resources = ({ open, setStart }) => {
    return (
        <ResourcesBody open={open}>
            <Flex>
                <Text>Топливо</Text>
                <Percentages>100%</Percentages>
            </Flex>
            <Flex>
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
                <Icon src="/rocket/oil.svg" alt="" className="" />
            </Flex>
            <Flex>
                <Text>Команда</Text>
                <Percentages>100%</Percentages>
            </Flex>
            <Flex>
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
                <Icon src="/rocket/human.svg" alt="" className="" />
            </Flex>
            {open ? (
                <Button onClick={() => setStart(true)} label="Стартуем!" />
            ) : (
                ""
            )}
        </ResourcesBody>
    );
};

export default Resources;

const ResourcesBody = styled.div`
    background-color: rgba(77, 89, 100, 0.8);
    height: 243px;
    width: ${(props) => (props.open ? "100%" : "72px")};
    padding: 24px;
    margin-top: -30px;
    z-index: 1;
`;

const Icon = styled.img`
    &:not(:last-child) {
        margin-right: 13px;
    }
`;

const Button = styled(ButtonCtr)`
    width: 100%;
    background-color: #d23f00;
    margin-top: 17px;
    &:hover {
        background-color: #c53b00;
    }
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    &:nth-child(even) {
        margin-bottom: 20px;
    }
`;

const Text = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
`;

const Percentages = styled.div`
    font-size: 14px;
    line-height: 150%;

    color: rgba(255, 255, 255, 0.35);
`;
