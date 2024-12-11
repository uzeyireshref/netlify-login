import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = ({setToken,focus,setFocus}) => {
    const navigate=useNavigate();
    const [errors,setErrors]=useState({});
    const [formData,setFormData]=useState({
        fullName:'',
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios
        .post(`https://bdtriolocrhhmswxpyqk.supabase.co/auth/v1/signup`,{
            email:formData.email,
            password:formData.password,
            options:{
                data:{
                    full_name:formData.fullName,
                },
            },
        },
    {
        headers:{
            apiKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdHJpb2xvY3JoaG1zd3hweXFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NjQxMTEsImV4cCI6MjA0OTI0MDExMX0.1NfdwGGROKpuwRzwsDUf35IDMmpEq_Y9ljvtsgHbUM4',
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdHJpb2xvY3JoaG1zd3hweXFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzY2NDExMSwiZXhwIjoyMDQ5MjQwMTExfQ.wR-8L5Pj15FNeV4d0dTr2UNsjy817nPF31yvxwbrsrU`
        },
    }
)
.then((res)=>{console.log(res.data)
    alert('Check your email for verification');
    setFormData({ fullName: '', email: '', password: '' });
    setErrors({});
    navigate('/');
    
}).catch((err)=>setErrors({msg:err.response.data.msg}));

    }

  return (
    <div className='formPage'>
        <form className={focus?'formContainer focus':'formContainer'}>
            <input type="text" 
            name="fullName" 
            onFocus={()=>setFocus(true)}
    onBlur={()=>setFocus(false)}
            placeholder='Fullname'
onChange={handleChange}
            />
           <input type="email"
           onFocus={()=>setFocus(true)}
           onBlur={()=>setFocus(false)}
            name="email" 
            onChange={handleChange}
            placeholder='Email'
            />
           <input type="password" 
           onFocus={()=>setFocus(true)}
           onBlur={()=>setFocus(false)}
           name="password" 
           onChange={handleChange}
           placeholder='Password'
            />
            <button onClick={handleSubmit} type="submit" >Sign Up</button>
            {errors.msg&&<p style={{color:'red'}}>{errors.msg}</p>}
            <p>Do you have a account? <Link to={'/'}>Login</Link></p>

        </form>
    </div>
  )
}

export default Register