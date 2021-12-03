import styled from "@emotion/styled/macro";
import { Button as ButtonCtr } from "@consta/uikit/Button";

const Card = ({ photo, role, name, phone, email }) => {
    return (
        <CardBody>
            <img src={photo} alt="user_photo" />
            <Info>
                <Category>{role}</Category>
                <Name>{name}</Name>
                <Contact>
                    <img src="/icons/phone.svg" alt="" />
                    {phone}
                </Contact>
                <Contact>
                    <img src="/icons/email.svg" alt="" />
                    {email}
                </Contact>
                <Button label="Подробнее" />
            </Info>
        </CardBody>
    );
};

export default Card;

const CardBody = styled.div`
    background-color: #2c353d;
    display: flex;
    flex-direction: column;
    width: 220px;
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

const Info = styled.div`
    padding: 16px;
`;

const Category = styled.div`
    display: inline;
    background-color: #24c38e;
    border-radius: 4px;
    font-weight: bold;
    font-size: 12px;
    line-height: 150%;
    color: #fafafa;
    padding: 2px 4px;
`;

const Name = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    margin: 8px 0;
`;

const Contact = styled.div`
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.35);
`;

const Button = styled(ButtonCtr)`
    background-color: transparent;
    color: #d23f00;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    margin-top: 16px;
    &:hover {
        background-color: transparent;
    }
`;
