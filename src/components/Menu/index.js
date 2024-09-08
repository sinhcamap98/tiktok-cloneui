import Tippy from '@tippyjs/react/headless'; // different import path
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './Menu.js';
import { useState } from 'react';
import Button from '../Button';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
let scm = classNames.bind(styles);

function Menu({ children, className, width, menuItems }) {
    let language = {
        code: 'Ngôn Ngữ',
    };
    let newArr = [];
    let Arr = [];
    let [itemToShow, setItemToShow] = useState([menuItems]);
    //console.log(itemToShow);
    //console.log(itemToShow.length);
    let lastItemToShow = itemToShow[itemToShow.length - 1];
    //let hide = (itemToShow) => setItemToShow(itemToShow.slice(0, 1));

    // lỗi 1: function là phải return, k return dẫn đến k trả về gì hết
    // lỗi 2: trả về component nên phải bọc trong dấu ngoặc tròn (), k phải ngoặc {}
    /*
    // Solution 1
    let renderItems = () => {
        // forEach là sai??? => find the reason
        //return menuItems.forEach((item) => <MenuItem data={item}></MenuItem>);
        return menuItems.map((item) => <MenuItem data={item}></MenuItem>);
    };
    */
    //));
    return (
        <Tippy
            //visible={true}
            delay={[null, 800]}
            onHide={() => setItemToShow(itemToShow.slice(0, 1))}
            placement="bottom-start"
            interactive
            render={(attrs) => (
                <div className={scm('menu')} tabIndex="-1" {...attrs}>
                    {itemToShow.length > 1 && (
                        <p className={scm('language')}>
                            <span className={scm('language-back-icon')}>
                                <button
                                    className={scm('back-icon')}
                                    onClick={() => {
                                        //setItemToShow((current) => current.splice(current.length - 1, 1));
                                        // why??? dùng hàm splice thì sai, còn hàm slice thì đúng???
                                        // => do nếu trả current.splice(-1) thì sẽ trả về value là 1 phần tử cuối cùng, sai, phải dùng thêm return mới đúng, mà arrow fuction thì k dùng thêm được return
                                        // Solution 1
                                        setItemToShow((current) => current.slice(0, current.length - 1));
                                        // Solution 2
                                    }}
                                >
                                    <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                                </button>
                            </span>
                            Ngôn Ngữ
                        </p>
                    )}
                    {/*
                    //lỗi 1: khai báo biến k được khai báo trong ngoặc {} ở đây, phải khai báo ở vị trí giữa function và return
                    //lỗi 2: trả về component, k được dùng ngoặc {} trong method map => xoá dấu {} đi và xoá dấu ; đi
                    //lỗi 3: map method thì có thể dùng return, còn forEarch thì k được return.

                    Solution 2:
                    */}
                    {
                        (newArr = lastItemToShow.map((item, index) => (
                            <MenuItem
                                data={item}
                                key={index}
                                menuLogin
                                onClick={() => {
                                    if (item.children) {
                                        //setItemToShow([...itemToShow, item.children]);
                                        setItemToShow((current) => [...current, item.children]);

                                        //console.log(itemToShow);
                                    }
                                }}
                            ></MenuItem>
                        )))
                    }
                    {/*menuItems.forEarch((item) => (
                        <MenuItem data={item}></MenuItem>
                    ))*/}
                    {/*renderItems()*/}
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
