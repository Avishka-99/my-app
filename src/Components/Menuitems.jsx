import React, { Component } from 'react';
import '../CSS/menuitems.css'
class Menuitems extends Component{
    state ={
        names:this.props.name
    }
    render() {
        console.log(this.props)
        return (
            <div className='menu'>
                <div className='icon'></div>
                <div className='name'></div>
            </div>
        );
    }
}

export default Menuitems;