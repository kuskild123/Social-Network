import React, {useState} from 'react';
import d from './Home.module.css'
import HomeHelloForm from "../HomeElements/HomeForm/HomeHelloForm";

const Home = (props) => {
    const [isYourName,setIsYourName] = useState("")
    const yourName = (name) => {
        setIsYourName(name)
    }
    return(
        <div className={d.diana}>
            <p>Happy New Year!</p>
            {!isYourName && <HomeHelloForm yourName={yourName}/>
            }
            {isYourName && <div><p>Здравствуйте,{isYourName}!</p></div>}
        </div>
    )
}
export default Home