import React from 'react';
import styles from './FormControl.module.css'
import cn from 'classnames'
const Element = (Element) => ({input,meta,...props}) => {
  let MetaError = meta.touched && meta.error
    return <div className={cn(styles.FormControl,{[styles.error] : MetaError})}>

        <Element {...input} {...props}/>

        {MetaError && <span>{meta.error}</span>}

    </div>
}
export let Input = Element('input')
export let TextArea = Element('textarea')

export default Element;
