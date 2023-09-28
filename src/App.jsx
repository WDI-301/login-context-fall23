import { useState } from 'react'
import './App.css'

import Home from './components/Home';
import Login from './components/Login/Login';

import { ThemeContext } from "./context/ThemeContext";
import { LoginProvider } from './context/LoginContext'
import { AuthProvider } from './context/AuthContext';

function App() {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div>
      <ThemeContext.Provider value={
        {theme, setTheme, changeTheme}
        }>
          <AuthProvider>
            {/* LoginProvider does not need value, because the actual is in the context file */}
            <LoginProvider>
                <Home />
                <Login />
            </LoginProvider>
          </AuthProvider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
