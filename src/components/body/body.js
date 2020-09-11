import React from 'react';
import {Posts} from './posts/posts'
import p from "./posts/posts.module.css";
import {Img,Mypost} from "./image";
import img from "./image.js";
import {store} from "../../redux/store";


    function Body (props) {
    let Likes = props.LikesData.map(like=><Posts likes={like.likes} author={like.author} text={like.text} src={like.src}></Posts>);
    let ImageCenter = props.ImageCenterData.map(img=> <Img text={img.text} ImageSrc={img.src}></Img>)
    return(
        <div>
            { ImageCenter }
            <Mypost dispatch={props.dispatch} NewPostValue={props.NewPostValue} ></Mypost>

            { Likes }
        </div>
    )
}
export {Body};