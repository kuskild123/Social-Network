import React from 'react';
import styles from './FormControl.module.css'
const Element = (Element) => ({input,meta,...props}) => {
  let MetaError = meta.touched && meta.error
    return <div className={styles.FormControl + " " + (MetaError ? styles.error : null)}>

        <Element {...input} {...props}></Element>


        {MetaError && <span>{meta.error}</span>}

    </div>
}
export default Element;
