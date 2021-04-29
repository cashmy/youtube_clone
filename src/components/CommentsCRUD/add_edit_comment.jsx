import React, { useState } from 'react';
import LibraryServices from '../../Services/request';
import {MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';
import { Fragment } from 'react';

const AddEditComment = (props) => {




    const [initialState, setInitialState] = useState({
        video: 4,
        id: null,
        comment_text: '',
        originalComment: null,
        like: null,
        dislike: null
    })

    const onChangeComment = e => {
        setInitialState({...initialState, comment_text: e.target.value})
        
        
    }

    const updateComment = (e) => {
        LibraryServices.update(initialState.id, initialState.comment_text)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const saveComment = (e) => {
        const data = {
            video: initialState.video,
            id: initialState.id,
            comment_text: initialState.comment_text,
            originalComment: initialState.originalComment,
            like: initialState.like,
            dislike: initialState.dislike
        };
        LibraryServices.createComment(data)
        setInitialState({
            ...initialState,
            comment_text: data.comment_text,
        })
        console.log('initialState',initialState)
    }

    const newComment = () => {
        setInitialState({
            video: 4,
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
                value={initialState.commentText}
                onChange={onChangeComment}>
                </MDBInput>
                <MDBBtn gradient="peach" onClick={newComment} >
                Cancel
                </MDBBtn>
                <MDBBtn gradient="peach" >
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
            value={initialState.commentText}
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