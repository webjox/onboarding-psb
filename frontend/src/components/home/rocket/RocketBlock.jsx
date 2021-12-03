import styled from "@emotion/styled/macro";
import { useState } from "react";
import { IconArrowLeft } from "@consta/uikit/IconArrowLeft";
import Rocket from "./Rocket";
import Resources from "./resources/Resources";

const RocketBlock = () => {
    const [open, setOpen] = useState(true);
    const [start, setStart] = useState(false);
    return (
        <Position open={open}>
            <Button open={open} onClick={() => setOpen(!open)}>
                <Icon />
            </Button>
            <RocketBlockBody>
                <Rocket start={start} />
                <Resources open={open} setStart={setStart} />
            </RocketBlockBody>
        </Position>
    );
};

export default RocketBlock;

const Position = styled.div`
    display: flex;
    align-items: flex-start;
    right: 0;
    top: 0;
    position: fixed;
    transition: 0.7s;
    z-index: 999;
    transform: translateX(400px);
    transform: ${(props) =>
        props.open ? "translateX(0)" : "translateX(300px)"};
`;

const RocketBlockBody = styled.div`
    width: 400px;
    background: rgba(115, 116, 150, 0.3);
    margin-left: 40px;
    padding: 15px;
`;

const Button = styled.button`
    background-color: transparent;
    color: white;
    transition: 0.7s;
    margin-top: 80px;
    transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0)")};
`;

const Icon = styled(IconArrowLeft)`
    width: 40px;
    height: 40px;
`;
