import React, { useState, useContext, useEffect } from 'react'
import "./Login.css"

import { ThemeContext } from '../../context/ThemeContext'
import {LoginContext, LoginDispatchContext} from '../../context/LoginContext'
import { fetchLogin, registerUser, submitLogin } from '../../context/loginContextHelper'
import { checkAuthToken } from '../../lib/checkAuthToken'

const Login = () => {
const [value, setValue] = useState({
  username: '',
  password: ''
})

const {theme} = useContext(ThemeContext)

const login = useContext(LoginContext)
const dispatch = useContext(LoginDispatchContext)

// on page load, check for a token
// if token exists, log in user with the backend and then set state
useEffect(() => {
  const tokenLogin = async () => {
      if(checkAuthToken()) {
        // authorize token with backend

        // set state for login
        // dispatch({
        //   type: 'LOGIN'
        // })
      }
    } 
  tokenLogin()
}, [])


const onChangeHandler = event => {
  setValue({
    ...value,
    [event.target.name]: event.target.value
  })
}

  return (
    <div id='login' className={theme}>
      {
        login.username === '' ?
        <>
          {/* 
          Username: {login.username} 
          <br/> */}
          {/* Password: {login.password} */}
          {/* <br /> */}
          <label htmlFor='username'>Username: </label>
          <input 
            id='username'
            type='text'
            name='username'
            value={value.username}
            onChange={onChangeHandler}
          />
          <br />
          <label htmlFor='password'>Password: </label>
          <input
            id='password' 
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
          <button onClick={() => {
            fetchLogin(dispatch, value)
            setValue({
              username: value.username,
              password: ''
            })
            }}>Login</button>
          <button onClick={() => registerUser(dispatch, value)}>Register</button>
          {/* // Welcome {Username}
          // Message: {Username} Successfully Registered */}
        </>
        : 
        <>
          <button onClick={() => {
            dispatch({type: 'LOGOUT'})
            //clear out input
            // setValue({
            //   username: '',
            //   password: ''
            // })
           }}>Logout</button>
        </>
      }
    </div>

    

  )
}

export default Login