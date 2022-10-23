import React, { Component } from 'react';
import Menuitems from './Menuitems';
import '../CSS/dashboard.css';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import RegistrationForm from './RegistrationForm';
class Adminpanel extends Component {    
   constructor(props){
    super(props);
    this.state={
        Employees:false,
        Stats:false,
        NewUser:true
    }
   }   
    render(){
        const parentFunction=((data)=>{data()});
        const Employees=()=>{
            console.log("Employees here");
           //this.setState({Employees:true})
        };
        const Stats=()=>{
            console.log("Stats here");
           //this.setState({Employees:true})
        };
        const NewUser=()=>{
            console.log("New user here");
           //this.setState({Employees:true})
        };
        const menuNames = [["Employees",<PersonIcon fontSize="large"/>,Employees],["Stats",<TrendingUpIcon fontSize="large"/>,Stats],["New User",<PersonAddIcon fontSize="large"/>,NewUser]];
        
        return(
        <div className="App">
            <div className='sideBar'>
                <div className='userIcon'>
                </div>
                {menuNames.map((items)=><Menuitems name={items} parentFunction={items[2]} key={items}/>)}
                    
            </div>
        <div className='content'>
            <RegistrationForm/>
        </div>
    </div>
        
    );
}
}
export default Adminpanel;