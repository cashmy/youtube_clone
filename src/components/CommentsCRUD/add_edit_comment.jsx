import React, { Component, useState } from 'react';
import LibraryServices from '../../Services/request';
import {MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';
import { Fragment } from 'react';

export default class AddEditComment extends Component {

    state = {
        video: 3,
        id: null,
        comment_text: '',
        originalComment: null,
        like: null,
        dislike: null
    }

    onChangeComment = e => {
        this.setState({comment_text: e.target.value})
        console.log(this.state.comment_text)
    }

    saveComment = (e) => {
        const data = {
            video: this.state.video,
            id: this.state.id,
            comment_text: this.state.comment_text,
            originalComment: this.state.originalComment,
            like: this.state.like,
            dislike: this.state.dislike
        };
        e.preventDefault();
        LibraryServices.createComment(data)
        .then(data => {
            this.setState({
                video: data.video,
                id: data.id,
                commentText: data.comment_text,
                originalComment: data.originalComment,
                like: data.like,
                dislike: data.dislike
            });
            console.log(data);
        })
        .catch(error => {
            console.log(error.response);
        });

        this.newComment()
    }

    newComment = () => {
        this.setState({
            video: 3,
            id: null,
            comment_text: '',
            originalComment: null,
            like: null,
            dislike: null
        })
    }

    render() {
        return (
            <MDBCard className="col-md-12 mb-2">
                <MDBCardBody>
                    Post Comment
                    <MDBInput
                    htmlFor="comment_text"
                    type="textarea"
                    background 
                    label="Enter Comment..." 
                    id="comment_text" 
                    name="comment_text"
                    value={this.state.commentText}
                    onChange={this.onChangeComment}>
                    </MDBInput>
                    <Fragment>
                    <MDBBtn gradient="peach" onClick={this.newComment} >
                    Cancel
                    </MDBBtn>
                    <MDBBtn gradient="peach" onClick={this.saveComment} >
                    Comment
                    </MDBBtn>
                    </Fragment>
                </MDBCardBody>
            </MDBCard>
        );
    }
}