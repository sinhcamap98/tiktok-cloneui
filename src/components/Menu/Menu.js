import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
let scm = classNames.bind(styles);

function MenuItem({ data, menuLogin, onClick }) {
    let prop = {};
    if (data.to) {
        prop.to = data.to;
    } else if (data.href) {
        prop.href = data.href;
    }
    return (
        <Button icon={data.icon} {...prop} menuLogin onClick={onClick}>
            {data.title}
        </Button>
    );
}
export default MenuItem;
