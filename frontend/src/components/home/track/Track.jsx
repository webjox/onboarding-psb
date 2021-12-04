import styled from "@emotion/styled/macro";
import { useState, useEffect, createContext } from "react";
import request from "../../../request";
import CardTrack from "./CardTrack";
import Modal from "./Modal";
import { Swiper as SwiperSw, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export const StoreTrack = createContext({});

const Track = () => {
    const [state, setState] = useState({
        steps: "",
        step_id: "",
        completeSteps: "",
        categoryOne: "",
        categoryTwo: "",
        setCompleteSteps: (value) => {
            setState((prevstate) => {
                return {
                    ...prevstate,
                    completeSteps: value,
                };
            });
        },
        setSteps: (value) => {
            setState((prevstate) => {
                return {
                    ...prevstate,
                    steps: value,
                };
            });
        },
        setStepsId: (value) => {
            setState((prevstate) => {
                return {
                    ...prevstate,
                    step_id: value,
                };
            });
        },
    });
    const [modalActive, setModalActive] = useState(false);

    console.log(state.completeSteps);

    async function getSteps(url) {
        try {
            const response = await request({
                entityName: `steps`,
                method: "get",
            });
            return response.data;
        } catch {}
    }
    async function getCompleteSteps(url) {
        try {
            const response = await request({
                entityName: "passed-user-step",
                method: "get",
            });
            return response.data;
        } catch {}
    }
    useEffect(() => {
        getSteps()
            .then((data) => {
                state.setSteps(data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {});
        getCompleteSteps()
            .then((data) => {
                state.setCompleteSteps(data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {});
    }, [modalActive]);
    return (
        <StoreTrack.Provider value={state}>
            {state.steps ? (
                <div>
                    <Title>Мой трэк</Title>

                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        <SwiperSlide>
                            <TrackBody>
                                <Category>
                                    <SubTitle>Оформленение</SubTitle>
                                    <CategoryFlex>
                                        {state.steps.map((step) => {
                                            return (
                                                <div>
                                                    {step.category ===
                                                        "Оформление" &&
                                                    step.is_passed !== true ? (
                                                        <CardTrack
                                                            active={modalActive}
                                                            setActive={
                                                                setModalActive
                                                            }
                                                            key={step.id}
                                                            id={step.id}
                                                            award={step.award}
                                                            count={step.count}
                                                            test={step.test}
                                                            name={step.name}
                                                            preview={step.image}
                                                            text={
                                                                step.training_data
                                                            }
                                                            video={
                                                                step.video_url
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </CategoryFlex>
                                </Category>
                                <Category>
                                    <SubTitle>Выход на рабочее место</SubTitle>
                                    <CategoryFlex>
                                        {state.steps.map((step) => {
                                            return (
                                                <div>
                                                    {step.category ===
                                                        "Выход на рабочее место" &&
                                                    step.is_passed !== true ? (
                                                        <CardTrack
                                                            active={modalActive}
                                                            setActive={
                                                                setModalActive
                                                            }
                                                            key={step.id}
                                                            id={step.id}
                                                            award={step.award}
                                                            count={step.count}
                                                            test={step.test}
                                                            name={step.name}
                                                            preview={step.image}
                                                            text={
                                                                step.training_data
                                                            }
                                                            video={
                                                                step.video_url
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </CategoryFlex>
                                </Category>
                                {/* <Category>
                                    <SubTitle>Наши ценности</SubTitle>
                                    <CategoryFlex>
                                        {state.steps.map((step) => {
                                            return (
                                                <div>
                                                    {step.category ===
                                                        "Наши ценности" &&
                                                    step.is_passed !== true ? (
                                                        <CardTrack
                                                            active={modalActive}
                                                            setActive={
                                                                setModalActive
                                                            }
                                                            key={step.id}
                                                            id={step.id}
                                                            award={step.award}
                                                            count={step.count}
                                                            test={step.test}
                                                            name={step.name}
                                                            preview={step.image}
                                                            text={
                                                                step.training_data
                                                            }
                                                            video={
                                                                step.video_url
                                                            }
                                                        />
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </CategoryFlex>
                                </Category> */}
                            </TrackBody>
                        </SwiperSlide>
                    </Swiper>
                </div>
            ) : (
                ""
            )}

            <Modal active={modalActive} setActive={setModalActive} />
        </StoreTrack.Provider>
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
`;

const CategoryFlex = styled.div`
    display: flex;
    margin-top: 8px;
`;

const Category = styled.div`
    background-color: #2c353d;
    padding: 16px 0 16px 16px;
    height: 410px;
    border-radius: 6px;
    width: min-content;
    margin-right: 30px;
`;

const SubTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #ffffff;
`;

const Swiper = styled(SwiperSw)``;
