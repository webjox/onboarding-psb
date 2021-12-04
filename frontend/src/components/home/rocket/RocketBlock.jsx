import styled from "@emotion/styled/macro";
import { useState } from "react";
import { IconArrowLeft } from "@consta/uikit/IconArrowLeft";
import Rocket from "./Rocket";
import Resources from "./resources/Resources";
import { useContext } from "react";
import { Store } from "../../../App";

const RocketBlock = () => {
    const [open, setOpen] = useState(false);
    const [start, setStart] = useState(false);

    return (
        <Position open={open}>
            <RocketBlockBody>
                <Button onClick={() => setOpen(!open)}>
                    <Icon open={open} src="arrowTwo.svg" alt="" />
                </Button>
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
    top: 60px;
    position: fixed;
    transition: 0.7s;
    z-index: 20;
    transform: translateX(400px);
    transform: ${(props) =>
        props.open ? "translateX(0)" : "translateX(300px)"};
`;

const RocketBlockBody = styled.div`
    width: 400px;
    background: rgba(115, 116, 150, 0.3);
    padding: 15px;
`;

const Button = styled.button`
    /* background-color: transparent;
    color: white;
    transition: 0.7s;
    border: 1px solid white;
    padding: 12px 24px;
    border-radius: 4px; */
`;

const Icon = styled(IconArrowLeft)`
    width: 40px;
    height: 40px;
    transition: 0.7s;
    transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0)")};
`;
