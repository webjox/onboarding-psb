import styled from "@emotion/styled/macro";
import { useState, useEffect, createContext } from "react";
import ButtonsPage from "./buttonsPage/ButtonsPage";
import Content from "./content/Content";

export const StoreMenu = createContext({});

const Menu = () => {
    const [menuPage, setMenuPage] = useState({
        page: "help",
        setPage: (value) => {
            setMenuPage((prevstate) => {
                return {
                    ...prevstate,
                    page: value,
                };
            });
        },
    });

    useEffect(() => {}, [menuPage]);
    return (
        <StoreMenu.Provider value={menuPage}>
            <MenuBody>
                <ButtonsPage />
                <Content />
            </MenuBody>
        </StoreMenu.Provider>
    );
};

export default Menu;

const MenuBody = styled.div`
    margin-top: 40px;
`;
