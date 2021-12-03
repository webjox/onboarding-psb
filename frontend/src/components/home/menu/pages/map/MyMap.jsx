import styled from "@emotion/styled/macro";
import { IconGeo } from "@consta/uikit/IconGeo";
import { useContext } from "react";
import { StoreMap } from "./Map";

const MyMap = () => {
    const state = useContext(StoreMap);
    return (
        <MyMapBody>
            <Point x={state.x} y={state.y} />
            <MapOffice src="/map/map.svg" alt="" className="" />
        </MyMapBody>
    );
};
export default MyMap;

const MyMapBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    background-color: #404c56;
`;

const MapOffice = styled.img``;

const Point = styled(IconGeo)`
    position: absolute;
    transition: 0.3s;
    margin-left: ${(props) => (props.x ? props.x : "0px")};
    margin-top: ${(props) => (props.y ? props.y : "0px")};
    color: red;
    width: 40px;
    height: 40px;
`;
