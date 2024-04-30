import { useRecoilState } from "recoil";
import { ModalOpenAtom } from "../../../components/store/common/Model";

const useModal = () => {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(ModalOpenAtom);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return { isOpen, open, close, toggle };
};

export default useModal;
