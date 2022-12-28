import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Header from './header';
import './login.css'
let Login = () =>{
    let [state,setstate] = useState({email:"",password:""})
    let ChangeHandler = (event) =>{
       setstate({
        ...state,
        [event.target.name]:event.target.value
       })

    }
   let SubmitHandler = (e)=>{
    e.preventDefault();
    console.log(state)
}
    return(
        <div>
            <pre>{JSON.stringify(state)}</pre>
            <Header/>
            <div className='login-container'>
                <div>
                   <h1 className='heading'>Login</h1>
                </div>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label htmlFor="">Email</label><br />
                    <input type="email" name='email' onChange={ChangeHandler} />
                </div>
                <div>
                    <label htmlFor="">Password</label><br />
                    <input type="password" name='password' onChange={ChangeHandler} />
                </div>
                <div>
                    <input type="checkbox" />
                    <h4 className='check'>Remember me</h4>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>

            </div>
            <div className='child-div'>
                <h5>Hava an account? <Link to="/register">SignUp</Link></h5>
            </div>
        </div>
    )
}
export default Login