import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Tippy from '@tippyjs/react/headless'; // different import path
import 'tippy.js/dist/tippy.css'; // optional

import logo from '../../../../assets/images';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass, faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../../../AccountItem';
import { useEffect, useState } from 'react';
import Button from '../../../Button';

let scm = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    //useEffect nếu case có 2 param, param thứ 2 là mảng trống [], thì useEffect đó chỉ chạy 1 lần khi component đó được mount lần đầu tiên
    // mỗi khi 1 element (thẻ) được thêm vô component, thì cái useState chạym thêm nhiều element thì chạy nhiều lần, re-reder nhiều
    //setSearchResult([1]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 9000);
    }, []);

    return (
        <header className={scm('wrapper')}>
            <div className={scm('inner')}>
                <div className={scm('logo')}>
                    <img src={logo.logo} alt="Tiktok-Logo" />
                </div>

                <Tippy
                    //visible={true}
                    visible={searchResult.length > 0}
                    //transform=""
                    //moveTransition="transform 0s ease-out"
                    //before: transform: translate3d(442px, 63px, 0px)
                    //after scroll: transform: translate3d(501px, 63px, 0px);
                    //moveTransition="transform 0.2s ease-out"
                    //visibille
                    //interactive={true}
                    interactive
                    render={(attrs) => (
                        <div className={scm('search-result')} tabIndex="-1" {...attrs}>
                            <h4 className={scm('account')}>Tài khoản </h4>
                            <AccountItem
                                accountName="tiger050794"
                                sinh="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_300x300.webp?lk3s=a5d48078&x-expires=1709625600&x-signature=gbgOXMXy6kTg0S%2FL1QDBLiXw0PI%3D"
                                alt="Son Tung M-TP image"
                                accountLable="Son Tung M-TP"
                            />
                            <AccountItem
                                accountName="sinhphuc98"
                                sinh="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_300x300.webp?lk3s=a5d48078&x-expires=1709625600&x-signature=gbgOXMXy6kTg0S%2FL1QDBLiXw0PI%3D"
                                alt="Phuc Sinh image"
                                accountLable="Phúc Sinh"
                            />
                            <AccountItem
                                accountName="taylorswift"
                                sinh="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_300x300.webp?lk3s=a5d48078&x-expires=1709625600&x-signature=gbgOXMXy6kTg0S%2FL1QDBLiXw0PI%3D"
                                alt="Taylor Swift image"
                                accountLable="Taylor Swift"
                            />
                            <AccountItem
                                accountName="coldplay"
                                sinh="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_300x300.webp?lk3s=a5d48078&x-expires=1709625600&x-signature=gbgOXMXy6kTg0S%2FL1QDBLiXw0PI%3D"
                                alt="coldplay image"
                                accountLable="coldplay"
                            />
                            <AccountItem
                                accountName="messi"
                                sinh="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_300x300.webp?lk3s=a5d48078&x-expires=1709625600&x-signature=gbgOXMXy6kTg0S%2FL1QDBLiXw0PI%3D"
                                alt="Lionel Messi image"
                                accountLable="Lionel Messi"
                            />
                            <AccountItem
                                accountName="cristianoronaldo"
                                sinh="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/f655d827002d291328098fecadc03b14~c5_300x300.webp?lk3s=a5d48078&x-expires=1709625600&x-signature=gbgOXMXy6kTg0S%2FL1QDBLiXw0PI%3D"
                                alt="Cristiano Ronaldo image"
                                accountLable="Cristiano Ronaldo"
                            />
                        </div>
                    )}
                >
                    <div className={scm('search-bar')}>
                        {/*<Tippy content="This is search result">*/}
                        <input className={scm('input-search')} placeholder="Tìm kiếm" spellCheck="false" />
                        <button className={scm('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={scm('loading-icon')} />
                        {/*<span className={scm('search-bar-border')}></span>*/}
                        {/*<Tippy content="this is search tooltip" placement="right">*/}
                        <button className={scm('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        {/*<</Tippy>*/}
                        {/*</Tippy>*/}
                    </div>
                </Tippy>

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
                    <Button upload icon={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>
                    <Button primary to="/upload" target="_blank">
                        Đăng nhập
                    </Button>
                    {/*<Button follow>Follow</Button>
                    <Button loginsidebar follow>}
                        Đăng nhập
                    </Button>
                    <Button dowloadApp>Tải ứng dụng</Button>*/}
                </div>
            </div>
        </header>
    );
}

export default Header;
