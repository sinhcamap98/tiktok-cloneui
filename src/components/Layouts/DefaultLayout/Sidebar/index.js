import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHouse, faUser, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';
import SidebarButton from '../../../SidebarButton';
import { useState } from 'react';
import AccountItem from '../../../AccountItem';
import { Button } from '@mui/material';
let cx = classNames.bind(styles);
let newArr;
let Side_Bar_Item = [
    {
        icon: <FontAwesomeIcon icon={faHouse} />,
        title: 'Dành cho bạn',
    },
    {
        icon: <FontAwesomeIcon icon={faCompass} />,
        title: 'Khám phá',
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Đang Follow',
    },
    {
        icon: <FontAwesomeIcon icon={faUserGroup} />,
        title: 'Bạn bè',
    },
    {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE',
    },
    {
        icon: (
            <img
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_720x720.jpeg?lk3s=a5d48078&nonce=17935&refresh_token=001d57e12fe575496a88ace73cb9958c&x-expires=1726570800&x-signature=%2B9h2flrYbG61tuGA7%2FBE%2FkVPczM%3D&shp=a5d48078&shcp=81f88b70"
                alt="avatar-login"
                className={cx('sidebar-left-avatar-login')}
            />
        ),
        title: 'Hồ sơ',
    },
];

function Sidebar() {
    const [value, setValue] = useState([]);
    try {
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=hoa&type=more`)
            .then((res) => res.json())
            .then((res) => {
                setValue(res.data);
            });
    } catch (error) {
        // DOMException: The user aborted a request.
        console.log('Error: ', error);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar-item')}>
                {
                    (newArr = Side_Bar_Item.map((item, index) => (
                        <SidebarButton icon={item.icon} key={index}>
                            {item.title}
                        </SidebarButton>
                    )))
                }
            </div>
            <div className={cx('side-bar-acccount-item')}>
                <h2 className={cx('side-bar-suggested')}>Đề xuất cho bạn</h2>
                {value &&
                    value.map((value) => {
                        return <AccountItem key={value.id} data={value} />;
                    })}
            </div>
            <button className={cx('side-bar-see-more')}>Xem thêm</button>
            <div className={cx('side-bar-tiktok-info')}>
                <h4 className={cx('side-bar-tiktok-company-info')}>Công ty</h4>
                <h4 className={cx('side-bar-tiktok-company')}>Chương trình</h4>
                <h4 className={cx('side-bar-tiktok-company')}>Điều khoản và chính sách</h4>
                <button className={cx('side-bar-tiktok-company-info-more')}>Thêm</button>
                <h4 className={cx('side-bar-tiktok-company-info-copy-right')}>© 2024 TikTok</h4>
            </div>
        </div>
    );
}

export default Sidebar;
