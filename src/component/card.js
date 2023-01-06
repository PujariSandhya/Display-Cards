import React, { Component } from 'react';
import { users } from '../mock'
import { EditBtn, Close } from './button';
import EditCard from './edit';
import ModalPopup from './modalPopup';
import ViewModal from './viewModal';
import Pagination from './pagination';
import SearchBox from './searchBox';
import AddUser from './addUser';
import Grid from './grid';

class Card extends Component {
    constructor() {
        super()
    }
    state = {
        user_data: [],
        currentPage: 1,
        UserPerPage: 8,
        currentUsers: [],
        currentUserId: '',
        isAvailable: false,
        isEditMode: false,
        isAddUser: false,
        goingToEditdata: [],
        goingToViewdata: [],
        isViewModeal: false,
        isDefault: true,
    }
    componentDidMount() {
        const user_data = users.map((data) => { return data })
        this.setState({ ...this.state, user_data })
    }
    nextPaginate = () => {
        this.setState({ ...this.state, currentPage: this.state.currentPage + 1 })
    }
    prevPaginate = () => {
        this.setState({ ...this.state, currentPage: this.state.currentPage - 1 })
    }
    updateState = (id, isAvailable, isSearch) => {
        this.setState({ ...this.state, currentUserId: id, isAvailable: isAvailable, isSearch: isSearch })
    }

    editUser = (data) => {
        this.setState({ ...this.state, isEditMode: true, goingToEditdata: data })
    }
    closePopup = () => {
        this.setState({ ...this.state, isEditMode: false, goingToEditdata: '' })
    }
    updateUser = (value) => {
        //const newUser_data = [...this.state.user_data]
        const index = this.state.user_data.findIndex(x => x.id == value.id)
        const data = this.state.user_data.splice(index, 1, value);
        // if(index == -1){
        //     console.log('value', value);
        // }
        this.setState({ ...this.state, isEditMode: false, })
        //console.log('newUser_data',newUser_data);
    }
    addUser = () => {
        this.setState({ ...this.state, isAddUser: true })
    }
    closeAddUser = () => {
        this.setState({ ...this.state, isAddUser: false })
    }
    updateAddUser = (value) => {
        const newUser_data = [...this.state.user_data]
        newUser_data.push(value)
        this.setState({ ...this.state, isAddUser: false, user_data: newUser_data })
        console.log(newUser_data);
    }
    viewMode = () => {
        this.setState({ ...this.state, isDefault: !this.state.isDefault })
    }
    displayLimit = (e) => {
        console.log('display Limit', e.target.value);
        if (e.target.value == 50) {
            this.setState({ ...this.state, UserPerPage: 50 })
        } else {
            this.setState({ ...this.state, UserPerPage: 8 })
        }
    }
    viewModalPopup = (data) => {
        this.setState({ ...this.state, isViewModeal: true, goingToViewdata: data })
    }
    closeViewModal = () => {
        this.setState({ ...this.state, isViewModeal: false })
    }
    gotoPage = (value)=>{
        this.setState({...this.state, currentPage: value})
    }
    render() {
        console.log('userData', this.state.user_data);
        const indexOfLastUser = this.state.currentPage * this.state.UserPerPage
        const indexOfFirstUser = indexOfLastUser - this.state.UserPerPage
        const currentUsers = this.state.user_data.slice(indexOfFirstUser, indexOfLastUser)
        let filterWith = ''
        if (this.state.isAvailable == true) {
            filterWith = this.state.user_data
        } else {
            filterWith = currentUsers
        }
        return (
            <>
                <SearchBox
                    userData={this.state.user_data}
                    data={{ updateState: this.updateState.bind(this) }}
                    currentUserId={this.state.currentUserId}
                />
                <div className='select_view'>
                    <button className='add_user' onClick={this.addUser}>Add User</button>
                    <label className='view_mode' htmlFor="">View Mode
                        <select name="" id="" onChange={this.viewMode}>
                            <option value="Card View">Card View</option>
                            <option value="Grid View">Grid View</option>
                        </select>
                    </label>
                </div>

                {this.state.isEditMode ? <EditCard
                    closePopup={this.closePopup}
                    //user_data = {this.state.user_data} 
                    userData={this.state.goingToEditdata}
                    value={{ updateUser: this.updateUser.bind(this) }}
                /> : null}
                {this.state.isViewModeal ? <ViewModal
                    closeViewModal={this.closeViewModal}
                    viewData={this.state.goingToViewdata}

                /> : null}
                {this.state.isAddUser ? <AddUser
                    closeAddUser={this.closeAddUser}
                    value={{ updateAddUser: this.updateAddUser.bind(this) }}
                /> : null}
                {
                    filterWith.filter((val) => {
                        if (this.state.currentUserId === '') {
                            return currentUsers
                        } else if (val.id == this.state.currentUserId) {
                            return val
                        }
                    }).map((data) => {
                        return (
                            <>
                                {this.state.isDefault ?
                                    <>
                                        <div className='card' >
                                            <div className='main_card' >
                                                <div className='image_section'>
                                                    <img className='image' src={data.image} />
                                                    <div className={data.status == 'active' ? 'active' : 'inactive'}>{data.status}</div>
                                                </div>
                                                <div className='details_section'>
                                                    <div onClick={() => this.viewModalPopup(data)}>
                                                        <p className='para_head'>ID: {data.id}</p>
                                                        <p className='para_head'>Name:</p>
                                                        <p className='para'>{data.name}</p>
                                                        <p className='para_head'>Email</p>
                                                        <p className='para'>{data.email}</p>
                                                        <p className='para_head'>Gender: <span className='span'>{data.Gender}</span></p>
                                                    </div>
                                                    <EditBtn editUser={() => { this.editUser(data) }} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    : <Grid
                                        data={data}
                                        value={{ updateUser: this.updateUser.bind(this) }}
                                    />}
                            </>
                        )
                    })
                }
                {this.state.UserPerPage == 50 ? null :
                    <Pagination
                        next_paginate={this.nextPaginate}
                        prev_paginate={this.prevPaginate}
                        data = {this.state.user_data}
                        UserPerPage = {this.state.UserPerPage}
                        value={{ gotoPage: this.gotoPage.bind(this) }}
                    />
                }
                {!this.state.isDefault ?
                    <>
                        <lable htmlFor='' className="display_limit">Record Per Page
                            <select onChange={this.displayLimit}>
                                <option value="8" >Default</option>
                                <option value="50">50</option>
                            </select>
                        </lable>
                        <div></div>
                    </>
                    : null}
            </>
        );
    }
}

export default Card;