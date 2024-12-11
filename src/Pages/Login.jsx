import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css'

const Login = ({setToken,setLoginned,loginned,focus,setFocus}) => {
    const navigate=useNavigate();

    
    const [errors,setErrors]=useState('');
    const [formData,setFomrData]=useState({
        email:'',
        password:'',
    });
    useEffect(() => {
        if (loginned) {
          navigate('/homepage');
        }
      }, [loginned]);

    const handleChange=(e)=>{
        setFomrData((prevFormData)=>{
            return {
                ...prevFormData,
                [e.target.name]:e.target.value,
            }
        })
    }
const handleSubmit= async (e)=>{
    e.preventDefault();
    axios 
    .post(
        `https://bdtriolocrhhmswxpyqk.supabase.co/auth/v1/token?grant_type=password`,{
            email:formData.email,
            password:formData.password
        },
        {
            headers:{
                apiKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdHJpb2xvY3JoaG1zd3hweXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NjQxMTEsImV4cCI6MjA0OTI0MDExMX0.1NfdwGGROKpuwRzwsDUf35IDMmpEq_Y9ljvtsgHbUM4',
          Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdHJpb2xvY3JoaG1zd3hweXFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzY2NDExMSwiZXhwIjoyMDQ5MjQwMTExfQ.wR-8L5Pj15FNeV4d0dTr2UNsjy817nPF31yvxwbrsrU`
            },
        }
    ).then((res)=>{
        setToken(res?.data)
        console.log(res)
        setLoginned(true);
        navigate('/homepage')
    }).catch((err)=>setErrors(err.response.data.msg));


}
  return (
    <div className='formPage' >
        <form className={focus?'formContainer focus':'formContainer'}>
      
        <input type="email" 
        placeholder='email' 
        aria-label="Enter your email"
        name="email" 
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        onChange={handleChange} />
 
 <input type="password" 
 onFocus={()=>setFocus(true)}
 onBlur={()=>setFocus(false)}
 name="password" 
 placeholder='password' 
 onChange={handleChange}/>
 <button type="submit" onClick={handleSubmit}>Login</button>
 {errors&&<p style={{color:'red'}}>{errors}</p>}
 <p>Do you have not account? <Link to={'/register'}>Sign Up</Link></p>
</form>

    </div>
  )
}

export default Login