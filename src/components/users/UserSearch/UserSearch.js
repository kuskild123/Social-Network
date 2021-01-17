import React, {useState} from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import s from '../../../IMAGES/SearchIcon.png'
import u from '../UsersCss/userC.module.css'
import {maxLengthCreator, required} from "../../help/validators/validators";
const maxLength30 = maxLengthCreator(30)
const UserSearchForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div style={{display: 'flex'}}>
            <Field name="Term" placeholder="Поиск.." component={Input} validate={[required,maxLength30]}/>
            <button className={u.search}><img style={{width:'15px',height:'15px'}} src={s} alt="search"/></button>
        </div>
    </form>
}

const UserSearchWithReduxForm = reduxForm({form:'SearchForm'})(UserSearchForm)

const UserSearch = (props) => {
    let [results,setResults] = useState('')
    const SumbitFunc = async (data) => {
        await props.setTerm(data.Term)
        setResults(true)
    }
    const DisableSearch = () => {
        props.setTerm("")
        setResults('')
    }
    return <>
        <div style={{display:'flex'}}>
        <UserSearchWithReduxForm initialValues={props.Term} onSubmit={SumbitFunc}/>
        {props.Term.length ? <span onClick={DisableSearch}>&#10005;</span> : null}
        </div>
        {results? <b style={{margin:'10px'}}>Результаты по запросу {props.Term} </b> : null}
    </>

}
export default UserSearch;