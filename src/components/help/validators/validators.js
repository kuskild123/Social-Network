import React from 'react';
const required = value => {
    if(value) return undefined;
    return <span style={{fontWeight:600,fontSize:'17px',cursor:'pointer'}} title={"Field is required"}>!</span>
}

const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength)return <span title={`Max length is ${maxLength} symbols`}>!</span>
    return undefined;
}

export {required,maxLengthCreator}