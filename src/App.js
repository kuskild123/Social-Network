import React from 'react';
import './index.css';
import {Menu} from './components/menu/menu.js';
import {HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import {HeaderContainer} from "./components/header/HeaderMain/HeaderContainer";
import Login from './components/login/LoginMain/loginContainer'
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {InitializeAppT} from "./redux/App/AppPageReducers";
import store from "./redux/redux-store";
import WithSuspense from "./components/common/Suspense/ReactSuspense";

const Dialogs = React.lazy( () => import("./components/dialogs/DialogsMain/dialogs-container") )
const Music = React.lazy( () => import ("./components/music/music") )
const Profile = React.lazy( () => import ("./components/Profile/ProfileMain/profileContainer") )
const Users = React.lazy( () => import ("./components/users/UsersMain/users-container") )
const Home = React.lazy( () => import('./components/home/HomeMain/Home') )
class App extends React.Component {
    catchAllUnHandleError = (reason, promise) => {
        console.log(`${promise} Some error occupted`);
    }

    componentDidMount() {
        this.props.InitializeAppT()
        window.addEventListener("unhandledrejection",  this.catchAllUnHandleError);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",  this.catchAllUnHandleError);
    }

    render() {
         return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='app'>
                    <Menu/>
                    <div className='app-content'>
                        {!this.props.IsInitial ? <div>
                            <Route path='/login' render={() => <Login/>}/>
                        </div> : <>
                                <Redirect from='/' to='/home' />
                            <Route path='/dialogs' render={WithSuspense(Dialogs)}/>
                            <Route path='/music' render={WithSuspense(Music)}/>
                            <Route path='/login/privet' render={() => <div>Привет,как дела?</div>}/>
                            <Route exact path='/login' render={() => <Login/>}/>
                            <Route path='/profile/:userId?' render={WithSuspense(Profile)}/>
                            <Route path='/users' render={WithSuspense(Users)}/>
                            <Route path='/home' render={WithSuspense(Home)}/>
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
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={ store }>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainApp;