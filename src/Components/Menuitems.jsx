import React, { Component } from 'react';
import '../CSS/menuitems.css'
class Menuitems extends Component {
    render() {
        console.log(this.props.name)
        return (
            
            <div className='menu' onClick={()=>this.props.parentFunction()}>
                <div className='icon'>
                    <div className='iconBox'>{this.props.name[1]}</div>
                </div>
                <div className='nameContainer'>
                    <div className='name'>{this.props.name[0]}</div>
                </div> 
            </div>
        );
    }
}
export default Menuitems;