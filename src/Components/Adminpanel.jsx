import React, { Component } from 'react';
import Menuitems from './Menuitems';
import '../CSS/dashboard.css';
class Adminpanel extends Component {
    state={}
    
    render() {
        const menuNames = ["Employees","Stats"];
        return (
            <div className="App">
                <div className='sideBar'>
                    <div className='userIcon'>
                    </div>
                    {menuNames.map((items)=><Menuitems name={items}/>)}
                    
                </div>
            <div className='content'></div>
        </div>
        );
    }
}

export default Adminpanel;