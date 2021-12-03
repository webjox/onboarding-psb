import styled from "@emotion/styled/macro";
import { useState, useEffect } from "react";
import request from "../../../request";
import CardTrack from "./CardTrack";
import Modal from "./Modal";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper as SwiperSw, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
const Track = () => {
    const [steps, setSteps] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    async function getSteps(url) {
        try {
            const response = await request({
                entityName: `steps`,
                method: "get",
            });
            return response.data;
        } catch {}
    }
    useEffect(() => {
        getSteps()
            .then((data) => {
                setSteps(data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {});
    }, []);
    return (
        <div>
            <Title>Мой трэк</Title>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
            >
                <SwiperSlide>
                    <TrackBody>
                        {steps.map((step) => (
                            <CardTrack
                                active={modalActive}
                                setActive={setModalActive}
                                key={step.id}
                                test={step.test}
                                name={step.name}
                                preview={step.image}
                                text={step.training_data}
                                video={step.video_url}
                            />
                        ))}
                    </TrackBody>
                </SwiperSlide>
                <SwiperSlide>
                    <TrackBody>
                        {steps.map((step) => (
                            <CardTrack
                                active={modalActive}
                                setActive={setModalActive}
                                key={step.id}
                                test={step.test}
                                name={step.name}
                                preview={step.image}
                                text={step.training_data}
                                video={step.video_url}
                            />
                        ))}
                    </TrackBody>
                </SwiperSlide>
                <SwiperSlide>
                    <TrackBody>
                        {steps.map((step) => (
                            <CardTrack
                                active={modalActive}
                                setActive={setModalActive}
                                key={step.id}
                                test={step.test}
                                name={step.name}
                                preview={step.image}
                                text={step.training_data}
                                video={step.video_url}
                            />
                        ))}
                    </TrackBody>
                </SwiperSlide>
                <SwiperSlide>
                    <TrackBody>
                        {steps.map((step) => (
                            <CardTrack
                                active={modalActive}
                                setActive={setModalActive}
                                key={step.id}
                                test={step.test}
                                name={step.name}
                                preview={step.image}
                                text={step.training_data}
                                video={step.video_url}
                            />
                        ))}
                    </TrackBody>
                </SwiperSlide>
            </Swiper>

            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
};

export default Track;

const Title = styled.h1`
    font-weight: bold;
    font-size: 32px;
    color: white;
    margin-bottom: 12px;
`;

const TrackBody = styled.div`
    display: flex;
    background-color: #2c353d;
    padding: 16px;
    height: 410px;
    border-radius: 6px;
    width: min-content;
    margin-right: 30px;
`;

const Swiper = styled(SwiperSw)`
    .swiper-slide {
        flex-shrink: initial;
    }
`;
