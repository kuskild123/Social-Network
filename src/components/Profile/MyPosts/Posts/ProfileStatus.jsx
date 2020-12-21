import React from 'react';
import p from '../../ProfileCss/profile.module.css';


class ProfileStatus extends React.Component {

    
    render() {
        return <>

           
                <div>
                   <span className={p.Status}>{!this.props.status? "empty": this.props.status}</span>
                </div>

            
        </>
        
    }
}
export default ProfileStatus;