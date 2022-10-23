import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../CSS/registrationForm.css';
class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name:"",nic:"",gender:"",password:"",date:""};
    }
    render() {
        const changeName=(e)=>{
            this.setState({
                name:e.target.value
            });   
        }
        const changeNIC=(e)=>{
            this.setState({
                nic:e.target.value
            });   
        }
        const changeGENDER=(e)=>{
            this.setState({
                gender:e.target.value
            });   
        }
        
        const changePASSWORD=(e)=>{
            this.setState({
                password:e.target.value
            });   
        }
        const changeDATE=(e)=>{
            this.setState({
                date:e.target.value
            });   
        }
        console.log(this.state.date);
        return (
            <div className='form'>
                <h1>Register new user</h1><p/>
                <form onSubmit={changeName}>
                    <input type="text" placeholder='Enter Name' value={this.state.name} onChange={changeName}/><br/>
                    <input type="text" placeholder='Enter NIC number'value={this.state.nic} onChange={changeNIC}/><br/>
                    <div >
                        <input type="radio" value="MALE" name='gender' onChange={changeGENDER}/><label>Male</label>
                        <input type="radio" value="FEMALE" name="gender" onChange={changeGENDER}/> <label>Female</label><br/>
                    </div>
                    
                    <input type="date"onChange={changeDATE}/><br/>
                    <input type="password" placeholder='Enter password'/><br/>
                    <input type="password" placeholder='Confirm password'/><br/>
                    <input type="submit"/>
                </form>
                    
            </div>
        );
    }
}

export default RegistrationForm;