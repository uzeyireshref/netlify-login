import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({token,setLoginned}) => {
    const navigate=useNavigate();
    const handleLogOut=()=>{
   sessionStorage.removeItem('token');
   setLoginned(false)

   navigate('/')
   
    }
    console.log(token)
  return (
    <div className='formPage'>
      <div className="formContainer">
        <h1>Welcome back <span style={{color:'blue'}}>{token?.user.user_metadata.email}</span></h1>
        <button onClick={handleLogOut}>Log out</button>
        </div> 
    </div>
  )
}

export default Home

