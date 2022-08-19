import React from 'react';
import Button from '@mui/material/Button';
import db, { auth, provider, signInWithPopup } from '../firebase';
import reducer, { actionTypes} from '../reducer';
import { useStateValue } from '../StateProvider';

const Login = () => {
    const [state, dispatch] = useStateValue()

    function signIn() {
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result.user)
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png?20200820101156" alt="" />

                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
        </div>
    );
}

export default Login;
