import tayler from '../../../IMAGES/tayler.png';
import manson from '../../../IMAGES/marilynManson.jpg'
import volf from '../../../IMAGES/volf.png'

const SetPostUserVar = 'SET-POST-USER'
const DeletePostUserVar = 'DELETE-POST-USER'
const Like = 'LIKE'
const DisLike = 'DISLIKE'
let initialState = {
    Posts :[
    {id:1,name:'Tyler',comment:'Люди — рабы своих вещей.',img:tayler,likesCount:666,likeFetch:false},
    {id:2,name:'Manson',comment:'Rock lalala',img:manson,likesCount:888,likeFetch:false}
]
}


const PostReducer = (state=initialState,action) => {
    switch (action.type) {
        case SetPostUserVar :
            return{
                ...state,
                Posts:[...state.Posts,{id:state.Posts.length + 1,name:'Denis',comment:action.postComment,img:volf,likesCount:666}]
            }
        case DeletePostUserVar :
            return {
                ...state,
                Posts: state.Posts.filter(p => p.id != action.userId)
            }
        case Like:
            return {
                Posts:state.Posts.map( (p) => {
                if(p.id === action.PostId) {
                   return {...p,likesCount: p.likesCount+1,likeFetch:true }
                } else return p
            })
            }
        case DisLike:
            return {
                Posts:state.Posts.map(p => {
                    if(p.id === action.PostId ) {
                        return {...p,likesCount:p.likesCount-1,likeFetch:false}
                    } else return p
                })
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
let LikePost = (PostId) => {
    return{
        type:Like,PostId
    }
}
let DisLikePost = (PostId) => {
    return {
        type:DisLike,PostId
    }
}

export {PostReducer,SetPostUser,DeletePost,LikePost,DisLikePost}