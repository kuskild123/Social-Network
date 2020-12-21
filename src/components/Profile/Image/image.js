import React from 'react';
import p from "../ProfileCss/posts.module.css";
import canada from '../../../IMAGES/Canada.jpg'
function Img (props) {
    return (
        <div className={p.image}>
            <img src={canada}/>
            <div className={p.text}>
            </div>
        </div>
    )
}

export {Img};
