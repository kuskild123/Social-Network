import React from 'react'
import u from "../UsersCss/users.module.css";
import {Paginator} from "../../help/paginator";
import User from "./User";

let Users = React.memo (props => {
    return <div>
        <div className={u.spans}>
            <div>

                <Paginator setCurrentPage={props.setPage} PortionSize={20} onPageChanged={props.onPageChanged} CurrentValue={props.CurrentValue}
                           TotalCount={props.TotalCount} PageSize={props.PageSize}></Paginator>
            </div>
        </div>
        {
            props.UserData.map(m =>
                <User {...props} key={m.id} user={m}></User>
            )
        }
        <button className={u.btn}>Show More...</button>
    </div>

})

export default Users;