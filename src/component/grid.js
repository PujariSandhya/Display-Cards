import React, { Component } from 'react';
import {EditBtn,SaveBtn} from './button'
import EditCard from './edit';
import ModalPopup from './modalPopup';

class Grid extends Component {
    constructor(props){
        super(props)
    }
    state = {
        isEditGrid: false,
        goingToEditData: []
    }
    
    editAddUser = (data)=>{
        console.log(data);
        this.setState({...this.state, isEditGrid: true, goingToEditData: data} )
    }
    closePopup = () => {
        this.setState({...this.state, isEditGrid: false, goingToEditData: ''} )
    }
    // updateUser = (value) => {
    //     //const newUser_data = [...this.state.user_data]
    //     const index = this.state.user_data.findIndex(x => x.id == value.id)
    //     const data = this.state.user_data.splice(index, 1, value);
    //     // if(index == -1){
    //     //     console.log('value', value);
    //     // }
    //     this.setState({ ...this.state, isEditMode: false, })
    //     //console.log('newUser_data',newUser_data);
    // }
    saveDetails = (data)=>{
        // const userObj = this.props.data.filter((obj) => obj.id == this.state.id)
        // const index = this.props.data.indexOf(userObj)
        this.props.value.updateUser(this.state)
        this.setState({...this.state,isEditGrid:false,goingToEditData: data})
        //console.log('index', index);
    }
    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            ...this.state,
            // id: this.props.data.id,
            // image: this.props.data.image,
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log('data in grid',this.state.goingToEditData);
        return (
            <>      
                {this.state.isEditGrid ? <ModalPopup data = {this.state.goingToEditData} 
                closePopup = {this.closePopup}
                saveDetails = {() => {this.saveDetails()}}
                handleChange = {(e)=>this.handleChange(e)}
                /> : null}   
                   
                <div className='main_grid'>
                    <p className='para_id'>ID: {this.props.data.id}</p>
                    <p className='para_name'>Name: <span className='span'>{this.props.data.name}</span></p>
                    {/* <p className='para'></p> */}
                    <p className='para_head'>Email : <span className='span'>{this.props.data.email}</span></p>
                    {/* <p className='para'></p> */}
                    <p className='para_head'>Gender: <span className='span'>{this.props.data.Gender}</span></p>
                    <p className='para'>{this.props.data.status}</p>
                    <EditBtn editUser={() => { this.editAddUser(this.props.data)}}/>
                    {/* <SaveBtn saveDetails={() => { this.saveAddUser() }} /> */}
                </div> 
            </>
        );
    }
}

export default Grid;