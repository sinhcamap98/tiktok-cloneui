import className from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Sidebar from './Sidebar';

let cx = className.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
