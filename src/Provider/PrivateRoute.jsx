import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)

    // if-> user exist return children 
    if(loading){
        return <Loading></Loading>
            
        
    }

    if(user && user?.email){
        return children
    }
//  else->  navigate -->Login
    return <Navigate to="/auth/login"></Navigate>
};

export default PrivateRoute;