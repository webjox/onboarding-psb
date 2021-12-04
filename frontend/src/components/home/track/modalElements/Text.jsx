import styled from "@emotion/styled/macro";

const Text = ({ text }) => {
    return <TextBody>{text}</TextBody>;
};

export default Text;

const TextBody = styled.div`
    font-size: 15px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
`;
