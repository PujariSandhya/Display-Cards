import React, { Component } from 'react';
import { SaveBtn } from './button'

class ModalPopup extends Component {
    constructor(props) {
        super(props)

    }
    state = {
        id: '',
        image: '',
        name: '',
        email: '',
        Gender: '',
        status: '',
        status_class: '',
    }
    componentDidMount() {
        const { id, name, email, Gender, status, status_class } = this.props.data
        this.setState({ id, name, email, Gender, status, status_class })
    }
    // closePopup = () => {
    //     this.props.isEditMode = false
    //     this.setState({...this.state, id: '' })
    // }
    // handleChange = (e)=>{
    //     console.log(e.target.value);
    //     this.setState({
    //         ...this.state,
    //         id: this.props.data.id,
    //         image: this.props.data.image,
    //         [e.target.name]: e.target.value
    //     })
    // }
    // saveDetails = ()=>{
    //     // const userObj = this.props.data.filter((obj) => obj.id == this.state.id)
    //     // const index = this.props.data.indexOf(userObj)
    //     this.props.value.updateUser(this.state)
    //     //console.log('index', index);
    // }

    render() {
        console.log('data in modalPopup', this.props.data);
        return (
            <>
                <div className='modal_container'>
                    <div className='modal'>
                        <div>
                            <button className='close_popup' onClick={() => { this.props.closePopup() }}>&times;</button>
                        </div>
                        <div className='name'>
                            <label htmlFor="" className='label'>Name: 
                            <input type="text" name='name' className='input_name' defaultValue={this.state.name} onChange={this.props.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Email: 
                            <input type="text" name='email' className='input_email' defaultValue={this.state.email} onChange={this.props.handleChange} />
                            </label>
                        </div>
                        <div className='gender'>
                            <label htmlFor="" className='label'>Gender: 
                            <select name='Gender' className='input_gender' Value={this.state.Gender} onChange={this.props.handleChange}>
                            <option >select</option>
                                <option value='male'>male</option>
                                <option value='female'>female</option>
                            </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="" className='label'>Status: 
                            <select name='status' className='input_status' Value={this.state.status} onChange={this.props.handleChange}>
                            <option >select</option>
                                <option value='active'>active</option>
                                <option value='inactive'>inactive</option>
                            </select>
                            </label>
                        </div>
                        <SaveBtn saveDetails={() => { this.props.saveDetails() }} />
                        
                    </div>
                </div>

                {/* <div className='modal_container'>
                    <div className='modal'>
                        <div>
                            <button className='close_popup' onClick={() => { this.props.closePopup() }}>&times;</button>
                        </div>
                        <div>
                            <label htmlFor="">Name:
                                <input type="text" name={this.props.data.name} id="" defaultValue={this.props.data.name} onChange={this.props.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Email:
                                <input type="text" name={this.props.data.email} id="" defaultValue={this.props.data.email} onChange={this.props.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Gender:
                                <select name={this.props.data.Gender} id="" onChange={this.props.handleChange}>
                                    <option value={this.props.data.Gender}>{this.props.data.Gender} </option>
                                    <option value='female'>female</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">Status:
                                <select name={this.props.data.status} id="" onChange={this.props.handleChange}>
                                    <option value={this.props.data.status}>{this.props.data.status} </option>
                                    <option value='inactive'>inactive</option>
                                </select>
                            </label>
                        </div>

                        <SaveBtn saveDetails={() => { this.props.saveDetails() }} />

                    </div>
                </div> */}

            </>
        );
    }
}

export default ModalPopup;