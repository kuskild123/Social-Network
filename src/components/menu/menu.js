import React from 'react';
import m from './body.module.css';
import {NavLink} from "react-router-dom";

function Menu() {
    return (
        <div className={m.menu}>

            <NavLink to='/settings' activeClassName={m.active}>Settings</NavLink>
            <NavLink to='/dialogs' activeClassName={m.active}>Dialogs</NavLink>
            <NavLink to='/music' activeClassName={m.active}>Music</NavLink>
            <NavLink to='/messages' activeClassName={m.active}>Messages</NavLink>
            <NavLink to='/news' activeClassName={m.active}>News</NavLink>
        </div>
    )
}

export {Menu};