import React, { Component } from 'react';
import '../CSS/product.css';
import Table from './Table' ;
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
                <h1>Add New Product</h1><p />
                <form onSubmit={submitForm}>
                    <input type="text" placeholder='Item Name' value={this.state.name} onChange={changeName} className="addProduct" />
                    <input type="text" placeholder='Item No' value={this.state.nic} onChange={changeNIC} className="addProduct"/>
                    <input type="text" placeholder='Price' value={this.state.name} onChange={changeName} className="addProduct"/>
                    <input type="text" placeholder='Quantity' value={this.state.name} onChange={changeName} className="addProduct"/>
                    <input type="submit" className='addProductButton' value='Add'/>
                </form>

            </div>
        );
    }
}

export default RegistrationForm;