import React from 'react';
import { Component } from 'react';
import {MDBNavbarNav, MDBBtn, MDBFormInline} from 'mdbreact';

class SearchBar extends Component{

    state = {
        searchText: '',
        inputValue: ''
    }

    handleOnChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.parentCallback(this.state.inputValue)
        this.setState({
            searchText: this.state.inputValue
        })
        this.clearInput()
        
    }

    clearInput =() => {
        this.setState({
            searchText: '',
            inputValue: ''
        })
    }



    render() {

        return (
            <MDBNavbarNav right>
                <MDBFormInline className="md-form mr-auto m-0">
                    <input
                        id="fmSearch" 
                        className="form-control form-control-sm mr-sm-2 form-white" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={this.handleOnChange} 
                        value={this.state.inputValue}
                        
                        />
                    <MDBBtn gradient="peach" size="sm" type="submit" className="mr-auto" onClick={this.handleSubmit}>
                        Search
                    </MDBBtn>
                </MDBFormInline>
            </MDBNavbarNav>
        )

    }



}

export default SearchBar;
