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
            video: state.video,
            id: state.id,
            comment_text: state.comment_text,
            originalComment: state.originalComment,
            like: state.like,
            dislike: state.dislike
        };
        e.preventDefault();
        LibraryServices.createComment(data)
        .then(response => {
            setState({
                video: response.data.video,
                id: response.data.id,
                commentText: response.data.comment_text,
                originalComment: response.data.originalComment,
                like: response.data.like,
                dislike: response.data.dislike
            });
            console.log(response.data);
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
            {props.update ? 
            
            <MDBCard className="col-md-12 mb-2">
            <MDBCardBody>
                Edit Comment
                <MDBInput
                htmlFor="comment_text"
                type="textarea"
                background  
                id="comment_text" 
                name="comment_text"
                label={props.comment}
                value={state.commentText}
                onChange={onChangeComment}>
                </MDBInput>
                <MDBBtn gradient="peach" onClick={newComment} >
                Cancel
                </MDBBtn>
                <MDBBtn gradient="peach" onClick={updateComment} >
                Update
                </MDBBtn>
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