import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../CSS/registrationForm.css';
class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", nic: "", gender: "", password: "", date: "", usertype: "" };
    }
    render() {
        const changeName = (e) => {
            this.setState({
                name: e.target.value
            });
        }
        const changeNIC = (e) => {
            this.setState({
                nic: e.target.value
            });
        }
        const changeGENDER = (e) => {
            this.setState({
                gender: e.target.value
            });
        }

        const changePASSWORD = (e) => {
            this.setState({
                password: e.target.value
            });
        }
        const changeDATE = (e) => {
            this.setState({
                date: e.target.value
            });
        }
        const changeUserType = (e) => {
            this.setState({
                usertype: e.target.value
            });
        }
        const submitForm = () => {
            var name = this.state.name;
            var dob = this.state.date;
            var gender = this.state.gender;
            var password = this.state.password;
            var nic = this.state.nic;
            var usertype = this.state.usertype;
        }
        console.log(this.state.date);
        return (
            <div className='form'>
                <h1>Register new user</h1><p />
                <form onSubmit={submitForm}>
                    <input type="text" placeholder='Enter Name' value={this.state.name} onChange={changeName} /><br />
                    <input type="text" placeholder='Enter NIC number' value={this.state.nic} onChange={changeNIC} /><br />
                    <input type="password" placeholder='Enter password' /><br />
                    <div className='radio'>
                        <input type="radio" value="MALE" name='gender' onChange={changeGENDER} /><label>Male</label>
                        <input type="radio" value="FEMALE" name="gender" onChange={changeGENDER} /> <label>Female</label><br />
                    </div>
                    <div className='radio' >
                        <input type="radio" value="ADMIN" name='usertype' onChange={changeUserType} /><label>Admin</label>
                        <input type="radio" value="MANAGER" name='usertype' onChange={changeUserType} /><label>Manager</label>
                        <input type="radio" value="CLERK" name='usertype' onChange={changeUserType} /><label>Clerk</label>
                        <input type="radio" value="ACCOUNTANT" name='usertype' onChange={changeUserType} /><label>Accountant</label>
                        <input type="radio" value="SALESMAN" name="usertype" onChange={changeUserType} /> <label>Salesman</label><br />
                    </div>
                    <input type="date" onChange={changeDATE} /><br />
                    <input type="submit" />
                </form>

            </div>
        );
    }
}

export default RegistrationForm;