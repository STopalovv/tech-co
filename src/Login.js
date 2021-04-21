import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import firebase from "firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    var provider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = e => {
        firebase.auth()
            .signInWithPopup(provider)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));

            console.log(history);
    }


    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message));

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully registered
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login__logo"
                    src= "https://static.wixstatic.com/media/f49a4f_e836e969419b4cc79f95e77fb3d95475~mv2.png"
                    alt= ""
                />
            </Link>

            <div className="login__container">
                <h1>Здравейте</h1>
                <form>
                    <h5>Моля въведете имейл</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Парола</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" className="login__signInButton" onClick={signIn} >Продължи</button>
                </form>

                <p className="login__paragraph">Нямаш акаунт? Можеш да създадеш тук:</p>
                <button type="submit" className="login__registerButton" onClick={register} >Регистрация</button>

                <hr/>

                <button type="submit" className="login__googleButton" onClick={googleSignIn}>Google</button>


            </div>
        </div>
    )
}

export default Login
