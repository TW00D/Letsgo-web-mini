import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 373px;
  height: 196px;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    margin: 3% 0;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalButton = styled.div`
  border: none;
  padding: 5px 10px;
`;
