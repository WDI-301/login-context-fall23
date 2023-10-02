import Axios from "./Axios"

// take in a token and set the headers to the Bearer Token
export const setHeaderToken  = token => {
    if (token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete Axios.defaults.headers.common['Authorization']
    }
}