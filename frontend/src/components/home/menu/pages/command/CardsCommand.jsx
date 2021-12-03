import styled from "@emotion/styled/macro";
import Card from "./Card";

const CardsCommand = () => {
    return (
        <CardsCommandBody>
            <Card
                phone={"+ 7 928 999-00-11"}
                email={"svinivan@psb.ru"}
                name={"Свинорылов Иван Валерьевич"}
                role={"Lead"}
                photo={"/photo-user/user1.png"}
            />
            <Card
                phone={"+ 7 928 999-00-11"}
                email={"svinivan@psb.ru"}
                name={"Лысина Арам Хачапурякович"}
                role={"Java Developer"}
                photo={"/photo-user/user2.png"}
            />
            <Card
                phone={"+ 7 928 999-00-11"}
                email={"svinivan@psb.ru"}
                name={"Очечина Лесба Виталиковна"}
                role={"Java Developer"}
                photo={"/photo-user/user3.png"}
            />
        </CardsCommandBody>
    );
};

export default CardsCommand;

const CardsCommandBody = styled.div`
    display: flex;
    margin-top: 24px;
`;
