const ADD_DIALOG = 'ADD-DIALOG';
const NEW_DIALOG = 'NEW-DIALOG';

const initialState = {
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
}
const DialogReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let NewDialog = {
                'message2': state.NewDialogValue
            };
            state.MessageData2.push(NewDialog);
            state.NewDialogValue = '';
            return state;
        case NEW_DIALOG:
            state.NewDialogValue = action.newMessage;
            return state;
        default:
            return state;
    }

}
let NewDialogMessageCreate = (message) => {
    return{
        type:'NEW-DIALOG','newMessage':message
    }
}
let AddDialogMessageCreate = () => {
    return{
        type:'ADD-DIALOG'
    }
}
export {DialogReducer,NewDialogMessageCreate,AddDialogMessageCreate}