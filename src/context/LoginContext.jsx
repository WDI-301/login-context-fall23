import { createContext, useReducer } from "react";

//export for consuming context
// const [state, dispatch] = useReducer(reducer, initialState)
// make 2 contexts for the reducer,
// 1) for the state
export const LoginContext = createContext(null)
// 2) for the dispatch
export const LoginDispatchContext = createContext(null)

//initial State for the reducer
const initalState = {
    username: '',
    // password: '',
    message: 'Please Login'
}

//export for providing the context, which will contain our reducer for the values
export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initalState)

    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

// reducer for the above useReducer hook
const loginReducer = (state, action) => {
    switch (action.type) {
        case 'submit':
            return action.payload
        case 'LOGIN':
            return {
                // ...action.payload,
                username: action.payload.username,
                // message: 'Welcome back ' + action.payload.username
                message: action.payload.message
            }
        case 'ERROR':
            console.log(action.payload)
            return {
                ...state,
                ...action.payload
            }
        
        //REGISTER
        //sets state with the payload user and message
        case 'REGISTER':
            return {
                ...action.payload,
                message: 'Thank for registering ' + action.payload.username
            }
        case 'LOGOUT':
            return initalState
        default:
            alert("hit default")
            state;
    }
}