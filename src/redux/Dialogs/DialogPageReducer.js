const ADD_DIALOG = 'ADD-DIALOG';
const initialState = {
    DialogData:[
        {id:1,name:'Diana'},
        {id:2,name:'Sveta'},
        {id:3,name:'Anna'},
        {id:4,name:'Valera'},
        {id:5,name:'Alina'},
        {id:6,name:'Dasha'}
        ],
    MessageData1:[
        {id:1,'message1':'I love you...'},
    ],
    MessageData2:[
        {id:1,'message2':'And I.How are you?'},
    ]
};
const DialogReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_DIALOG:
            return {...state,
                MessageData2:[...state.MessageData2,{id:2,'message2': action.NewMessageBody}]
            };
        default:
            return state;

    }

}
let NewDialogMessageCreate = (message) => {
    return{
        type:'NEW-DIALOG','newMessage':message
    }
}
let AddDialogMessageCreate = (NewMessageBody) => {
    return{
        type:'ADD-DIALOG',NewMessageBody
    }
}
export {DialogReducer,NewDialogMessageCreate,AddDialogMessageCreate}