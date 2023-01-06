import React, { Component } from 'react';
import {Search} from './button';
import {Close} from './button'

class SearchBox extends Component {
    constructor(props){
        super(props)
    }
    state = { 
        id: '',
        isAvailable: false,
        isSearch: false
    } 
    handleInput = (e)=>{
        let id = e.target.value;
        if(id !== ''){
            this.setState({id})
        }
    }
    searchUserWithId = ()=>{
        this.props.data.updateState(this.state.id, this.state.isAvailable, this.state.isSearch) 
        let listOfId = []
        this.props.userData.map((data)=>{
            return listOfId.push(data.id)
         })
        if(listOfId.find(id => id == this.state.id)){
            this.setState({...this.state, isAvailable: true, isSearch: true})
        }
        else{
            this.setState({...this.state, isAvailable: false})
            }
        
        }
        render() { 
        return (
            <>
            <div className='top_nav'>
                {this.state.isSearch ? 
                <span className='currentUserId'>viewing ID: {this.props.currentUserId} 
                <Close/>
                </span>
                
                : null
                }
                <div className='search_container'>
                    <form action="#" >
                        <input type="text" placeholder='Search...' onChange={this.handleInput} />
                        {/* <button type='submti'>search</button> */}
                        <Search searchUser={this.searchUserWithId}/>
                    </form>
                </div>
            </div>
            </>
        );
    }
}
 
export default SearchBox;