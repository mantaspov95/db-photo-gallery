import Logo404 from '@assets/404.svg?react';
import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import styles from './NotFoundPage.module.scss';

const cx = classNames.bind(styles);

const NotFoundPage = (): ReactElement => (
  <div className={cx('not-found-page')}>
    <Logo404 className={cx('not-found-page__logo')} aria-label="Error 404" />
    <h1 id="not-found-title" className={cx('not-found-page__heading')}>
      Page Not Found
    </h1>
  </div>
);

export default NotFoundPage;
