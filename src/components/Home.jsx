import React, {useState, useContext} from 'react'
import "./Home.css"
import reactLogo from '/logos/react.svg'
import viteLogo from '/logos/vite.svg'
import {ThemeContext} from '../context/ThemeContext'
import { LoginContext } from '../context/LoginContext'


const Home = () => {
    const [count, setCount] = useState(0)

    const {theme, setTheme, changeTheme} = useContext(ThemeContext)
    const login = useContext(LoginContext)

  return (
    <>
    <div id='home' className={theme}>
      
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  
    <h2>Welcome {login.username}</h2>
    <h3>Message: {login.message}</h3>
    <button onClick={changeTheme}>Change Theme: {theme}</button>

  </>
  )
}

export default Home