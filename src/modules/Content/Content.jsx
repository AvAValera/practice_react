import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Content.css'
import Contact from './Contact';
import Main from './Main'
import Menu from './Menu'
import Messages from './Messages';
function Content(){
    return (
        <BrowserRouter>
            <Menu />
                <div className="Content">
                    <div className="Baner">
                        <img src="./../traine.jpg" alt="" />
                    </div>
                    <div className="Info">
                        <div className="Logo">
                            <img src="./../logo512.png" alt="logo-info" />
                        </div>
                        <div className="My-info">
                            <Route path="/main" component={Main} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/messages" component={Messages} />
                        </div>
                    </div>
                </div>
        </BrowserRouter>
    )
};

export default Content;