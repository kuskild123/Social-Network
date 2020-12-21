import React from 'react';
import p from "../ProfileCss/profile.module.css";
let AddPost = (props) => {
    return <div>
        {[...props.Post]
            .map(m=> {
            return <div id={m.id} className={p.allcomment}>
                <div className={p.inside}>
                    <div className={p.avatar}>
                        <img src={m.img} alt=""/>

                        <div className={p.fullName}>{m.name}</div>
                    </div>
                    <div className={p.comment}>
                        <p style={{fontStyle:'italic'}}>{m.comment}</p>
                        <div style={{display:'flex',textAlign:'center'}}>
                            <div className={p.heart}>&#10084;</div>
                            <div className={p.likesCount}>{m.likesCount}</div>
                        </div>
                    </div>
                </div>
            </div>
        })}

    </div>
}

export default AddPost