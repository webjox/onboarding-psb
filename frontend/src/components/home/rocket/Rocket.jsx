import { keyframes } from "@emotion/react";
import styled from "@emotion/styled/macro";
import "./animation.css";

const Rocket = ({ start }) => {
    return (
        <RocketBody>
            <MyRocket start={start}>
                <DetailFive src="/rocket/part5.svg" alt="" className="" />
                <DetailFour src="/rocket/part4.svg" alt="" className="" />
                <DetailThree src="/rocket/part3.svg" alt="" className="" />
                <DetailTwo src="/rocket/part2.svg" alt="" className="" />
                <DetailOne src="/rocket/part1.svg" alt="" className="" />
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
`;
const DetailTwo = styled.img`
    margin-top: -3px;
    z-index: 4;
`;
const DetailThree = styled.img`
    margin-top: -3px;
    z-index: 3;
`;
const DetailFour = styled.img`
    margin-top: -3px;
    z-index: 2;
`;
const DetailFive = styled.img`
    z-index: 1;
`;
const DetailPlatform = styled.img`
    margin-top: -28px;
    z-index: 0;
`;

const RocketBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const MyRocket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
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
