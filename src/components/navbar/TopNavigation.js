import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {location, logo} from "../../constants/constants";
import {arrowDown} from "../../constants/constants";

const TopNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('Рус');

    return (
        <div className="flex items-center 720:px-20 px-10 630:py-2 py-4 font-semibold 630:border-b-2 text-sm">
            <Link to="/" className="630:flex hidden items-center">
                <img src={location} alt=""/>
                <span className="630:ml-3 ml-0 630:block hidden">Ташкент</span>
            </Link>
            <Link to="/" className="630:hidden block mr-auto">
                <img src={logo} alt=""/>
            </Link>
            <ul className="996:w-auto ml-auto ml-0 flex">
                <li className="996:mx-6 py-1 hidden 996:block"><Link to="/">Доставка</Link></li>
                <li className="996:mx-6 996:pl-0 pl-8 py-1 630:block hidden"><Link to="/">Как стать продавцом</Link></li>
                <li className="996:mx-6 996:pl-0 pl-8 630:pr-4 pr-0 py-1 py-1 630:block hidden"><Link to="/">Как стать инвестором </Link></li>
                <li className="996:mx-6 mr-auto py-1 hidden 996:block"><Link to="/">Условия рассрочки</Link></li>
                <li className="flex items-center 630:pl-4 pl-0 ml-auto pr-1 py-1 630:border-l-2">
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