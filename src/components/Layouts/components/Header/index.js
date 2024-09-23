import 'tippy.js/dist/tippy.css'; // optional
import logo from '../../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faKeyboard,
    faLightbulb,
    faMessage,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCloudMoon,
    faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

import Button from '../../../Button';
import Menu from '../../../Menu';
import SearchBar from '../SearchBar';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

let scm = classNames.bind(styles);
let logIn = true;

let MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: [
            {
                title: 'Tiếng Việt (Việt Nam)',
                children: [
                    {
                        title: 'Tiếng Việt (Việt Nam) 1',
                    },
                    {
                        title: 'Tiếng Việt (Việt Nam) 2',
                    },
                ],
            },
            {
                title: 'English',
            },
            {
                title: 'Deutsch',
            },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        href: 'https://www.tiktok.com/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faCloudMoon} />,
        title: 'Chế độ tối',
    },
];
let MENU_ITEMS_2 = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Nhận xu',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Đăng xuất',
    },
];
function Header() {
    return (
        <header className={scm('wrapper')}>
            <div className={scm('inner')}>
                <div className={scm('logo')}>
                    <img src={logo.logo} alt="Tiktok-Logo" />
                </div>

                <SearchBar />

                <div className={scm('header-right-container')}>
                    {/* muốn module hoá thì phải có cx + đã có CSS của class đó trong CSS sheet
                    Ex: 
                    <Button upload sinhTestClass={scm('sinhTestClassCss')}>
                        Tải lên
                    </Button>
                    <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    */}
                    {/*<Button follow>Follow</Button>
                    <Button loginsidebar follow>}
                        Đăng nhập
                    </Button>
                    <Button dowloadApp>Tải ứng dụng</Button>*/}

                    {!logIn ? (
                        <>
                            <Button primary to="/upload" target="_blank">
                                Đăng nhập
                            </Button>
                        </>
                    ) : (
                        <div>
                            <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <FontAwesomeIcon icon={faPaperPlane} className={scm('header-right-menu-message')} />
                            <FontAwesomeIcon icon={faMessage} className={scm('header-right-menu-inbox')} />
                        </div>
                    )}
                    <Menu menuItems={logIn ? MENU_ITEMS_2 : MENU_ITEMS}>
                        {logIn ? (
                            <div>
                                <img
                                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_720x720.jpeg?lk3s=a5d48078&nonce=17935&refresh_token=001d57e12fe575496a88ace73cb9958c&x-expires=1726570800&x-signature=%2B9h2flrYbG61tuGA7%2FBE%2FkVPczM%3D&shp=a5d48078&shcp=81f88b70"
                                    alt="avatar-login"
                                    className={scm('header-right-avatar-login')}
                                />
                            </div>
                        ) : (
                            <FontAwesomeIcon icon={faEllipsisVertical} className={scm('header-right-menu-icon')} />
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
