import React from 'react';
import {Link} from "react-router-dom";
import {facebook, google, instagram, twitter} from "../../constants/constants";

const Footer = () => {
    return (
        <div className="px-20 bg-gray-100 pt-12 pb-4">
            <div className="flex border-b-2 pb-3">
                <div className="w-1/4">
                    <h1 className="font-semibold text-lg mb-2">Информация</h1>
                    <Link to='/' className="text-gray-500 block mb-2">О нас</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Условия использования</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Оплата и доставка</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Как стать инвестором </Link>
                    <Link to='/' className="text-gray-500 block mb-2">Как заказать</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Вопросы и ответы</Link>
                </div>
                <div className="w-1/4">
                    <h1 className="font-semibold text-lg mb-2">Сервис и поддержка</h1>
                    <Link to='/' className="text-gray-500 block mb-2">Бренды</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Оплата</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Доставка</Link>
                    <Link to='/' className="text-gray-500 block mb-2">Обратная связь </Link>
                    <Link to='/' className="text-gray-500 block mb-2">Контакты</Link>
                    <Link to='/' className="text-gray-500 block mb-2">FAQs</Link>
                </div>
                <div className="w-1/4">
                    <div className="flex items-center mb-3">
                        <h1 className="font-semibold text-lg mr-4">Телефон:</h1>
                        <a href="#" className="block text-gray-500">+99899 552-72-35</a>
                    </div>
                    <div className="flex items-center mb-3">
                        <h1 className="font-semibold text-lg mr-4">Эл.почта:</h1>
                        <a href="#" className="block text-gray-500">bxsavdo@gmail.com</a>
                    </div>
                    <div className="mb-3">
                        <h1 className="font-semibold text-lg mb-2">Адрес:</h1>
                        <p>Республика Узбекистан, город Ташкент, Юнусабад район, Шарафа Рашидова 40</p>
                    </div>
                </div>
                <div className="w-1/6 ml-auto">
                    <h1 className="font-semibold text-lg mb-2">Мы в соцсетях</h1>
                    <div className="flex items-center">
                        <a href="#" className="flex w-8 h-8 mr-6 items-center justify-center rounded bg-gray-200">
                            <img src={facebook} alt=""/>
                        </a>
                        <a href="#" className="flex w-8 h-8 mr-6 items-center justify-center rounded bg-gray-200">
                            <img src={instagram} alt=""/>
                        </a>
                        <a href="#" className="flex w-8 h-8 mr-6 items-center justify-center rounded bg-gray-200">
                            <img src={twitter} alt=""/>
                        </a>
                        <a href="#" className="flex w-8 h-8 mr-6 items-center justify-center rounded bg-gray-200">
                            <img src={google} alt=""/>
                        </a>
                    </div>
                </div>

            </div>
            <div className="mt-4">
                <p className="text-sm text-gray-400">2021 XBSavdo. Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;