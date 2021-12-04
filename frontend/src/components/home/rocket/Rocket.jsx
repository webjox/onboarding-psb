import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";
import "./animation.css";
import { useContext, useEffect } from "react";
import { Store } from "../../../App";

const Rocket = ({ start }) => {
    const { userInfo } = useContext(Store);
    console.log(userInfo);
    useEffect(() => {}, [userInfo]);
    return (
        <RocketBody>
            <MyRocket start={start}>
                <DetailFive
                    selector={5}
                    rockets={userInfo.rockets}
                    src="/rocket/part5.svg"
                    alt=""
                    className=""
                />
                <DetailFour
                    selector={4}
                    rockets={userInfo.rockets}
                    src="/rocket/part4.svg"
                    alt=""
                    className=""
                />
                <DetailThree
                    selector={3}
                    rockets={userInfo.rockets}
                    src="/rocket/part3.svg"
                    alt=""
                    className=""
                />
                <DetailTwo
                    selector={2}
                    rockets={userInfo.rockets}
                    src="/rocket/part2.svg"
                    alt=""
                    className=""
                />
                <DetailOne
                    selector={1}
                    rockets={userInfo.rockets}
                    src="/rocket/part1.svg"
                    alt=""
                    className=""
                />
                <Fire start={start} />
            </MyRocket>

            <DetailPlatform src="/rocket/platform.svg" alt="" className="" />
        </RocketBody>
    );
};
export default Rocket;

const DetailOne = styled.img`
    margin-left: 10px;
    margin-top: -18px;
    z-index: 5;
    opacity: ${(props) => (props.selector < props.rockets ? "1" : "0.5")};
`;
const DetailTwo = styled.img`
    margin-top: -3px;
    z-index: 4;
    opacity: ${(props) => (props.selector < props.rockets ? "1" : "0.5")};
`;
const DetailThree = styled.img`
    margin-top: -3px;
    z-index: 3;
    opacity: ${(props) => (props.selector < props.rockets ? "1" : "0.5")};
`;
const DetailFour = styled.img`
    margin-top: -3px;
    z-index: 2;
    opacity: ${(props) => (props.selector < props.rockets ? "1" : "0.5")};
`;
const DetailFive = styled.img`
    z-index: 1;
    opacity: ${(props) => (props.selector < props.rockets ? "1" : "0.5")};
`;
const DetailPlatform = styled.img`
    margin-top: -28px;
    z-index: 0;
`;

const RocketBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MyRocket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${(props) => (props.start ? "start 10s ease 1" : "")};
`;

const Fire = styled.div`
    position: absolute;
    width: 80px;
    height: 0;
    margin-top: 550px;
    background: linear-gradient(orange, transparent);
    filter: blur(5px);
    animation: ${(props) => (props.start ? "fire 4s ease 1" : "")};
`;
