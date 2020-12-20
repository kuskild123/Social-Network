import React from 'react';
import './index.css';
import {Menu} from './components/menu/menu.js';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {HeaderContainer} from "./components/header/HeaderMain/HeaderContainer";
import Login from './components/login/LoginMain/loginContainer'
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {InitializeAppT} from "./redux/App/AppPageReducers";
import Loader from "./components/common/Preloader/Loader";
import store from "./redux/redux-store";
import WithSuspense from "./components/common/Suspense/ReactSuspense";

const Dialogs = React.lazy( () => import("./components/dialogs/DialogsMain/dialogs-container") )
const Music = React.lazy( () => import ("./components/music/music") )
const Profile = React.lazy( () => import ("./components/Profile/ProfileMain/profileContainer") )
const Users = React.lazy( () => import ("./components/users/UsersMain/users-container") )
const Home = React.lazy( () => import('./components/home/HomeMain/Home') )
class App extends React.Component {
    componentDidMount() {

        this.props.InitializeAppT()
    }
    render() {
         return (
            <div className='app-wrapper'>
                <HeaderContainer></HeaderContainer>
                <div className='app'>
                    <Menu></Menu>
                    <div className='app-content'>
                        {!this.props.IsInitial ? <Loader></Loader> : <>
                            <Route path='/dialogs' render={WithSuspense(Dialogs)}></Route>
                            <Route path='/music' render={WithSuspense(Music)}></Route>
                            <Route path='/login' render={() => <Login></Login>}></Route>
                            <Route path='/profile/:userId?' render={WithSuspense(Profile)}></Route>
                            <Route path='/users' render={WithSuspense(Users)}></Route>
                            <Route path='/home' render={WithSuspense(Home)}></Route>
                        </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
let MapStateToProps = (state) => {
    return {
        IsInitial : state.AppPage.isInitial
    }
}
let AppContainer = compose(
    connect(MapStateToProps,{InitializeAppT}),
    withRouter
)(App);
let MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={ store }>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp;