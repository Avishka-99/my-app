import React, { Component } from 'react';
import '../CSS/vehicle.css';
import Table from './Table';
class Vehicles extends Component {
    state = { brandName: "", type: ""} 
    render() { 
        const changeName =(e)=>{
            this.setState(
                {brandName:e.targer.value}
            );
        };
        const changeVehicle =(e)=>{
            this.setState(
                {type:e.targer.value}
            );
        };
        const submitVehicle=(e)=>{
            var brandName=this.state.brandName;
            var type=this.state.type;
        };
        return (
            <div>
                <div className='vehicleForm'>
                <h4>Add Vehicle</h4><p/>
                <form onSubmit={submitVehicle}>
                    <input type="text" placeholder='Brand Name' value={this.state.brandName} onChange={changeName} className="addVehicle" />
                    <div className='radio' >
                        <input type="radio" value="Car" name='vehicle' onChange={changeVehicle} /><label>Car</label>
                        <input type="radio" value="Van" name='vehicle' onChange={changeVehicle} /><label>Van</label>
                        <input type="radio" value="Bus" name='vehicle' onChange={changeVehicle} /><label>Bus</label>
                        <input type="radio" value="Motorbicycle" name='vehicle' onChange={changeVehicle} /><label>Motorbicycle</label>
                        <input type="radio" value="Lorry" name="vehicle" onChange={changeVehicle} /> <label>Lorry</label><br />
                    </div>
                    <input type="submit" className='addVehicleBtn' value='Add'/>
                </form>
                <div>
                </div>
                <Table className="branchTable"/>
                </div>
            </div>
            
        );
    }
}
 
export default Vehicles;