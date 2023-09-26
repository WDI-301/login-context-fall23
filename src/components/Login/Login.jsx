import React, { useState, useContext } from 'react'
import "./Login.css"

import { ThemeContext } from '../../context/ThemeContext'
import {LoginContext, LoginDispatchContext} from '../../context/LoginContext'
import { fetchLogin, submitLogin } from '../../context/loginContextHelper'

const Login = () => {
const [value, setValue] = useState({
  username: '',
  password: ''
})


const {theme} = useContext(ThemeContext)

const login = useContext(LoginContext)
const dispatch = useContext(LoginDispatchContext)


const onChangeHandler = event => {
  setValue({
    ...value,
    [event.target.name]: event.target.value
  })
}

  return (
    <div id='login' className={theme}>

    Username: {login.username} 
    <br/>
    Password: {login.password}
    <br />
    <label for='username'>Username: </label>
    <input 
      type='text'
      name='username'
      value={value.username}
      onChange={onChangeHandler}
    />
    <br />
    <label for='password'>Password: </label>
    <input 
      type='text'
      name='password'
      value={value.password}
      onChange={onChangeHandler}
    />
    <br />
    {/* <button onClick={() => dispatch({
      type: "submit",
      payload: value
    })}>Submit</button> */}
    {/* <button onClick={() => submitLogin(dispatch, value)}>Submit</button> */}
    <button onClick={() => fetchLogin(dispatch, value)}>Submit</button>
    </div>

  )
}

export default Login