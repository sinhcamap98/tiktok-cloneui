import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
//import { Divider } from '@mui/material';
import logo from '../../../../assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

let scm = classNames.bind(styles);
//console.log('sinh log ' + logo.logo);
//console.log(logo.logo);

function Header() {
    return (
        <header className={scm('wrapper')}>
            <div className={scm('inner')}>
                <div className={scm('logo')}>
                    <img src={logo.logo} alt="Tiktok-Logo" />
                </div>
                <div className={scm('search-bar')}>
                    <input className={scm('input-search')} placeholder="Tìm kiếm" spellCheck="false" />
                    <button className={scm('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={scm('loading-icon')} />
                    {/*<span className={scm('search-bar-border')}></span>*/}
                    <button className={scm('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div>Login</div>
            </div>
        </header>
    );
}

export default Header;
