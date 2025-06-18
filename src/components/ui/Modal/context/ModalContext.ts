import { createContext } from "react";

type ModalContextProps = {
  close: () => void;
};

const ModalContext = createContext<ModalContextProps | undefined> (undefined);

export default ModalContext;