import React from 'react';
import Button from '@mui/material/Button';
import db, { auth, provider } from '../firebase'

const Login = () => {
    function signIn() {
        auth.signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        }).catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="" />

                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Signin
            </Button>
        </div>
    );
}

export default Login;
