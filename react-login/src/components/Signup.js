import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exist")
                    }
                    else if (res.data = "notexist") {
                        history('/home',{state:{id:email}})
                    }
                })
                .catch((e) => {
                    alert('Worng Details')
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='app'>
            <h1>Signup Page</h1>
            <form action='POST'>
                <input type='email' onChange={(e) => setEmail(e.target.value)}
                    placeholder='email' /><br />
                <input type='password' onChange={(e) => setPassword(e.target.value)}
                    placeholder='password' /><br />
                <input type='submit' onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to='/'>Login</Link>
        </div>
    )
}

export default Signup;