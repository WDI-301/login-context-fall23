
export const checkAuthToken = () => {
    let token = localStorage.getItem('JWT')

    if (token) {

        // token exists, return true
        console.log('!@-------token-------@!')
        console.log('True')
        return true
    } else {
        //token doesn't exist, return false
        console.log('!@-------token-------@!')
        console.log('False')
        return false
    }
}