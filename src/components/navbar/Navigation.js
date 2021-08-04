import React, {useState} from 'react';
import TopNavigation from "./TopNavigation";
import './navbar.scss';
import {logo, burger, paintedArrowDown, search, order, comparing, heart, bucket, user, searchBlack} from "../../constants/constants";
import {Link} from "react-router-dom";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const catalogue = ['Каталог1', 'Каталог2', 'Каталог3'];
    const location = ['location1', 'location2', 'location3'];

    return (
        <div className="pt-36">
            <div className="fixed inset-x-0 top-0 z-40 bg-white">
                <TopNavigation/>

                <div className="flex items-center relative tracking-wider 720:px-20 px-10 1369:py-6 630:pb-24 pb-16 pt-6 shadow-lg">
                    <Link to="/" className="630:block hidden">
                        <img src={logo} alt=""/>
                    </Link>

                    <div className="flex header-catalogue bottom-6 720:inset-x-20 inset-x-10">
                        <div onClick={() => {
                            setIsOpen(!isOpen);
                            setIsOpen2(false)
                        }} className="flex relative cursor-pointer items-center border-2 border-yellow-400 text-white bg-yellow-400 1369:ml-8 rounded-md 1369:p-3 p-4">
                            <img src={burger} className="block" alt=""/>
                            <span className="ml-2 1369:block hidden font-semibold">Каталог</span>

                            <div className={`${isOpen ? 'block' : 'hidden'} absolute 1369:-right-20 top-16 -left-1 630:w-96 w-72 px-4 pt-4 bg-white border z-50 rounded-md`}>
                                {
                                    catalogue.map((element) => (
                                        <Link to="/" onClick={() => setIsOpen(false)}
                                              className="font-semibold mb-4 tracking-widest border border-gray-700 hover:border-yellow-400 block w-full rounded-md px-4 py-2 hover:bg-yellow-400 text-black hover:text-white">{element}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="search-part flex items-center cursor-pointer border-2 630:border-r-0 630:rounded-md rounded-lg 630:px-0 pl-2 630:ml-8 ml-4 border-yellow-400">
                            <div onClick={() => {
                                setIsOpen2(!isOpen2);
                                setIsOpen(false)
                            }} className="630:flex hidden items-center relative font-semibold rounded-md bg-gray-200 1369:px-4 px-6 py-3">
                                <span className="mr-3">Везде</span>
                                <img src={paintedArrowDown} alt=""/>

                                <div
                                    className={`${isOpen2 ? 'block' : 'hidden'} absolute top-16 1369:-right-20 -left-1 630:w-96 w-72 px-4 pt-4 bg-white border z-50 rounded-md`}>
                                    {
                                        location.map((element) => (
                                            <Link to="/" onClick={() => setIsOpen2(false)}
                                                  className="font-semibold mb-4 tracking-widest border border-gray-700 hover:border-yellow-400 block w-full rounded-md px-4 py-2 hover:bg-yellow-400 text-black hover:text-white">{element}</Link>
                                        ))
                                    }
                                </div>
                            </div>
                            <input type="text" placeholder="Поиск по товарам"
                                   className="630:px-4 px-2 630:py-3 py-2 630:w-2/3 w-full 630:text-base text-sm focus:outline-none ring-transparent"/>
                            <button type="button" className="flex items-center justify-center 630:w-20 w-16 630:py-4 py-3 ml-auto rounded-r-md 630:bg-yellow-400">
                                <img src={search} className="630:inline-block hidden" alt=""/>
                                <img src={searchBlack} className="630:hidden inline-block" alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className="630:w-auto 630:relative 630:pt-0 pt-24 fixed bottom-0 z-40 inset-x-0 630:ml-auto w-full">
                        <div className="flex items-center 630:px-0 px-4 630:py-0 py-5 630:bg-transparent bg-gray-200 justify-around text-sm font-semibold">
                            <Link className="996:mx-5 630:mx-2 996:text-base text-sm">
                                <div className="h-5 mb-1">
                                    <img src={order} className="mx-auto" alt=""/>
                                </div>
                                <span className="630:text-base text-xs">Заказы</span>
                            </Link>
                            <Link className="996:mx-5 630:mx-2 996:text-base text-sm">
                                <div className="h-5 mb-1">
                                    <img src={comparing} className="mx-auto" alt=""/>
                                </div>
                                <span className="630:text-base text-xs">Сравнение</span>
                            </Link>
                            <Link className="996:mx-5 630:mx-2 996:text-base text-sm">
                                <div className="h-5 mb-1 relative">
                                    <img src={heart} className="mx-auto" alt=""/>
                                    <span
                                        className="absolute inline-block px-1 text-xs font-bold bg-green -top-2 right-4 rounded-full">15</span>
                                </div>
                                <span className="630:text-base text-xs">Избранное</span>
                            </Link>
                            <Link className="996:mx-5 630:mx-2 996:text-base text-sm">
                                <div className="h-5 mb-1">
                                    <img src={bucket} className="mx-auto" alt=""/>
                                </div>
                                <span className="630:text-base text-xs">Корзина</span>
                            </Link>
                            <Link className="ml-5">
                                <div className="h-5 mb-1">
                                    <img src={user} className="mx-auto" alt=""/>
                                </div>
                                <span className="630:text-base text-xs">Войти</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Navigation;