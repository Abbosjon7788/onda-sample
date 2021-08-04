import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Authorization from "./pages/authorization/Authorization";
import Navigation from './components/navbar/Navigation';
import Footer from "./components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Authorization}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
