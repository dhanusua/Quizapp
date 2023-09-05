import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Welcome.css'
const Welcomepage =()=>{
    const[username,setusername] =useState('')
    const navigate =useNavigate();
    const handler =() =>{
        var name = document.getElementById("name")
        
        if (name.value=== null || name.value===''){
            alert("Enter Your name")
            return false
        }
        else{
            navigate('/quiz' ,{state:{username:username}})
        }
      
    }
   
        return (
            <div className='welcome-container' >
             Enter your name  
            <input type='text'  id="name" value={username} onChange={(e)=>setusername(e.target.value) } ></input>
            <button onClick={()=>handler()}> Enter Quiz</button> </div>
            
        );
    }


export default Welcomepage;