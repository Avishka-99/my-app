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
        NewUser:false
    }
   }   
    render(){
        const parentFunction=((data)=>{data()});
        const Employees=()=>{
           this.setState({Employees:true})
           this.setState({Stats:false})
           this.setState({NewUser:false})
        };
        const Stats=()=>{
            this.setState({Employees:false})
            this.setState({Stats:true})
            this.setState({NewUser:false})
        };
        const NewUser=()=>{
            this.setState({Employees:false})
            this.setState({Stats:false})
            this.setState({NewUser:true})
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
            {this.state.NewUser && <RegistrationForm/>}
            
        </div>
    </div>
        
    );
}
}
export default Adminpanel;