import styled from "@emotion/styled/macro";
import Departments from "./Departments";
import { SubTitle } from "../Help";
import { useState, createContext } from "react";
import MyMap from "./MyMap";

export const StoreMap = createContext({});

const Map = () => {
    const [state, setState] = useState({
        nav: "",
        x: "-680px",
        y: "-200px",
        setGeo: (x, y) => {
            setState((prevstate) => {
                return {
                    ...prevstate,
                    x: x,
                    y: y,
                };
            });
        },
        setNav: (value) => {
            setState((prevstate) => {
                return {
                    ...prevstate,
                    nav: value,
                };
            });
        },
    });
    return (
        <StoreMap.Provider value={state}>
            <SubTitle>Отделы</SubTitle>
            <MapBody>
                <Departments />
                <MyMap />
            </MapBody>
        </StoreMap.Provider>
    );
};

export default Map;

const MapBody = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    margin-top: 24px;
`;
