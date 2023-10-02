import { setHeaderToken } from "./setHeaderToken"

export const checkAuthToken = () => {
    let token = localStorage.getItem('JWT')

    if (token) {
        // set headers
        setHeaderToken(token)
        
        // token exists, return true
        console.log('!@-------token-------@!')
        console.log('True')
        return true
    } else {
        //delete headers
        setHeaderToken()

        //token doesn't exist, return false
        console.log('!@-------token-------@!')
        console.log('False')
        return false
    }
}