import React, { Component } from 'react';
import Menuitems from './Menuitems';
import Product from './Product';
import RegistrationForm from './RegistrationForm';
import Branch from './Branch';
import Vehicles from './Vehicles';
import '../CSS/dashboard.css';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

class Dashboard extends Component {    
   constructor(props){
    super(props);
    this.state={
        Employees:false,
        Branches:false,
        Vehicle:false,
        userType:this.props.userType,
        Product:false,
        newUser:false,
    }
   }   
    render(){
        console.log(this.state.userType);
        const Employees=()=>{
            this.setState({Employees:true})
            this.setState({Branches:false})
            this.setState({Vehicle:false})
            this.setState({Product:false})
            this.setState({newUser:false})
        };
        const Branch_=()=>{
            this.setState({Employees:false})
            this.setState({Branches:true})
            this.setState({Vehicle:false})
            this.setState({Product:false})
            this.setState({newUser:false})
        };
        const Vehicle=()=>{
            this.setState({Employees:false})
            this.setState({Branches:false})
            this.setState({Vehicle:true})
            this.setState({Product:false})
            this.setState({newUser:false})
        };
        const Products_=()=>{
            this.setState({Employees:false})
            this.setState({Branches:false})
            this.setState({Vehicle:false})
            this.setState({Product:true})
            this.setState({newUser:false})
        };
        const NewUser=()=>{
            this.setState({Employees:false})
            this.setState({Branches:false})
            this.setState({Vehicle:false})
            this.setState({Product:false})
            this.setState({newUser:true})
        };
        const menuNamesAdmin = [["Employee",<PersonIcon fontSize="large"/>,Employees],["Branch",<StoreIcon fontSize="large"/>,Branch_],["Vehicle",<DirectionsCarIcon fontSize="large"/>,Vehicle],["Products",<InventoryIcon fontSize="large"/>,Products_],["New User",<PersonAddIcon fontSize="large"/>,NewUser]];
        return(
        <div className="App">
            <div className='sideBar'>
                <div className='userIcon'>
                </div>
                {this.state.userType=="admin"?menuNamesAdmin.map((items)=><Menuitems name={items} parentFunction={items[2]} key={items}/>):<div/>}                    
            </div>
        <div className='content'>
            {this.state.newUser && <RegistrationForm/>}
            {this.state.Product&& <Product/>}
            {this.state.Branches&& <Branch/>}
            {this.state.Vehicle&& <Vehicles/>}
        </div>
    </div>
    );
        
    
}
}
export default Dashboard;