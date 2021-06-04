import React from 'react';
import { NavLink } from 'react-router-dom';

function Messages(){
    return(
        <div className="Messages">
            <div className="list-contact">
                <div className="contact">
                <NavLink to="/messages/1">Sam</NavLink>
                </div>
                <div className="contact">
                <NavLink to="/messages/2">Michael</NavLink>
                </div>
                <div className="contact">
                <NavLink to="/messages/3">Katy</NavLink>
                </div>
                <div className="contact">
                <NavLink to="/messages/4">Elisa</NavLink>
                </div>
            </div>
            <div className="list-messages">
                <div className="message">--Hello</div>
                <div className="message">--How are you?</div>
                <div className="message">--Where are you?</div>
            </div>
        </div>
    )
};

export default Messages;