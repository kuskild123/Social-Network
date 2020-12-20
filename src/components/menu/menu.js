import React from 'react';
import m from './body.module.css';
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <div className={m.menu}>
            <NavLink to='/home' activeClassName={m.active}>Home</NavLink>
            <NavLink to='/profile' activeClassName={m.active}>Profile</NavLink>
            <NavLink to='/dialogs' activeClassName={m.active}>Dialogs</NavLink>
            <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            <NavLink to='/users' activeClassName={m.active}>Users</NavLink>
        </div>
    )
}

export {Menu};