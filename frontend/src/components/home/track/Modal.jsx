import styled from "@emotion/styled/macro";
import { useContext } from "react";
import { StoreTrack } from "./Track";
import request from "../../../request";
import Text from "./modalElements/Text";
import Radio from "./modalElements/Radio";
import DragNDrop from "./modalElements/DragNDrop";

const Modal = ({ active, setActive }) => {
    const state = useContext(StoreTrack);

    async function postSteps(data) {
        try {
            const response = await request({
                entityName: "send-step",
                data: { id_step: data },
                method: "post",
            });
        } catch (error) {
            console.error(error);
        } finally {
        }
    }
    return (
        <div>
            {active ? (
                <ModalBody onClick={() => setActive(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <HeaderModal>О нашей культуре и ценностях</HeaderModal>
                        <Content>
                            <Text text={""} />
                            <Radio />
                            <DragNDrop />
                        </Content>
                        <FooterModal>
                            <Button
                                onClick={() => {
                                    postSteps(state.step_id);
                                    setActive(false);
                                }}
                            >
                                Ок
                            </Button>
                        </FooterModal>
                    </ModalContent>
                </ModalBody>
            ) : (
                ""
            )}
        </div>
    );
};
export default Modal;

const ModalBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    transition: 0.3s;
`;

const ModalContent = styled.div`
    border-radius: 6px;
    background-color: #3b454e;
    width: 700px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const HeaderModal = styled.div`
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 9px 12px;
    background-color: #3b454e;
    border-radius: 6px 6px 0 0;
    color: white;
    font-weight: bold;
    font-size: 20px;
    line-height: 150%;
    color: #ffffff;
`;

const FooterModal = styled.div`
    height: 72px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 9px 12px;
    background-color: #3b454e;
    border-radius: 0 0 6px 6px;
`;

const Content = styled.div`
    max-height: 710px;
    overflow: auto;
    background-color: #4d5964;
`;

const Button = styled.button`
    background: #d23f00;
    border-radius: 4px;
    padding: 12px 24px;
`;
