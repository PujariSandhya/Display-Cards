import React, { Component } from 'react';

export class EditBtn extends Component {
    state = {  } 
    render() { 
        return (
            <button className='edit_btn' onClick={()=>{this.props.editUser()}}>edit</button>
        );
    }
}
 
export class Search extends Component {
    state = {  } 
    render() { 
        return (
            <button className='search_button' onClick={()=>{this.props.searchUser()}}>search</button>
        );
    }
}

 export class Close extends Component {
    state = {  } 
    render() { 
        return (<button className='close' onClick={()=>{this.props.close()}}>&times;</button>);
    }
}

export class SaveBtn extends Component {
    state = {  } 
    render() { 
        return (
        <button className='saveBtn' onClick={()=>{this.props.saveDetails()}}>Save</button>
        );
    }
}
 

 
