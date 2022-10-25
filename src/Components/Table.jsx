import React, { Component } from 'react';
class Table extends Component {
    state = {  } 
    
    render() { 
        const head=[['name','age','phon no','gfgf'],['name','age','phon no','gfgf'],['name','age','phon no','gfgf']];
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                    </tr>
                </thead>
                <tbody>
                    {head.map(data=>(
                        <tr>
                            <td>{data[0]}</td>
                            <td>{data[1]}</td>
                            <td>{data[2]}</td>
                            <td>{data[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        );
    }
}
 
export default Table;