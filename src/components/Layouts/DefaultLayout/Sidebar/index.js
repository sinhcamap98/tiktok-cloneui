import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

let cx = classNames.bind(styles);
function Sidebar() {
    return <div className={cx('wrapper')}>Sidebar Default Layout</div>;
}

export default Sidebar;
