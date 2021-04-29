import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import './Modal.css'

class ModalPage extends Component {
state = {
  modal12: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
    return (
        <MDBContainer>
        <MDBBtn  size='sm' className='action_btn' onClick={this.toggle(12)} color={this.props.color}>{this.props.type}</MDBBtn>
        <MDBModal isOpen={this.state.modal12} toggle={this.toggle(12)} backdrop={false}>
            <MDBModalHeader className='modal_header' toggle={this.toggle(12)}>{this.props.title}</MDBModalHeader>
            <MDBModalBody>
            {this.props.type == 'Edit' ? 
            <MDBInput type={this.props.inputType} value={this.props.content}  />
            :
            this.props.content
            }
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(12)}>{this.props.closeBtn}</MDBBtn>
            <MDBBtn color="primary">{this.props.actionBtn}</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
        </MDBContainer>
        );
    }
}

export default ModalPage;