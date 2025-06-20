import type { PropsWithChildren, ReactElement } from 'react';
import CloseButton from '@components/ui/CloseButton';
import classNames from 'classnames/bind';
import styles from './ModalBody.module.scss';
import useModal from '../../hooks/useModal';

const cx = classNames.bind(styles);

type ModalBodyProps = {
  className?: string;
} & PropsWithChildren;

const ModalBody = ({ className, children }: ModalBodyProps): ReactElement => {
  // context to prevent prop drilling
  const { close } = useModal();
  return (
    <div className={cx('modal-body', className)}>
      <CloseButton onClose={() => close()} className={cx('modal-body--close-button')} aria-label="Close modal"/>
      {children}
    </div>
  );
};

export default ModalBody;
