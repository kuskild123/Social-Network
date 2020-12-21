import tayler from '../../../IMAGES/tayler.png';
import manson from '../../../IMAGES/marilynManson.jpg'
import volf from '../../../IMAGES/volf.png'
const SetPostUserVar = 'SET-POST-USER'
const DeletePostUserVar = 'DELETE-POST-USER'

let initialState = {
    Posts :[
    {id:1,name:'Tyler',comment:'Не разбив яиц, омлет не приготовишь.',img:tayler,likesCount:666},
    {id:2,name:'Manson',comment:'Rock lalala',img:manson,likesCount:888}
]
}


const PostReducer = (state=initialState,action) => {
    switch (action.type) {
        case SetPostUserVar :
            return{
                ...state,
                Posts:[...state.Posts,{id:3,name:'Denis',comment:action.postComment,img:volf}]
            }
        case DeletePostUserVar :
            return {
                ...state,
                Posts: state.Posts.filter(p => p.id != action.userId)
            }
        default:
            return state;
    }
}
let SetPostUser = (postComment) => {
    return {
        type:SetPostUserVar,postComment
    }
}
let DeletePost = (userId) => {
    return {
        type:DeletePostUserVar,userId
    }
}

export {PostReducer,SetPostUser,DeletePost}