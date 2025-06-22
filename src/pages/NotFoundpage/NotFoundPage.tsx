import Logo404 from '@assets/404.svg?react';
import classNames from 'classnames/bind';
import styles from './NotFoundPage.module.scss';
import type { ReactElement } from 'react';

const cx = classNames.bind(styles);

const NotFoundPage = (): ReactElement => (
  <div className={cx('not-found-page')}>
    <Logo404 className={cx('not-found-page__logo')} />
    <h1 className={cx('not-found-page__heading')}>Page Not Found</h1>
  </div>
);
export default NotFoundPage;
