import React, {Suspense} from 'react';
import Loader from "../Preloader/Loader";


const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Loader/>}><Component {...props}></Component></Suspense>
    }
}
export default WithSuspense