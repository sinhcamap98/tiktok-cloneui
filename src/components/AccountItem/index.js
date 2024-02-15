import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

let scm = classNames.bind(styles);
function AccountItem(sinh, alt, accountName, accountLable) {
    return (
        <div className={scm('account-items')}>
            <img className={scm('account-image')} src={sinh.sinh} alt={sinh.alt} />
            <span className={scm('account-info')}>
                <h4 className={scm('account-name')}>
                    {sinh.accountName}
                    <span>
                        <FontAwesomeIcon icon={faCircleCheck} className={scm('check-icon')} />
                    </span>
                </h4>
                <p className={scm('account-lable')}>{sinh.accountLable}</p>
            </span>
        </div>
    );
}

export default AccountItem;
