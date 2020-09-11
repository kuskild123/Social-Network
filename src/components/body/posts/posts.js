import React from 'react';
import p from './posts.module.css';
function Posts (props){
    return(
        <div classname={p.post}>

            <div className={p.allcomment}>
                <div className={p.avatar}>
                    <img src={props.src} alt=""/>
                    <p>{props.author}</p>
                </div>
                <div className={p.comment}>
                    <p>{props.text}</p>
                    <div className={p.like}>
                        <img src="https://e.unicode-table.com/orig/27/1e06f228074c5021ac9ed7f536f6ac.png" alt=""/>
                        <div className={p.likep}>{props.likes}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Posts}