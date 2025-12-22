import { type ReactElement } from 'react';
import classNames from 'classnames/bind';
import FavouriteIcon from '@assets/icon-heart-filled.svg?react';
import ViewIcon from '@assets/icon-view.svg?react';
import DownloadIcon from '@assets/icon-download.svg?react';
import styles from './PictureModalCounters.module.scss';
import { PictureModalCounterConfig } from './PictureModalCounters.types';
import { PictureModalCountersLabels } from './PictureModalCounters.enums';

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
  const counters: PictureModalCounterConfig[] = [
    { icon: FavouriteIcon, value: favouriteCount, label: PictureModalCountersLabels.FAVOURITES },
    { icon: DownloadIcon, value: downloadCount, label: PictureModalCountersLabels.DOWNLOADS },
    { icon: ViewIcon, value: viewCount, label: PictureModalCountersLabels.VIEWS },
  ];

  return (
    <dl className={cx('picture-modal-counters')}>
      {counters.map(({ icon: Icon, value, label }) => {
        const formatted = value.toLocaleString();

        return (
          <div key={label}>
            <dt className={cx('sr-only')}>{label}</dt>
            <dd className={cx('picture-modal-counters__item')}>
              <Icon className={cx('picture-modal-counters__icon')} aria-hidden="true" />
              <span>{formatted}</span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
};

export default PictureModalCounters;
