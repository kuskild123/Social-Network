const AddPost = 'ADD-POST';
const NewPost = 'NEW-POST-TEXT';
const initialState = {
    NewValue:'',
    LikesData:[
        {'likes':23,'author':'Marilyn Manson','text':'Ohhh.Very cool!','src':'https://s.abcnews.com/images/Entertainment/GTY-marilyn-manson-jt-161029_16x9_992.jpg'},
        {'likes':69,'author':'Corey Taylor','text':'I agree with Marilyn Manson!','src':'https://images.kerrangcdn.com/Corey-Taylor-solo-credit-Ashley-Osborn-2.jpg?auto=compress&fit=crop&w=1200'},
        {'likes':125,'author':'Rockstar games','text':'Yea','src':'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/1200px-Rockstar_Games_Logo.svg.png'}],
    ImageCenterData:[
        {'text':'Its my dream country - Canada!','src':'http://upload.wikimedia.org/wikipedia/commons/a/ac/Canada_Boat_House_am_Maligne_Lake,_Jasper_NP,_Alberta,_CA.jpg'}]
}
const MessageReducer = (state=initialState,action) => {
    switch (action.type){
        case AddPost:
            let newPost = {
                'likes': 0,
                'author': 'Jordan Belfort',
                'text': state.NewValue,
                'src': 'https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/news/46682500-1112383.jpg'
            };
            state.LikesData.push(newPost);
            state.NewValue = '';
            return state;
        case NewPost:
            state.NewValue = action.newText;
            return state;
        default:
            return state;
    }

}

let AddNewPostCreate = (text) => {
    return {
        type:'NEW-POST-TEXT',newText:text
    }
}
let NewPostCreate = () => {
    return {
        type:'ADD-POST'
    }
}

export {MessageReducer,AddNewPostCreate,NewPostCreate};