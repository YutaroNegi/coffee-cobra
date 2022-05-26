import React, {useState} from "react";
import { Input, Button} from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import {toastSucess, toastError} from './Toaster'
import {loginAction} from '../actions/loginAction'

function LoginControl(){
    let status = useSelector(state => state)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleUsername(e){
        setUsername(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

    async function handleLoginClick(){
        const body = {username, password}

        if(body.username === '' || body.password === '') return

        setLoading(true)

        const config = {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
          }

        let response = await fetch('/api/login', config)
        let data = await response.json()
        data.recipes = JSON.parse(data.recipes)
        
        if(data.login === 1){
            toastSucess('You are now logged in')
            setLoading(false)
            dispatch(loginAction(data))
        }else{
            toastError('Wrong username or password ')
            dispatch(loginAction(data))
            setLoading(false)
        }
    }

    async function handleCreateClick(){
        const body = {username, password}

        if(body.username === '' || body.password === '') return

        setLoading(true)

        const config = {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body)
          }

        let response = await fetch('/api/createAccount', config)
        let data = await response.json()
        data.recipes = JSON.parse(data.recipes)
        console.log(data);

        
        if(data.login === 1){
            toastSucess('You are now logged in')
            setLoading(false)
            dispatch(loginAction(data))
        }else{
            toastError('Wrong username or password ')
            dispatch(loginAction(data))
            setLoading(false)
        }
    }

    const style = {
        'marginTop': '10px'
    }

    return(
            <div className={`calcDiv ${status.login === 1 ? 'hide' : ''}`} >
                <div className="inputBox">
                    <span className="strongWord">Username</span>
                    <Input onChange={handleUsername} type="text" className="inputStyle" placeholder='Username'/>
                </div>

                <div className="inputBox">
                    <span className="strongWord">Password</span>
                    <Input onChange={handlePassword} type="password" className="inputStyle" placeholder='Password'/>
                    
                </div>

                <Button loading={loading} onClick={handleLoginClick} className='loginBtn' primary>Login</Button>
                <span className="strongWord" style={style}>OR</span>
                <Button loading={loading} onClick={handleCreateClick} className='loginBtn' primary>Create Account</Button>

            </div>
    )
}

export default LoginControl