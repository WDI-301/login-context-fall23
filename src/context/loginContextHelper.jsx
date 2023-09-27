import Axios from '../lib/Axios' 

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
            type: "submit",
            payload: response.data
        })
    } 
    catch (error) {
        // console.log('!@-------error-------@!')
        // console.log(error)
        dispatch({
            type: "ERROR",
            payload: error.response.data
        })
    }

}

//registerUser