import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless'; // different import path
import AccountItem from '../../../AccountItem';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './SearchBar.module.scss';
import useDebounce from '../../../../hooks/useDebounce';
let scm = classNames.bind(styles);

function SearchBar() {
    let [searchValue, setSearchValue] = useState([]);
    //const [searchResult, setSearchResult] = useState([]);

    let [showClearIcon, setShowClearIcon] = useState('');
    let [showLoadingIcon, setShowLoadingIcon] = useState(false);
    let [visible, setVisible] = useState(false);
    //useEffect nếu case có 2 param, param thứ 2 là mảng trống [], thì useEffect đó chỉ chạy 1 lần khi component đó được mount lần đầu tiên
    // mỗi khi 1 element (thẻ) được thêm vô component, thì cái useState chạym thêm nhiều element thì chạy nhiều lần, re-reder nhiều
    //setSearchResult([1]);

    let clickOutSideSearchBar = () => {
        //console.log('sinh test over there 123');
        setVisible(false);
    };

    let showSearchResult = () => setVisible(true);
    let ref = useRef();
    let searchBtnRef = useRef();
    //console.log(ref.current);
    useDebounce(showClearIcon, 700);
    useEffect(() => {
        //let a = setTimeout(()=>, 700);
        //clearTimeout(a):

        setShowLoadingIcon(true);

        if (showClearIcon.trim()) {
            //console.log('test ' + value + 'here over there');
            // chỗ này có 2 cách nối chuỗi
            //solution 1: dùng dấu 1 phẩy hoặc 2 phẩy thì dùng dấu + để nối chuõi
            //solution 2: dùng dấu huyền thì k dùng dấu + để nối chuỗi, mà thay vào đó dùng dùng $ để lấy value của 1 biến
            // => solution 2 ngắn hơn

            //dùng hàm encodeURIComponent() để mã hoá URI, mục đích là để mã hoá các kí tự đặc biệt ?, &, :... để khỏi bị lỗi
            //encodeURIComponent(showClearIcon)}

            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(showClearIcon)}&type=less`)
                //fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=' + value + '&type=less')
                .then((res) => res.json())
                //.then((res) => console.log(res));
                .then((res) => {
                    setVisible(true);
                    setSearchValue(res.data);
                    setShowLoadingIcon(false);
                });
        } else {
            setSearchValue([]);
            setShowLoadingIcon(false);
        }
        /*setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 9000);*/
    }, [showClearIcon]);
    //let res = [];
    /*let fetchAPI = (value) => {
        setShowLoadingIcon(true);

        if (value) {
            console.log('test ' + value + 'here over there');
            // chỗ này có 2 cách nối chuỗi
            //solution 1: dùng dấu 1 phẩy hoặc 2 phẩy thì dùng dấu + để nối chuõi
            //solution 2: dùng dấu huyền thì k dùng dấu + để nối chuỗi, mà thay vào đó dùng dùng $ để lấy value của 1 biến
            // => solution 2 ngắn hơn
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${value}&type=less`)
                //fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=' + value + '&type=less')
                .then((res) => res.json())
                //.then((res) => console.log(res));
                .then((res) => {
                    //console.log(res);
                    setSearchValue(res.data);
                    setShowLoadingIcon(false);
                });
        } else {
            setSearchValue([]);
        }
    };*/
    return (
        <Tippy
            //visible={false}
            placement="bottom"
            moveTransition=""
            visible={visible && searchValue.length > 0}
            // visible, value là true hoặc false, not a function => nếu k thể dùng if cũng không thể dùng function, thử dùng 1 useState()
            // value of onClickOutside is true, false or a callback function
            onClickOutside={clickOutSideSearchBar}
            //interactive={true}
            interactive
            render={(attrs) => (
                <div className={scm('search-result')} tabIndex="-1" {...attrs}>
                    <h4 className={scm('account')}>Tài khoản </h4>
                    {/*Chú ý: phải đặt key ở vị trí đầu tiên, k sẽ bị lỗi, ví dụ như case dưới, key rồi đến data*/}
                    {searchValue.map((value) => {
                        return <AccountItem key={value.id} data={value} />;
                    })}
                    {/*<Tippy content="This is search result">
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
                            */}
                </div>
            )}
        >
            <div className={scm('search-bar')}>
                {/*<Tippy content="This is search result">*/}
                <input
                    // when
                    // refer: https://react.dev/learn/referencing-values-with-refs , read Refs and the DOM
                    ref={ref}
                    id="inputSearch"
                    value={showClearIcon}
                    className={scm('input-search')}
                    placeholder="Tìm kiếm"
                    spellCheck="false"
                    onChange={(e) => {
                        setShowClearIcon(e.target.value);

                        //fetchAPI(e.target.value);
                    }}
                    // value of onClick is a function
                    onClick={showSearchResult}
                />
                {showClearIcon && !showLoadingIcon && (
                    <button
                        className={scm('clear-btn')}
                        onClick={() => {
                            setShowClearIcon('');
                            setSearchValue([]);
                            //solution 1: to make input focus after click clear btn
                            //document.getElementById('inputSearch').focus();
                            //solution 2: to make input focus after click clear btn
                            ref.current.focus();
                            searchBtnRef.current.style.color = 'rgba(22, 24, 35, 0.34)';
                            searchBtnRef.current.style.background = 'none';
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {showClearIcon && showLoadingIcon && (
                    <FontAwesomeIcon icon={faSpinner} className={scm('loading-icon')} />
                )}

                {/*<span className={scm('search-bar-border')}></span>*/}
                {/*<Tippy content="this is search tooltip" placement="right">*/}
                <button ref={searchBtnRef} className={scm('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                {/*<</Tippy>*/}
                {/*</Tippy>*/}
            </div>
        </Tippy>
    );
}
export default SearchBar;
