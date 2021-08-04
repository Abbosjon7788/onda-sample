import React from 'react';
import Footer from "../../components/footer/Footer";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import AuthorizationComponent from "../../components/authorization/AuthorizationComponent";

const Authorization = () => {
    return (
        <div>
            <AuthorizationComponent/>
            <DownloadApp/>
            <Footer/>
        </div>
    );
};

export default Authorization;