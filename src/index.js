import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let ReRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={ state } dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,document.getElementById('root')
    );
}
ReRender(store.getState());
store.subscribe(() => {
    let State = store.getState();
    ReRender(State);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
