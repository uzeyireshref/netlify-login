import { useEffect, useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import ReactDOM from 'react-dom/client'
import Register from './Pages/Register';
import Home from './Pages/Home';
import { Navigate } from 'react-router-dom';
import Notfound from './Pages/Notfound';
import './styles/style.css'
function App() {
  const [token,setToken]=useState(false);
  const [loginned,setLoginned]=useState(false)
  const [focus,setFocus]=useState(false)
  

useEffect(()=>{
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))

  }
},[token])


useEffect(() => {
  const savedToken = sessionStorage.getItem('token');
  if (savedToken) {
      setToken(JSON.parse(savedToken));
      setLoginned(true);
  }
}, []);
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Login  setToken={setToken} setLoginned={setLoginned} loginned={loginned} focus={focus} setFocus={setFocus}/>}/>
  <Route path='/register' element={<Register setToken={setToken} focus={focus} setFocus={setFocus}/>}  />
  <Route path='/homepage'  element={loginned ? <Home token={token}  setLoginned={setLoginned}/> : <Navigate to="/" />} />
  <Route path='*' element={<Notfound />}/>
</Routes>
    </div>
  );
}

export default App;

//token??
//supabase dushmur??