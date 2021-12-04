import styled from "@emotion/styled/macro";
import { useState, useContext } from "react";
import { StoreTrack } from "./Track";

// onClick={() => setActive(true)}
const CardTrack = ({ preview, name, award, count, setActive, id }) => {
    const state = useContext(StoreTrack);
    let link = "";
    if (award === "fuel") {
        link = "/awards/oil.svg";
    } else if (award === "human") {
        link = "/awards/human.svg";
    } else if (award === "rocket") {
        link = "/awards/rocket.svg";
    }
    return (
        <CardTrackBody>
            <NameIcon>
                <Name>{name}</Name>
                <img src={preview} alt="" className="" />
            </NameIcon>
            <Flex>
                <Button
                    onClick={() => {
                        setActive(true);
                        state.setStepsId(id);
                    }}
                >
                    Открыть
                </Button>
                {award ? <Reward src={link} alt="award" /> : ""}
                {count ? <Value>+{count}</Value> : ""}
            </Flex>
        </CardTrackBody>
    );
};
export default CardTrack;

const CardTrackBody = styled.div`
    height: 330px;
    width: 300px;
    padding: 16px;
    background-color: #313b44;
    margin-right: 20px;
`;

const NameIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0 0 12px;
    background-color: #3b454e;
    height: 210px;
`;

const Name = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: #ffffff;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
`;

const Button = styled.button`
    background-color: transparent;
    padding: 12px 24px;
    font-weight: bold;
    border-radius: 4px;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #d23f00;
    border: 1px solid rgba(255, 255, 255, 0.35);
    transition: 300ms;
    &:hover {
        border: 1px solid #d23f00;
    }
`;

const Reward = styled.img`
    margin-left: 30px;
    margin-right: 10px;
`;

const Value = styled.h3`
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
`;
