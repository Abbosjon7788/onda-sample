import React from 'react';
import {appStore, iphone, playMarket} from "../../constants/constants";

const DownloadApp = () => {
    return (
        <div className="flex 1369:px-32 630:px-20 px-10 bg-gray-50">
            <div className="flex md:py-16 py-8 xl:w-2/5 md:w-1/2 w-full flex-col">
                <h1 className="font-bold 981:block hidden text-2xl 981:pb-8 pb-0">Заказывайте в новом приложении
                    Маркета и получайте бонусы
                </h1>
                <div className="flex flex-col md:w-auto w-full">
                    <h1 className="font-bold md:text-left text-center 1369:text-sm block md:text-2xl 630:text-3xl text-xl 981:pb-5 630:pb-12 pb-8">Мобильные устройства</h1>
                    <div className="flex items-center 630:flex-row flex-col 1369:mx-0 mx-auto">
                        <a href="#" className="flex 630:w-auto w-44 630:mb-0 mb-4 hover:scale-110 transform duration-200 md:mr-3 630:mr-16 items-center text-white bg-gray-800 px-3 630:py-1 py-2 rounded">
                            <img src={playMarket} alt=""/>
                            <div className="630:ml-2 ml-4">
                                <p className="text-xs">Загрузите</p>
                                <p>Google Play</p>
                            </div>
                        </a>
                        <a href="#" className="flex 630:w-auto w-44 hover:scale-110 transform duration-200 items-center text-white bg-gray-800 px-3 630:py-1 py-2 rounded">
                            <img src={appStore} alt=""/>
                            <div className="630:ml-2 ml-4">
                                <p className="text-xs">Загрузите</p>
                                <p>App Store</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:flex hidden 1369:ml-0 ml-auto">
                <div className="flex items-end">
                    <img src={iphone} alt=""/>
                </div>
                <div className="xl:flex hidden items-center justify-center">
                    <p className="w-2/5 text-gray-500">Наведите камеру
                        на QR-код, чтобы
                        скачать</p>
                </div>
            </div>

        </div>
    );
};

export default DownloadApp;