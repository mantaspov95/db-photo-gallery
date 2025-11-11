import { type ReactElement } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as FavoutireIcon } from '@assets/icon-heart-filled.svg';
import { ReactComponent as ViewIcon } from '@assets/icon-view.svg';
import { ReactComponent as DownloadIcon } from '@assets/icon-download.svg';
import styles from './PictureModalCounters.module.scss';

const cx = classNames.bind(styles);

type PictureModalCountersProps = {
  downloadCount: number;
  favouriteCount: number;
  viewCount: number;
};

const PictureModalCounters = ({
  downloadCount,
  favouriteCount,
  viewCount,
}: PictureModalCountersProps): ReactElement => {
  const downloadCountFormatted = downloadCount.toLocaleString();
  const favouriteCountFormatted = favouriteCount.toLocaleString();
  const viewCountFormatted = viewCount.toLocaleString();
  const downloadsLabel = `${downloadCountFormatted} downloads`;
  const favouritesLabel = `${favouriteCountFormatted} favourites`;
  const viewsLabel = `${viewCountFormatted} views`;

  return (
    <div className={cx('picture-modal-counters')}>
      <div className={cx('picture-modal-counters__item')} aria-label={favouritesLabel}>
        <FavoutireIcon className={cx('picture-modal-counters__icon')} aria-hidden="true" />
        <span aria-hidden="true">{favouriteCountFormatted}</span>
      </div>
      <div className={cx('picture-modal-counters__item')} aria-label={downloadsLabel}>
        <DownloadIcon className={cx('picture-modal-counters__icon')} aria-hidden="true" />
        <span aria-hidden="true">{downloadCountFormatted}</span>
      </div>
      <div className={cx('picture-modal-counters__item')} aria-label={viewsLabel}>
        <ViewIcon className={cx('picture-modal-counters__icon')} aria-hidden="true" />
        <span aria-hidden="true">{viewCountFormatted}</span>
      </div>
    </div>
  );
};

export default PictureModalCounters;
