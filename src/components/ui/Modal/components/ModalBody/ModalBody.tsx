import type { PropsWithChildren, ReactElement } from 'react';
import CloseButton from '@components/ui/CloseButton';
import classNames from 'classnames/bind';
import Button from '@components/ui/Button';
import styles from './ModalBody.module.scss';
import useModal from '../../hooks/useModal';

const cx = classNames.bind(styles);

const ModalBody = ({ children }: PropsWithChildren): ReactElement => {
  // context to prevent prop drilling
  const { close } = useModal();
  return (
    <div className={cx('modal-body')}>
      <CloseButton onClose={() => close()} className={cx('modal-body--close-button')} />
      <Button style={{ color: 'white' }}>hi</Button>
      {children}
    </div>
  );
};

export default ModalBody;
