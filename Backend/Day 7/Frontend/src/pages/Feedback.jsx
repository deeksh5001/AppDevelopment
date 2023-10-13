import React from "react";
import {Toaster,toast} from 'react-hot-toast'
import Topbar1 from "../components/Topbar1";
import img from '../assets/images/communicate.gif'
const Feedback=()=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        toast.promise(
            new Promise((resolve) => {
              // Simulate some asynchronous operation
              setTimeout(() => {
                resolve('Sent successfully!');
              }, 1000); // Adjust the delay as needed
            }),
            {
              position:'bottom-right',
              loading: 'Sending...',
              success: 'Sent successfully!',
              error: 'An error occurred while sending your feedback.',
            }
          )
    
    }
    return(
        <div className='body1'>
        <div><Toaster/></div>
        <Topbar1/>
        <div className='main d-flex-c'>
            <br/>
           <img src={img} style={{width:"22%"}}/>
            <h3>Feedback</h3>
            <form onSubmit={handleSubmit}>
                <div className='auth-form d-flex-c'>
                    <input type='text' name='Name' id="name" className='input-field' placeholder='Name'  autoFocus required/>
                    <input type='email' name='email' id="email" className='input-field' placeholder='Email'   required/>
                    
                    <input type='text' name='message' id="message" className='input-field' placeholder='Message' style={{height:"10vh"}} required/>
                    <button type='submit' align='center' className='auth-btn'>Submit</button>
                </div>
            
            
            <br/>
            </form>
        </div>
    </div>
    )
}
export default Feedback