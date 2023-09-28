import Axios from '../lib/Axios' 

const errorHandler = async (dispatch, error) => {
    dispatch({
        type: "ERROR",
        payload: error.response.data
    })
}

export const submitLogin = async (dispatch, value) => {
    let response = await Axios.post('/users/login-test', value)
    // console.log(response);

    dispatch({
        type: "submit",
        payload: response.data
    })
}

export const fetchLogin = async (dispatch, value, authDispatch) => {
    try {

        let response = await Axios.post('/users/login', value)
        console.log(response);

        // save the jwt token to local storage (local to browser)
        localStorage.setItem('JWT', response.data.token)
        
        authDispatch({
            type: "AUTH_SUCCESS"
        })

        dispatch({
            type: "LOGIN",
            payload: response.data
        })
    } 
    catch (error) {
        errorHandler(dispatch, error)
    }

}

//registerUser
export const registerUser = async (dispatch, userData) => {
    try {
        let response = await Axios.post('/users/register', userData)

        dispatch({
            type: 'REGISTER',
            payload: response.data
        })
    } catch (error) {
        errorHandler(dispatch, error)
    }
}

export const logout = (dispatch, authDispatch) => {
    try {
        localStorage.removeItem('JWT')
        authDispatch({type: 'AUTH_FAILURE'})
        dispatch({type: 'LOGOUT'})
    } catch (error) {
        errorHandler(dispatch, error)
    }
}