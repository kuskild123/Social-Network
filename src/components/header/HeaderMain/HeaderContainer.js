import React from 'react';
import {Header} from "./header";
import {connect} from "react-redux";
import {LogoutT, SetUser} from "../../../redux/Auth/AuthReducer";

class HeaderContainerAPI extends React.Component{
	render(){
		return <>
			<Header {...this.props}></Header>
		</>
	}
}
let MapStateToProps = (state) => {
	return{
		isAuth:state.auth.isAuth,
		login:state.auth.login
	}
}
const HeaderContainer = connect(MapStateToProps,{SetUser,LogoutT})(HeaderContainerAPI)
export {HeaderContainer};
