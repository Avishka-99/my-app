import React, { Component,useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Loginform from './Components/Loginform';
function App() {
  const[hide,setHide]=useState(false);
  const[admin,setAdmin]=useState(false);
  const login=(name,password)=>{
    if(name=='A'){
      setHide(!hide);
      setAdmin(!admin);
    }
     
  }
  return (
    <div>
      {!hide&&<Loginform parentFunction={login}/>} 
      {admin&&<Dashboard userType="admin"/>}
    </div>
    
    
  );
}
export default App;
