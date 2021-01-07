import React from 'react';
import s from '../UsersCss/users.module.css'

const PartOfPortions = (props) => {
    return (
        <span className={s.point} onClick={ () => {props.setPortion(props.pointPortion)} }>{props.pointCount}</span>
    )
}
export default PartOfPortions
