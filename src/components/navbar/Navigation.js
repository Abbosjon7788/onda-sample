import React, {useState} from 'react';
import TopNavigation from "./TopNavigation";
import './navbar.scss';
import {logo, burger, paintedArrowDown, search, order, comparing, heart, bucket, user} from "../../constants/constants";
import {Link} from "react-router-dom";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const catalogue = ['Каталог1', 'Каталог2', 'Каталог3'];
    const location = ['location1', 'location2', 'location3'];

    return (
        <div className="w-full">
            <TopNavigation/>

            <div className="flex items-center tracking-wider px-20 py-6 shadow-lg">
                <img src={logo} alt=""/>
                <div
                    className="flex relative items-center border-2 border-yellow-400 text-white bg-yellow-400 ml-8 rounded-md p-3">
                    <img src={burger} onClick={() => {
                        setIsOpen(!isOpen);
                        setIsOpen2(false)
                    }} className="block cursor-pointer" alt=""/>
                    <span className="ml-4 block font-semibold">Каталог</span>

                    <div
                        className={`${isOpen ? 'block' : 'hidden'} absolute top-16 -right-20 w-96 px-4 pt-4 bg-white border z-50 rounded-md`}>
                        {
                            catalogue.map((element) => (
                                <Link to="/" onClick={() => setIsOpen(false)}
                                      className="font-semibold mb-4 tracking-widest border border-gray-700 hover:border-yellow-400 block w-full rounded-md px-4 py-2 hover:bg-yellow-400 text-black hover:text-white">{element}</Link>
                            ))
                        }
                    </div>
                </div>
                <div
                    className="flex items-center w-2/5 border-2 border-r-0 rounded-md ml-6 border-yellow-400">
                    <div className="flex items-center relative font-semibold rounded-md bg-gray-200 px-4 py-3">
                        <span className="mr-3">Везде</span>
                        <img src={paintedArrowDown} onClick={() => {
                            setIsOpen2(!isOpen2);
                            setIsOpen(false)
                        }} className="cursor-pointer" alt=""/>

                        <div
                            className={`${isOpen2 ? 'block' : 'hidden'} absolute top-16 -right-20 w-96 px-4 pt-4 bg-white border z-50 rounded-md`}>
                            {
                                location.map((element) => (
                                    <Link to="/" onClick={() => setIsOpen2(false)}
                                          className="font-semibold mb-4 tracking-widest border border-gray-700 hover:border-yellow-400 block w-full rounded-md px-4 py-2 hover:bg-yellow-400 text-black hover:text-white">{element}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <input type="text" placeholder="Поиск по товарам"
                           className="px-4 py-3 w-2/3 focus:outline-none ring-transparent"/>
                    <button type="button" className="px-8 py-4 ml-auto rounded-r-md bg-yellow-400">
                        <img src={search} alt=""/>
                    </button>
                </div>
                <div className="flex items-center ml-auto text-sm font-semibold">
                    <div className="mx-4">
                        <div className="h-5 mb-1">
                            <img src={order} className="mx-auto" alt=""/>
                        </div>
                        <Link to="/">Заказы</Link>
                    </div>
                    <div className="mx-4">
                        <div className="h-5 mb-1">
                            <img src={comparing} className="mx-auto" alt=""/>
                        </div>
                        <Link to="/">Сравнение</Link>
                    </div>
                    <div className="mx-4">
                        <div className="h-5 mb-1 relative">
                            <img src={heart} className="mx-auto" alt=""/>
                            <span
                                className="absolute inline-block px-1 text-xs font-bold bg-green -top-2 right-4 rounded-full">15</span>
                        </div>
                        <Link to="/">Избранное</Link>
                    </div>
                    <div className="mx-4">
                        <div className="h-5 mb-1">
                            <img src={bucket} className="mx-auto" alt=""/>
                        </div>
                        <Link to="/">Корзина</Link>
                    </div>
                    <div className="ml-4">
                        <div className="h-5 mb-1">
                            <img src={user} className="mx-auto" alt=""/>
                        </div>
                        <Link to="/">Войти</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navigation;