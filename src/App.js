import React, { Component,useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Loginform from './Components/Loginform';
function App() {
  const[hide,setHide]=useState(false);
  const[manager,setManager]=useState(false);
  const[admin,setAdmin]=useState(false);
  const[employee,setEmployee]=useState(false);
  const[accountant,setAccountant]=useState(false);
  const[salesman,setSalesman]=useState(false);
  const login=(name,password)=>{
    console.log(name);
    console.log(password);
    setHide(!hide);
    setAdmin(!admin);
  }
  return (
    <div>
      {!hide&&<Loginform parentFunction={login}/>}
      {manager&&<Dashboard userType="manager"/>}
      {admin&&<Dashboard userType="admin"/>}
      {employee&&<Dashboard userType="employee"/>}
      {accountant&&<Dashboard userType="accountant"/>}
      {salesman&&<Dashboard userType="salesman"/>}
    </div>
    
    
  );
}
export default App;
