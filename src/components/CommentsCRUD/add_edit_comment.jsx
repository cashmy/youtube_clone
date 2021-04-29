import React, { Component, useState } from 'react';
import LibraryServices from '../../Services/request';
import {MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon} from 'mdbreact';
import { Fragment } from 'react';

const AddEditComment = (props) => {

    const [state, setState] = useState({
        video: 3,
        id: null,
        comment_text: '',
        originalComment: null,
        like: null,
        dislike: null
    })

    const onChangeComment = e => {
        setState({comment_text: e.target.value})
        console.log(this.state.comment_text)
    }

    const updateComment = (e) => {
        LibraryServices.update(state.id, state.comment_text)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const saveComment = (e) => {
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
            setState({
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

        newComment()
    }

    const newComment = () => {
        setState({
            video: 3,
            id: null,
            comment_text: '',
            originalComment: null,
            like: null,
            dislike: null
        })
    }

        return (
            <>
            {!props.update ? 
            
            <MDBCard className="col-md-12 mb-2">
            <MDBCardBody>
                Edit Comment
                <MDBInput
                htmlFor="comment_text"
                type="textarea"
                background  
                id="comment_text" 
                name="comment_text"
                value={state.commentText}
                onChange={onChangeComment}>
                </MDBInput>
                <Fragment>
                <MDBBtn gradient="peach" onClick={newComment} >
                Cancel
                </MDBBtn>
                <MDBBtn gradient="peach" onClick={updateComment} >
                Update
                </MDBBtn>
                </Fragment>
            </MDBCardBody>
        </MDBCard>

        :

        <MDBCard className="col-md-12 mb-2">
        <MDBCardBody>
            Post Comment
            <MDBInput
            htmlFor="comment_text"
            type="textarea"
            background  
            id="comment_text" 
            name="comment_text"
            value={state.commentText}
            onChange={onChangeComment}>
            </MDBInput>
            <Fragment>
            <MDBBtn gradient="peach" onClick={newComment} >
            Cancel
            </MDBBtn>
            <MDBBtn gradient="peach" onClick={saveComment} >
            Comment
            </MDBBtn>
            </Fragment>
        </MDBCardBody>
        </MDBCard>
        
        
            }
            </>

        );
}

export default AddEditComment