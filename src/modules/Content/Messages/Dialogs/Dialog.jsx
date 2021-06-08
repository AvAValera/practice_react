import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Dialog extends Component {
    
    render() {
        return (
            <div className="Dialog">
                <NavLink to={"/messages/" + this.props.id}>{this.props.name}</NavLink>
            </div>
        );
    }
}
