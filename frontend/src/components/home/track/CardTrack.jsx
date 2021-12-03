import styled from "@emotion/styled/macro";
import { useState } from "react";
// onClick={() => setActive(true)}
const CardTrack = ({ preview, name, setActive }) => {
    return (
        <CardTrackBody>
            <NameCard>{name}</NameCard>
        </CardTrackBody>
    );
};
export default CardTrack;

const CardTrackBody = styled.div`
    height: 100%;
    width: 300px;
    padding: 140px 30px;
    background-color: #313b44;
    transition: 0.3s;
    &:not(:last-child) {
        margin-right: 20px;
    }

    /* &:hover {
        cursor: pointer;
        box-shadow: 0 0 30px rgba(210, 63, 0, 0.7);
        transform: scale(1.05);
        transform: translateY(-10px);
    } */
`;

const NameCard = styled.h2`
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
`;
