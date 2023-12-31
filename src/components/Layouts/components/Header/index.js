import classNames from 'classnames/bind';
import styles from './Header.module.scss';

let scm = classNames.bind(styles);

function Header() {
    return (
        <header className={scm('wrapper')}>
            <div className={scm('inner')}>this is content inside header</div>
        </header>
    );
}

export default Header;
