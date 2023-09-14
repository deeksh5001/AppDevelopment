import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/app.css'
import logo from '../assets/images/logo3.png'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
const Login = () => {
    const[login,setLogin]=useState({
        email:'',
        password:''
    })
    const nav=useNavigate();
    const handleRoute=(e)=>{
        nav('/register')
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`Email :${login.email}`)
        console.log(`Password :${login.password}`)
        toast.success('Logged in successfully!')
        
    }
  return (
    <div className='body1'>
        <div><Toaster/></div>
        <div className='main d-flex-c'>
            <img src={logo} style={{width:"32%"}}/><br/>
            <h2>Login to the website!</h2>
            <form onSubmit={handleSubmit}>
                <div className='auth-form d-flex-c'>
                    <input type='email' name='email' id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
                    <input type='password' name='pass' id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
                    <button type='submit' align='center' className='auth-btn'>Login</button>
                </div>
            <br/>
            <b><p align='center' onClick={handleRoute}>New User? Sign up now!</p></b>
            <br/>
            </form>
        </div>
    </div>
  )
}

export default Login
