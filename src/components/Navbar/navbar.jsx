import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {PropTypes} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu, 
  MDBDropdownItem, 
  MDBIcon,
  MDBFormInline,
  MDBBtn,
} from "mdbreact";
import '../../SearchBar/searchBar.jsx';
import '../app.css'
import SearchBar from "../../SearchBar/searchBar.jsx";

class NavbarPage extends Component {
state = {
  isOpen: false,
  collapseID: "",
  searchText: "",
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));


handleCallback = (childData) => {
  this.setState({
    searchText: childData
  })
}

handleChange = (e) => { 
  this.props.parentCallback(this.state.searchText)
  e.preventDefault();
}


render() {
  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={this.toggleCollapse("navbarCollapse")}
    />
  );

  console.log('Navbar>searchText==', this.state.searchText)

  return (
    <Router>
      <div onClick={this.handleChange}>
        <MDBNavbar dark expand="md" fixed="top" >
          <MDBNavbarBrand>
            <strong className="white-text">You Tube Clone</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")}/>
          <MDBCollapse
            id="navbarCollapse"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Features</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>


            {/* Search Component */}
            {/* <MDBNavbarNav right>
            <MDBFormInline className="md-form mr-auto m-0">
                <input id="fmSearch" className="form-control form-control-sm mr-sm-2 form-white" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn gradient="peach" size="sm" type="submit" className="mr-auto">
                  Search
                </MDBBtn>
              </MDBFormInline>
            </MDBNavbarNav> */}
            
            <SearchBar parentCallback={this.handleCallback} />
            

            
            <MDBNavbarNav right>
             <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {this.state.collapseID && overlay}
      </div>
    </Router>
    );
  }
}

export default NavbarPage;