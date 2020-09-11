import {combineReducers, createStore} from "redux";
import {DialogReducer} from "./DialogPageReducer";
import {MessageReducer} from "./messagePageReducer";

let reducers = combineReducers({
    DialogPage : DialogReducer,
    MessagePage: MessageReducer
});

let store = createStore(reducers);

export default store;
