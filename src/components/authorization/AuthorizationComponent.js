import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {arrowLeft} from "../../constants/constants";

const AuthorizationComponent = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);

    return (
        <div className="630:py-24 pb-32 pt-16">
            <div className="630:w-450 w-340 relative mx-auto 630:p-6 p-4 rounded-md border">
                <h1 className="font-bold text-center 630:text-3xl text-xl 630:mb-8 mb-6">Авторизация</h1>
                <div className="flex justify-between border-b-4 pb-2 mb-6">
                    <div className="relative">
                        <h1 className={`${isOpen ? 'text-black' : 'text-gray-300'} font-bold 630:text-base text-sm cursor-pointer`} onClick={()=>{setIsOpen(true);setIsOpen2(false)}}>Физическое лицо</h1>
                        <div className={`${isOpen ? 'w-full' : 'w-0'} absolute h-1 bg-yellow-400 rounded-md -bottom-3`}/>
                    </div>
                    <div className="relative">
                        <h1 className={`${isOpen2 ? 'text-black' : 'text-gray-300'} 630:text-base text-sm font-bold cursor-pointer`} onClick={()=>{setIsOpen(false); setIsOpen2(true)}}>Юридическое лицо</h1>
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
                <Link className="flex items-center 630:w-14 w-10 630:h-14 h-10 border 630:top-4 -top-3 630:-left-7 -left-3 justify-center bg-white z-30 rounded-full absolute shadow-xl">
                    <img src={arrowLeft} alt=""/>
                </Link>
            </div>
        </div>
    );
};

export default AuthorizationComponent;