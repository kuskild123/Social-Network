import React from 'react';
import d from './dialogItem.module.css';
import {NavLink} from "react-router-dom";

function Dial (props){
   return(
       <div className={d.dialogs}>
           <div className={d.names}>
               <div>
                   <NavLink activeClassName={d.NameActive} to={"/dialogs/" + props.id}>{props.name}</NavLink>
               </div>
            <div className={d.line}></div>
           </div>



       </div>

   )
}
function Message(props) {
    return (

            <div className={d.messages}>
                <div>{props.message1}</div>
            </div>
    )
}
function MessageTwo(props){
    return(
        <div className={d.messages2}>
            {props.message2}
        </div>
    )
}

export {Dial,Message,MessageTwo};