import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {arrowDown, facebook, google, instagram, twitter} from "../../constants/constants";

const Footer = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    return (
        <div className="630:px-20 px-10 bg-gray-100 630:mb-0 mb-20 md:pt-12 pt-4 pb-4">
            <div className="flex md:flex-row flex-col border-b-2 pb-3">
                <div className="lg:w-1/4 md:w-1/3 w-full">
                    <h1  onClick={()=>{setOpen1(!open1)}} className="font-semibold cursor-pointer md:pb-0 pb-4 md:border-b-0 border-b-2 flex items-center xl:text-lg text-base mb-2">Информация <img src={arrowDown} className="md:hidden inline-block ml-auto" alt=""/></h1>
                    <div className={`md:block ${open1 ? 'flex flex-col': 'hidden'}`}>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">О нас</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Условия использования</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Оплата и доставка</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Как стать инвестором </Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Как заказать</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Вопросы и ответы</Link>
                    </div>

                </div>
                <div className="lg:w-1/4 md:w-1/3 w-full">
                    <h1 onClick={()=>{setOpen2(!open2)}} className="flex cursor-pointer items-center md:pb-0 pb-4 md:border-b-0 border-b-2 font-semibold xl:text-lg text-base mb-2">Сервис и поддержка <img src={arrowDown} className="md:hidden inline-block ml-auto" alt=""/></h1>
                    <div className={`md:block ${open2 ? 'flex flex-col': 'hidden'}`}>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Бренды</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Оплата</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Доставка</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Обратная связь </Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">Контакты</Link>
                        <Link to='/' className="text-gray-500 hover:text-gray-800 block xl:text-base text-sm mb-2">FAQs</Link>
                    </div>

                </div>
                <div className="lg:w-1/4 md:w-1/3 w-full">
                    <h1 onClick={()=>{setOpen3(!open3)}} className="md:hidden flex cursor-pointer items-center font-semibold xl:text-lg text-base mb-2">Контакты <img src={arrowDown} className="ml-auto" alt=""/></h1>
                    <div className={`md:block ${open3 ? 'flex flex-col': 'hidden'}`}>
                        <div className="flex items-center mb-3">
                            <h1 className="font-semibold 630:block hidden xl:text-lg text-base mr-4">Телефон:</h1>
                            <a href="#" className="block xl:text-base text-sm text-gray-500">+99899 552-72-35</a>
                        </div>
                        <div className="flex items-center mb-3">
                            <h1 className="font-semibold 630:block hidden xl:text-lg text-base mr-4">Эл.почта:</h1>
                            <a href="#" className="block xl:text-base text-sm text-gray-500">bxsavdo@gmail.com</a>
                        </div>
                        <div className="mb-3">
                            <h1 className="font-semibold 630:block hidden xl:text-lg text-base mb-2">Адрес:</h1>
                            <p className="xl:text-base text-sm">Республика Узбекистан, город Ташкент, Юнусабад район, Шарафа Рашидова 40</p>
                        </div>
                    </div>

                </div>
                <div className="lg:block hidden w-1/6 ml-auto">
                    <h1 className="font-semibold xl:text-lg lg:text-base lg:block hidden mb-2">Мы в соцсетях</h1>
                    <div className="flex items-center">
                        <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                            <img src={facebook} alt=""/>
                        </a>
                        <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                            <img src={instagram} alt=""/>
                        </a>
                        <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                            <img src={twitter} alt=""/>
                        </a>
                        <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                            <img src={google} alt=""/>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex mt-4">
                <p className="630:text-sm text-xs mr-2 text-gray-400">2021 XBSavdo. Все права защищены</p>
                <div className="lg:hidden ml-auto flex items-center">
                    <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                        <img src={facebook} alt=""/>
                    </a>
                    <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                        <img src={instagram} alt=""/>
                    </a>
                    <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                        <img src={twitter} alt=""/>
                    </a>
                    <a href="#" className="flex w-8 h-8 1369:mr-6 mr-2 items-center justify-center rounded bg-gray-200 hover:bg-gray-400">
                        <img src={google} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;