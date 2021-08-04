import React from 'react';
import {appStore, iphone, playMarket} from "../../constants/constants";

const DownloadApp = () => {
    return (
        <div className="flex px-32 bg-gray-50">
            <div className="py-16 w-2/5">
                <h1 className="font-bold text-2xl pb-8">Заказывайте в новом приложении
                    Маркета и получайте бонусы
                </h1>
                <h1 className="font-bold text-sm pb-5">Мобильные устройства</h1>
                <div className="flex items-center">
                    <a href="#" className="flex mr-3 items-center text-white bg-gray-800 px-3 py-1 rounded">
                        <img src={playMarket} alt=""/>
                        <div className="ml-2">
                            <p className="text-xs">Загрузите</p>
                            <p>Google Play</p>
                        </div>
                    </a>
                    <a href="#" className="flex items-center text-white bg-gray-800 px-3 py-1 rounded">
                        <img src={appStore} alt=""/>
                        <div className="ml-2">
                            <p className="text-xs">Загрузите</p>
                            <p>App Store</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex items-end">
                <img src={iphone} alt=""/>
            </div>
            <div className="flex items-center justify-center">
                <p className="w-2/5 text-gray-500">Наведите камеру
                    на QR-код, чтобы
                    скачать</p>
            </div>
        </div>
    );
};

export default DownloadApp;