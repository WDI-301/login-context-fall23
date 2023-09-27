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
    password: '',
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
        case 'ERROR':
            console.log(action.payload)
            return {
                ...state,
                ...action.payload
                
            }
        default:
            alert("hit default")
            state;
    }
}