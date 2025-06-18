import type { PropsWithChildren } from 'react';
import useModal from '../../hooks/useModal';
import ModalCloseButton from '../CloseButton';

const ModalBody = ({ children }: PropsWithChildren) => {
  // context to prevent prop drilling
  const { close } = useModal();
  return (
    <div>
      <ModalCloseButton onClose={() => close()} />
      {children}
    </div>
  );
};

export default ModalBody;
