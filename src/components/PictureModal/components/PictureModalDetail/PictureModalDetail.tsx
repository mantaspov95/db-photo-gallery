import { useId, type ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './PictureModalDetail.module.scss';

const cx = classNames.bind(styles);

type PictureModalDetailProps = {
  label: string;
  value: string;
  isAuthor?: boolean;
  isDescription?: boolean;
};

const PictureModalDetail = ({ label, value, isAuthor, isDescription }: PictureModalDetailProps): ReactElement => {
  const fieldId = useId();

  return (
    <div className={cx('picture-modal-detail')}>
      <span className={cx('picture-modal-detail__label')} id={fieldId}>
        {label}
      </span>
      <span
        className={cx('picture-modal-detail__value', {
          'picture-modal-detail__value--author': isAuthor,
          'picture-modal-detail__value--description': isDescription,
        })}
        aria-labelledby={fieldId}
      >
        {value}
      </span>
    </div>
  );
};

export default PictureModalDetail;
