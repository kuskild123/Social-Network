import {GetUser} from "../Auth/AuthReducer";

const INITIAL_SUCCESS = 'INITIAL-SUCCESS';

const initialState = {
    isInitial:false
}

const AppReducer = (state = initialState,action) => {
    switch(action.type) {
        case INITIAL_SUCCESS :
            return {
                ...state,
                isInitial:true
            }
        default :
            return state;
    }
}

let InitializedSuccess = () => {
    return {
        type:INITIAL_SUCCESS
    }
}

const InitializeAppT = () => {
    return (dispatch) => {
        let promise = dispatch(GetUser())
        Promise.all([promise]).then( () => {
            dispatch(InitializedSuccess())
        } )
    }
}

export {InitializeAppT,AppReducer}