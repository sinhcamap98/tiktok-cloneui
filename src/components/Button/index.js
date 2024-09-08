// nếu chỉ import className from classnames, thì module sẽ k work  => phải import classnames/bind
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
//import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
// nếu sử dụng 2 attribute className ở trong 1 thẻ HTML, trong Reactjs sẽ bị lỗi => chỉ được sử dụng 1 attribute className

function Button({
    children,
    sinhTestClass,
    icon,
    to,
    href,
    upload,
    dowloadApp,
    follow,
    loginsidebar,
    sencond,
    primary,
    menuLogin,
    onClick,
    ...leftPara
}) {
    let Comp = 'button';
    const prop = {
        onClick,
        ...leftPara,
    };
    if (to) {
        //Comp = 'Link'; => lỗi, k phải string, nên để Comp = Link;
        Comp = Link;
        prop.to = to;
    } else if (href) {
        Comp = 'a';
        prop.href = href;
    }

    /*if (target) {
        prop.target = target;
    }*/
    //const classname = cx({ primary }, 'wrapper', 'sinhclasstest', 'sinhclasstest2');
    const classname = cx('wrapper', {
        [sinhTestClass]: sinhTestClass,
        primary,
        dowloadApp,
        follow,
        loginsidebar,
        upload,
        menuLogin,
    });
    return (
        //<div>
        <Comp className={classname} {...prop}>
            {/*icon ? icon : ''*/}
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('button-text')}>{children}</span>
        </Comp>
        //</div>
    );
}
export default Button;
