import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'

const Login = (props) => {
    const clientId = "152859588313-h2t33h9tdep24sjqdboao4dqul0511p0.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {

        // console.log(response)
        axios.post('http://localhost:8000/user', { idToken: response.tokenId }
        ).then(response => {
            // console.log(response)
            props.response(response)
        })
            .catch(err => { console.log(err) })
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login