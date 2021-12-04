import styled from "@emotion/styled/macro";

const OneProduct = ({ image, label, fuel }) => {
    return (
        <OneProductBody>
            <img src={image} alt="" className="" />
            <Name>{label}</Name>
            <Fuel>
                <Icon src="awards/oil.svg" alt="" className="" />
                {fuel}
            </Fuel>
            <Button>Подробнее</Button>
        </OneProductBody>
    );
};

export default OneProduct;

const OneProductBody = styled.div`
    width: 240px;
    height: 436px;
    &:not(:last-child) {
        margin-right: 20px;
    }
`;

const Name = styled.h3`
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #ffffff;
    margin-top: 16px;
`;

const Fuel = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
`;

const Icon = styled.img`
    margin: 0 10px;
    margin-top: 10px;
`;

const Button = styled.button`
    background-color: transparent;
    padding: 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #d23f00;
    margin-top: 14px;
`;
