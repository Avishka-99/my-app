import React, { Component } from 'react';
import '../CSS/menuitems.css'
class Menuitems extends Component{
    render() {
        console.log(this.props)
        return (
            <div className='menu'>
                <div className='icon'></div>
                <div className='nameContainer'>
                    <div className='name'>{this.props.name}</div>
                </div>
                
            </div>
        );
    }
};
export default Menuitems;