import React, { Component } from 'react';
import ModalPopup from './modalPopup';

class EditCard extends Component {
    constructor(props){
        super(props)
    }
    state = {
        id: this.props.userData.id,
        image: this.props.userData.image, 
        name: this.props.userData.name,
        email: this.props.userData.email,
        Gender: this.props.userData.Gender,
        status: this.props.userData.status,
        status_class: this.props.userData.status_class,
    }
    closePopup = () => {
        this.props.isEditMode = false
        this.setState({...this.state, id: '' })
    }
    saveDetails = ()=>{
        // const userObj = this.props.data.filter((obj) => obj.id == this.state.id)
        // const index = this.props.data.indexOf(userObj)
        this.props.value.updateUser(this.state)
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
        console.log('data in edit', this.state);
        return (
            <ModalPopup 
            data = {this.state}
            closePopup = {() => { this.props.closePopup() }}
            saveDetails = {() => {this.saveDetails()}}
            handleChange = {(e)=>this.handleChange(e)}
            />
        );
    }
}
 
export default EditCard;