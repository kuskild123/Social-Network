import React from 'react';
const MyContacts = (props) => {
    return <div><b>Contacts </b>
        {Object.keys(props.Prof.contacts).map(key => {
            return <MyContactsMap key={key} ContactTitle={key} ContactValue={props.Prof.contacts[key]}/>
        })}</div>

}
const MyContactsMap = (props) => {

    return <>
            <div><b>{props.ContactTitle + " :"}</b> {props.ContactValue ? props.ContactValue : 'none'}</div>
        </>

}
export default MyContacts;
