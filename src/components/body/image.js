import React from 'react';
import img from './image.module.css';
import p from "./posts/posts.module.css";
import {AddNewPostCreate, NewPostCreate} from "../../redux/messagePageReducer";

function Img (props) {
    return (
        <div className={p.image}>
            <img src={props.ImageSrc}/>
            <div className={p.text}>
        <p >{props.text}</p>
            </div>
        </div>
    )
}
function Mypost(props){
    let NewPostElement = React.createRef();
    let AddNewPost = ()=>{
        let text = NewPostElement.current.value;
        let action = AddNewPostCreate(text);
        props.dispatch( action );
    };
    let NewPost = ()=>{
    let action = NewPostCreate();
        props.dispatch( action )
    };

    return(
        <div className={img.post}>
            <h2>My post</h2>
            <div>
                <textarea ref={NewPostElement} value={props.NewPostValue} onChange={AddNewPost} placeholder='Введите пост..'/>
            </div>
            <div>
                <button onClick={ NewPost }>Отправить</button>
            </div>
        </div>
    )
}
export {Img,Mypost};
