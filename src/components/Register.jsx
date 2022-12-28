import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
let Register = () =>{
    let [state,setstate] = useState({email:"",password:"",confirmpassword:""})
    let changeHandler = (event) =>{
        setstate({
            ...state,
            [event.target.name]:event.target.value
        })
    }
    let submitHandler = (e) =>{
        e.preventDefault();
        validate(state)
        console.log(state)
}
    let validate = (values) => {
        if (!values.email) {
            alert('email is required')
            return 0
        }else if (!values.password) {
            alert('password is required')
            return 0
        } else if (values.password.length < 8) {
            alert("Password must be more than 8 characters");
            return 0
        } else if (values.password.length > 12) {
            alert("Password cannot exceed more than 12 characters");
            return 0
        }
        if (!values.confirmpassword) {
            alert('confirmpassword is required')
            return 0
        }
        else if (values.password !== values.confirmpassword) {
            alert('password are not matching')
            return 0
        }
        return 1
    }
    return(
        <div>
            <pre>{JSON.stringify(state)}</pre>
        <div className='login-container'>
            <div>
               <h1 className='heading'>Register</h1>
            </div>
        <form  onSubmit={submitHandler}>
            <div>
                <label htmlFor="">Email</label><br />
                <input type="email" name='email' onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor="">Password</label><br />
                <input type="password" name='password'onChange={changeHandler} />
            </div>
            <div>
            <label htmlFor="">ConfirmPassword</label><br />
                <input type="password" name='confirmpassword' onChange={changeHandler}/>
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>

        </div>
        <div className='child-div'>
            <h5>Have an account? <Link to="/">SignIn</Link></h5>
        </div>
    </div>
    )
}
export default Register;