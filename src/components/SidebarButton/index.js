// nếu chỉ import className from classnames, thì module sẽ k work  => phải import classnames/bind
import classNames from 'classnames/bind';
import styles from './SidebarButton.module.scss';

const cx = classNames.bind(styles);

function SideBarButton({ children, icon, ...leftPara }) {
    let Comp = 'button';
    const prop = {
        ...leftPara,
    };

    return (
        <Comp className={cx('side-bar-button')} {...prop}>
            {icon && <span className={cx('side-bar-item-icon')}>{icon}</span>}
            <span className={cx('side-bar-button-text')}>{children}</span>
        </Comp>
    );
}
export default SideBarButton;
