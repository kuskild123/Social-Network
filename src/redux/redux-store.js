import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {DialogReducer} from "./Dialogs/DialogPageReducer";
import {UserReducer} from "./Users/UsersPageReducers/UserPageReducer";
import {ProfilePageReducer} from "./Profile/ProfilePageReducers/ProfilePageReducer";
import {AuthReducer} from "./Auth/AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {PostReducer} from "./Profile/ProfilePageReducers/PostPageReducer";
import {AppReducer} from "./App/AppPageReducers";

let reducers = combineReducers({
    DialogPage : DialogReducer,
    UsersPage : UserReducer,
    ProfilePage : ProfilePageReducer,
    auth : AuthReducer,
    form : formReducer,
    PostPage : PostReducer,
    AppPage : AppReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
// let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
