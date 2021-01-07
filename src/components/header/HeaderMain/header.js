import React from 'react';
import head from '../HeaderCss/header.module.css';
import {NavLink} from "react-router-dom";
import Clock from "../../common/Clock/Clock";


function Header (props) {
	return(
			<div className={head.header}>
				<div className={head.headerClock}>
				<Clock/>
				</div>
				<div className={head.name}>
				  {props.isAuth ?<div><div>{props.login}</div><div className={head.logout} onClick={props.LogoutT}>Logout</div></div> : <NavLink
					  className={head.login} to={'/login'}>Login</NavLink>
				  }
	          </div>
	      	</div>
		)
}

export {Header};