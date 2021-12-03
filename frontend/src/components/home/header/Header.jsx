import styled from "@emotion/styled/macro";
import { Avatar as AvatarCtr } from "@consta/uikit/Avatar";

const Header = () => {
    return (
        <HeaderBody>
            <Title>Онбординг</Title>
            <User>
                <Avatar name="Владимир Бабаев" />
                <Column>
                    <Name>Владимир Бабаев</Name>
                    <Post>Fullstack</Post>
                </Column>
            </User>
        </HeaderBody>
    );
};

export default Header;

const HeaderBody = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #323242;
    padding: 12px 24px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    z-index: 999;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: white;
`;

const User = styled.div`
    display: flex;
    margin-left: 12px;
    align-items: center;
`;

const Avatar = styled(AvatarCtr)`
    margin-right: 12px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    color: white;
`;

const Post = styled.span`
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;
    color: rgba(255, 255, 255, 0.5);
`;
