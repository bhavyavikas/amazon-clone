import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = e => {
        e.preventDefault()
        // some sign in code
        try {
            signInWithEmailAndPassword(auth, email, password)
            history.push('/');
        }
        catch (error) {
            alert(error.message);
        }
    }

    const register = async () => {
        // e.preventDefault()
        // some register code
        try {
            createUserWithEmailAndPassword(auth, email, password)
            history.push('/');
        }
        catch (error) {
            alert(error.message);
        }

    }


    return (
        <div className="login">
            <Link to='/'>
                <img className='login_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Amazon_logo.jpg/1200px-Amazon_logo.jpg"
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => { setEmail(e.target.value) }}

                    />

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => { setPassword(e.target.value) }}
                    />

                    <button type="submit" onClick={signIn} className='login_signInButton'>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>

                <button onClick={register} className='login_registerButton'>Create your account</button>
            </div>
        </div>
    );
}


export default Login;