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

export const fetchLogin = async (dispatch, value) => {
    try {

        let response = await Axios.post('/users/login', value)
        console.log(response);
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