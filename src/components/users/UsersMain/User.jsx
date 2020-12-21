import React from 'react'
import u from "../UsersCss/users.module.css";
import {PhotoURL} from "../../help/help";
import {NavLink} from "react-router-dom";

let User = (props) => {

    let m = props.user
    return <div className={u.main}>
        <div>
            <div>
                <NavLink to={'/profile/' + m.id}>
                    <img className={u.image} src={PhotoURL(m)} alt=""/>
                </NavLink>
            </div>
            <div className={u.follow}>
                {m.followed ? <button className={u.true} disabled={props.IsProcessFollow.some(id => id === m.id)} onClick={() => {
                        props.ClickUnFollow(m.id , props.GetUnFollow(m.id))
                    }} >Unfollow</button> :
                    <button className={u.false} disabled={props.IsProcessFollow.some(id => id === m.id)} onClick={() => {
                        props.ClickFollow(m.id , props.GetFollow(m.id))
                    }}>Follow</button>}
            </div>
        </div>
        <div className={u.message}>
            <div className={u.AboutName}>
                <div className={u.fullname}>{m.name}</div>
            </div>

            <div className={u.AboutPlace}>

            </div>
        </div>
    </div>

}

export default User;