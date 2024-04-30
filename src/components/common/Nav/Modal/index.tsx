import React from "react";
import * as m from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <m.ModalBackground>
          <m.ModalContent>
            <div style={{ color: "#000", fontWeight: "600" }}>
              아직 준비중인 기능입니다
            </div>
            <m.ModalButtonWrapper>
              <m.ModalButton onClick={onClose}>확인</m.ModalButton>
            </m.ModalButtonWrapper>
          </m.ModalContent>
        </m.ModalBackground>
      )}
    </>
  );
};

export default Modal;
