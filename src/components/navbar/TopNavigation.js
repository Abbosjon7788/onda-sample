import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {location} from "../../constants/constants";
import {arrowDown} from "../../constants/constants";

const TopNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('Рус');

    return (
        <div className="flex items-center px-20 py-2 font-semibold border-b-2 text-sm">
            <Link to="/" className="flex items-center">
                <img src={location} alt=""/>
                <span className="ml-3">Ташкент</span>
            </Link>
            <ul className="ml-auto flex">
                <li className="px-6 py-1 block"><Link to="/">Доставка</Link></li>
                <li className="px-6 py-1 block"><Link to="/">Как стать продавцом</Link></li>
                <li className="px-6 py-1 block"><Link to="/">Как стать инвестором </Link></li>
                <li className="px-6 py-1 block"><Link to="/">Условия рассрочки</Link></li>
                <li className="flex items-center pl-6 pr-1 py-1 border-l-2">
                    <Link to="/" className="mr-3">{language}</Link>
                    <div className="flex items-center justify-center relative">
                        <img src={arrowDown} onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer" alt=""/>
                        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col p-2 border rounded-md absolute z-50 top-5 bg-white`}>
                            <Link to="/" onClick={()=>{setIsOpen(false);setLanguage('Uz')}} className="block hover:bg-yellow-400 hover:text-white rounded-md py-1 px-3">Uz</Link>
                            <Link to="/" onClick={()=>{setIsOpen(false); setLanguage('Рус')}} className="block hover:bg-yellow-400 hover:text-white rounded-md py-1 px-3">Рус</Link>
                            <Link to="/" onClick={()=>{setIsOpen(false); setLanguage('En')}} className="block hover:bg-yellow-400 hover:text-white rounded-md py-1 px-3">En</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TopNavigation;