import React, { Component } from 'react';
import {SaveBtn} from './button';

class AddUser extends Component {
    state = { 
        id: '',
        name: '',
        email: '',
        Gender: '',
        status: ''
     } 
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveAddUser = () =>{
        this.props.value.updateAddUser(this.state)
    }
    render() { 
        console.log(this.state.id, this.state.name, this.state.email, this.state.Gender, this.state.status);
        return (
            <>
                <div className='modal_container'>
                    <table className='modal'>
                        <td>
                       <tr>
                            <button className='close_popup' onClick={() => { this.props.closeAddUser() }}>&times;</button>
                        </tr>
                        <tr>
                            <label htmlFor="">ID: </label></tr>
                            <tr><input type="text" name='id' id="" defaultValue='' onChange={this.handleChange} /></tr>
                            
                            
                        
                        <tr>
                            <label htmlFor="">Name: </label></tr><tr>
                            <input type="text" name='name' id="" defaultValue='' onChange={this.handleChange} />
                            
                        </tr>
                        
                        <tr>
                            <label htmlFor="">Email: </label></tr><tr>
                            <input type="text" name='email' id="" defaultValue='' onChange={this.handleChange} />
                            
                        </tr>
                        <tr>
                            <label htmlFor="">Gender: </label></tr>
                            <tr>
                            <select name='Gender' id="" className='width' onChange={this.handleChange}>
                            <option >select</option>
                                <option value='male' >Male</option>
                                <option value='female'>female</option>
                            </select>
                           
                        </tr>
                       
                        <tr>
                            <label htmlFor="">Status: </label></tr><tr>
                            <select name='status' id="" className='width' onChange={this.handleChange}>
                            <option >select</option>
                                <option value='active' >active</option>
                                <option value='inactive'>inactive</option>
                            </select>
                            
                        </tr>
                        
                            <tr><SaveBtn saveDetails={() => { this.saveAddUser() }} />

                            </tr>
                        </td>
                       
                        
                    </table>
                </div>
            </>
        );
    }
}
 
export default AddUser;