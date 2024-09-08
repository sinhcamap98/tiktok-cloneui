import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

let scm = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={scm('account-items')}>
            <img className={scm('account-image')} src={data.avatar} alt={data.full_name} />
            <span className={scm('account-info')}>
                <h4 className={scm('account-name')}>
                    {data.nickname}
                    <span>{data.tick && <FontAwesomeIcon icon={faCircleCheck} className={scm('check-icon')} />}</span>
                </h4>
                <p className={scm('account-lable')}>{data.full_name}</p>
            </span>
        </Link>
    );
}

export default AccountItem;
