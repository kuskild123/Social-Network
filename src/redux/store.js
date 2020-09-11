import {MessageReducer} from "./messagePageReducer";
import {DialogReducer} from "./DialogPageReducer";

let store = {
    _CallSubscriber() {
        console.log('state save');
    },
    GetState(){
        return this._AppState
    },
    _AppState : {
        DialogPage:{
            NewDialogValue:'',
            DialogData:[
                {id:1,name:'Diana'},
                {id:2,name:'Sveta'},
                {id:3,name:'Anna'},
                {id:4,name:'Valera'},
                {id:5,name:'Alina'}],
            MessageData1:[
                {'message1':'I love you,Denis.and i fuckk yuoouououoouyou'},
                {'message1':'I Miss you.'}
            ],
            MessageData2:[
                {'message2':'And I.How are you?'},
                {'message2':'Normal'}
            ]
        },

        MessagePage: {
            NewValue:'',
            LikesData:[
                {'likes':23,'author':'Marilyn Manson','text':'Ohhh.Very cool!','src':'https://s.abcnews.com/images/Entertainment/GTY-marilyn-manson-jt-161029_16x9_992.jpg'},
                {'likes':69,'author':'Corey Taylor','text':'I agree with Marilyn Manson!','src':'https://images.kerrangcdn.com/Corey-Taylor-solo-credit-Ashley-Osborn-2.jpg?auto=compress&fit=crop&w=1200'},
                {'likes':125,'author':'Rockstar games','text':'Yea','src':'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1200px-Rockstar_Games_Logo.svg.png'}],
            ImageCenterData:[
                {'text':'Its my dream country - Canada!','src':'http://upload.wikimedia.org/wikipedia/commons/a/ac/Canada_Boat_House_am_Maligne_Lake,_Jasper_NP,_Alberta,_CA.jpg'}]
        }
    },
    Subscribe(observer){
        this._CallSubscriber = observer;
    },
    dispatch(action){
        MessageReducer(this._AppState.MessagePage,action);
        DialogReducer(this._AppState.DialogPage,action);
        this._CallSubscriber(this._AppState)
    }

}


export {store};
