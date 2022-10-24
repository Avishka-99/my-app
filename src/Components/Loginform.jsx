import React, { Component } from 'react';
import '../CSS/loginform.css';
class Loginform extends Component {
    state = { name:'',password:'' } 
    render() { 
        const submitForm = ()=>{};
        const changePassword = (e) => {
            this.setState({
                password: e.target.value
            });
        }
        const changeName = (e) => {
            this.setState({
                name: e.target.value
            });
        }
        return (
            <div className='outerContainer'>
                <div className='innerContainer'>
                <form>
                    <input type="text" placeholder='Enter Name' value={this.state.name} onChange={changeName}/><br />
                    <input type="password" placeholder='Enter password' onChange={changePassword}/><br />
                    <input type="button" value='Login' onClick={()=>this.props.parentFunction(this.state.name,this.state.password)}/>
                </form>
                </div>
            </div>
        );
    }
}
 
export default Loginform;