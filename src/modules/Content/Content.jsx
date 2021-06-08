import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './Content.css'
import Contact from './Contact/Contact';
import Main from './Main/Main'
import Menu from './Menu/Menu'
import Messages from './Messages/Messages';
import Portfolio from './Portfolio/Portfolio'
function Content(props){
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
                            <Route path="/" render={() => <Main />} />
                            <Route path="/contact" render={() => <Contact />} />
                            <Route path="/messages" render={() => <Messages contactList={props.contactList} contactMessages={props.contactMessages} />} />
                            <Route path="/portfolio" render={() => <Portfolio />} />
                        </div>
                    </div>
                </div>
        </BrowserRouter>
    )
};

export default Content;