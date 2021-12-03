import { useContext } from "react";
import styled from "@emotion/styled/macro";
import Help from "../pages/Help";
import Map from "../pages/map/Map";
import Command from "../pages/command/Command";

import { StoreMenu } from "../Menu";

const Content = () => {
    const state = useContext(StoreMenu);
    return (
        <ContentBody>
            {state.page === "help" ? <Help /> : ""}
            {state.page === "map" ? <Map /> : ""}
            {state.page === "command" ? <Command /> : ""}
        </ContentBody>
    );
};

export default Content;

const ContentBody = styled.div`
    padding: 40px;
    background-color: #313b44;
`;
