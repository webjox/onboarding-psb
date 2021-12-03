import styled from "@emotion/styled/macro";

const Modal = ({ active, setActive }) => {
    return (
        <div>
            {active ? (
                <ModalBody onClick={() => setActive(false)}>
                    <ModalContent
                        onClick={(e) => e.stopPropagation()}
                    ></ModalContent>
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
`;

const ModalContent = styled.div`
    padding: 20px;
    border-radius: 4px;
    background-color: white;
`;
