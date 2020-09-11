import React from 'react';
import m from './message.module.css';
import {Body} from "./body";
import {store} from "../../redux/store";
function PageMessage(props) {

    return (
        <div>
            <Body dispatch={props.dispatch} NewPostValue={props.NewPostValue} LikesData={props.LikesData} ImageCenterData={props.ImageCenterData}></Body>
        </div>
    )
}
export {PageMessage};