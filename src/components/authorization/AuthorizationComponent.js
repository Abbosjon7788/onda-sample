import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {arrowLeft} from "../../constants/constants";

const AuthorizationComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <div className="w-1/4 relative mx-auto p-6 rounded-md border my-24">
            <h1 className="font-bold text-center text-3xl mb-8">Авторизация</h1>
            <div className="flex justify-between border-b-4 pb-2 mb-6">
                <div className="relative">
                    <h1 className={`${isOpen ? 'text-black' : 'text-gray-300'} font-bold cursor-pointer`} onClick={()=>{setIsOpen(true);setIsOpen2(false)}}>Физическое лицо</h1>
                    <div className={`${isOpen ? 'w-full' : 'w-0'} absolute h-1 bg-yellow-400 rounded-md -bottom-3`}/>
                </div>
                <div className="relative">
                    <h1 className={`${isOpen2 ? 'text-black' : 'text-gray-300'} font-bold cursor-pointer`} onClick={()=>{setIsOpen(false); setIsOpen2(true)}}>Юридическое лицо</h1>
                    <div className={`${isOpen2 ? 'w-full' : 'w-0'} absolute h-1 bg-yellow-400 rounded-md -bottom-3`}/>
                </div>

            </div>
            <div>
                <p className="text-sm mb-1">Телефон</p>
                <input type="text" placeholder="Телефон" className="w-full text-sm px-4 py-2 rounded-md border focus:outline-none ring-transparent"/>
                <p className="text-sm mt-4 mb-1">Пароль</p>
                <input type="text" placeholder="Пароль" className="w-full text-sm px-4 py-2 rounded-md border focus:outline-none ring-transparent"/>
                <Link to="/" className="w-full text-right text-blue-600 text-xs block mt-1">Не помню пароль</Link>
                <button type="button" className="w-full bg-yellow-400 hover:bg-yellow-500 text-white text-center rounded-md py-2 font-semibold tracking-wider mt-6">Войти</button>
                <Link to="/" className="w-full border hover:border-yellow-400 hover:text-yellow-400 block text-center rounded-md py-2 font-semibold tracking-wider mt-4">Зарегистрироватся</Link>
            </div>
            <Link className="flex items-center w-14 h-14 border top-4 -left-7 justify-center bg-white z-40 rounded-full absolute shadow-xl">
                <img src={arrowLeft} alt=""/>
            </Link>
        </div>
    );
};

export default AuthorizationComponent;