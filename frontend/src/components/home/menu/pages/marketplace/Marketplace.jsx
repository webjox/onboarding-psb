import styled from "@emotion/styled/macro";
import { useState, createContext, useEffect } from "react";
import ButtonMarketplace from "./ButtonMarketplace";
import OneProduct from "./oneProduct";

export const StoreChapters = createContext({});

const Marketplace = () => {
    const [chapters, setChapters] = useState({
        chapter: "Мерч ПСБ",
        setChapter: (value) => {
            setChapters((prevstate) => {
                return {
                    ...prevstate,
                    chapter: value,
                };
            });
        },
    });
    useEffect(() => {}, [chapters]);
    return (
        <StoreChapters.Provider value={chapters}>
            <ButtonMarketplace />
            <Flex>
                <OneProduct
                    image={"marketplace/image 12.png"}
                    label={"Геройский худи ПСБ"}
                    fuel={1500}
                />
                <OneProduct
                    image={"marketplace/image 13.png"}
                    label={"Геройская футболка ПСБ"}
                    fuel={900}
                />
                <OneProduct
                    image={"marketplace/image 15.png"}
                    label={"Скейт"}
                    fuel={900}
                />
            </Flex>
        </StoreChapters.Provider>
    );
};

export default Marketplace;

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
`;
