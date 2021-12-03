import { useState, useEffect, createContext } from "react";
import styled from "@emotion/styled/macro";
import { SubTitle } from "../Help";
import ButtonsCommand from "./ButtonsCommand";
import CardsCommand from "./CardsCommand";

export const StoreRole = createContext({});

const Command = () => {
    const [roles, setRoles] = useState({
        role: "Разработчики",
        setRole: (value) => {
            setRoles((prevstate) => {
                return {
                    ...prevstate,
                    role: value,
                };
            });
        },
    });
    useEffect(() => {}, [roles]);
    return (
        <StoreRole.Provider value={roles}>
            <SubTitle>Летишь в космос вот с этими ребятами</SubTitle>
            <ButtonsCommand />
            <CardsCommand />
        </StoreRole.Provider>
    );
};

export default Command;
