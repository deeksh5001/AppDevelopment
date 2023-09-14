import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/app.css'
import logo from '../assets/images/logo3.png'


const Register = () => {
    const[login,setLogin]=useState({
        email:'',
        password:''
    })
    const nav=useNavigate();
    const handleRoute=(e)=>{
        nav('/')
    }
    const handleChange=(e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`Email :${login.email}`)
        console.log(`Password :${login.password}`)
        nav('/')

    }
  return (
    <div className='body1'>
        
        <div className='main d-flex-c'>
            <img src={logo} style={{width:"30%"}}/><br/>
            <h2>Create your new account</h2>
            <form onSubmit={handleSubmit}>
                <div className='auth-form d-flex-c'>
                    <input type='email' name='email' id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
                    <input type='username' name='username' id="username" className='input-field' placeholder='Username' onChange={handleChange} required/>
                    <input type='password' name='pass' id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
                    <button type='submit' align='center' className='auth-btn'>Sign Up</button>
                </div>
            <br/>
            <b><p align='center' onClick={handleRoute}>Already have an account? Log in!</p></b>
            <br/>
            </form>
        </div>
    </div>
  )
}

export default Register
