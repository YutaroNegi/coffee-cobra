import React from 'react'
import { ToastContainer } from 'react-toastify';
import LoginControl from './LoginControl';
import Account from './Account';

function Login(){
    return(
        <div>
            <LoginControl/>
            <Account/>
            <ToastContainer/>
        </div>
    )
}

export default Login