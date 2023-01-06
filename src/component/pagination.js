import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props){
        super(props)
    }
    state = {
        pageNumber: '',
    }
    handleChange = (e)=>{
        this.setState({...this.state, pageNumber: e.target.value})
    }
    handlePage =()=>{
        this.props.value.gotoPage(this.state.pageNumber)
        this.setState({...this.state, pageNumber: ''})
    }
    render() {
        console.log(this.state.pageNumber);
        
        return (
            <div className='pgn_div'>
            <div className="pagination">
                <a href="#" onClick={()=>{this.props.prev_paginate()}}>Prev</a>
                <a href="#" onClick={()=>{this.props.next_paginate()}}>Next</a>
            </div>
            <p>Total User: {this.props.data.length}</p>
            <div className='goto_section'>
            <button onClick={this.handlePage}>GoTo Page</button>
            <label htmlFor="">
                <input type="text" onChange={this.handleChange}/> /{Math.ceil(this.props.data.length/this.props.UserPerPage)}
            </label>
            </div>
            </div>
        );
    }
}

export default Pagination;
