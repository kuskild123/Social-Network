import React from 'react';
import head from '../HeaderCss/header.module.css';
import {NavLink} from "react-router-dom";


function Header (props) {
	return(
			<div className={head.header}>
	          <img src="https://passion-stickers.com/3041-large_default/dodge-challenger-srt-demon-2017-decals.jpg" alt=""/>
	          <div className={head.name}>
				  {props.isAuth ?<div><div>{props.login}</div><div className={head.logout} onClick={props.LogoutT}>Logout</div></div> : <NavLink
					  className={head.login} to={'/login'}>Login</NavLink>
				  }
	          </div>
	      	</div>
		)
}

export {Header};