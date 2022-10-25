import React, { Component } from 'react';
import '../CSS/branch.css';
import Table from './Table';
class Branch extends Component {
    state = { name: "", address: ""} 
    render() { 
        const changeName =(e)=>{
            this.setState(
                {name:e.targer.value}
            );
        };
        const changeAddr =(e)=>{
            this.setState(
                {address:e.targer.value}
            );
        };
        const submitBranch=(e)=>{
            var name=this.state.name;
            var address=this.state.address;
        };
        return (
            <div>
                <div className='branchForm'>
                <h4>Add Branch</h4><p/>
                <form onSubmit={submitBranch}>
                    <input type="text" placeholder='Branch Name' value={this.state.name} onChange={changeName} className="addBranch" />
                    <input type="text" placeholder='Address' value={this.state.address} onChange={changeAddr} className="addBranch"/>
                    <input type="submit" className='addBranchBtn' value='Add'/>
                </form>
                <div>
                    
                </div>
                <Table className="branchTable"/>
                </div>
            </div>
            
        );
    }
}
 
export default Branch;