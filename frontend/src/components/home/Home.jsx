import styled from "@emotion/styled/macro";
import Header from "./header/Header";
import Track from "./track/Track";
import Menu from "./menu/Menu";
import RocketBlock from "./rocket/RocketBlock";

const Home = () => {
    return (
        <div>
            <Header />
            <RocketBlock />
            <Container>
                <Track />
                <Menu />
            </Container>
        </div>
    );
};

export default Home;

const Container = styled.div`
    padding: 0 20px;
    width: 1873px;
    margin: 0 auto;
    height: 1200px;
`;
