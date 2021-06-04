/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(){
    return (
        <div className="Menu">
            <div><NavLink to='/main' activeClassName='active-menu'>Main</NavLink></div>
            <div><NavLink to="/contact" activeClassName='active-menu'>Contact</NavLink></div>
            <div><NavLink to="/messages" activeClassName='active-menu'>Messages</NavLink></div>
            <div><NavLink to="/portfolio" activeClassName='active-menu'>Portfolio</NavLink></div>
        </div>
    )
};

export default Menu;