import React, { useState, useEffect} from 'react';
import LibraryServices from '../../Services/request';
import {MDBCard, MDBCardBody, MDBInput, MDBBtn} from 'mdbreact';

const AddEditComment = (props) => {

    const [initialState, setInitialState] = useState({
        video: props.yt_video_id,
        id: null,
        comment_text: '',
        originalComment: null,
        like: false,
        dislike: false
    })

    useEffect(() => {
        setInitialState(initialState)
    }, [initialState])


    const onChangeComment = e => {
        setInitialState({ ...initialState, comment_text: e.target.value})
    }

    const saveComment = () => {
        debugger

        LibraryServices.getVideoById(props.yt_video_id)
        setInitialState({
            video: props.yt_video_id 
        })

        const data = {
            video: props.yt_video_id,
            id: initialState.id,
            comment_text: initialState.comment_text,
            originalComment: initialState.originalComment,
            like: initialState.like,
            dislike: initialState.dislike
        };
        console.log('\n\n *** Saving comment ***')
        console.log('State:', initialState);
        console.log('Props: ', props)
        LibraryServices.createComment(data)
        .then(data => {
            setInitialState(data)
        })
        .catch(error => {
            alert('There was an error! ' + error.message);
            console.log(error.data);
        }
        )

        clearForm()
    }

    function clearForm(){
        setInitialState({
            video: props.yt_video_id,
            id: null,
            comment_text: '',
            originalComment: null,
            like: false,
            dislike: false
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
                    value={initialState.comment_text}
                    onChange={onChangeComment}>
                </MDBInput>
                <MDBBtn gradient="peach" onClick={() => clearForm} >
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
            <form>
                <MDBInput
                    htmlFor="comment_text"
                    type="textarea"
                    background  
                    id="comment_text" 
                    name="comment_text"
                    value={initialState.comment_text}
                    onChange={onChangeComment}>
                </MDBInput>
                <MDBBtn gradient="peach" onClick={clearForm} type='reset' >
                    Cancel
                </MDBBtn>
                <MDBBtn gradient="peach" onClick={saveComment} >
                    Comment
                </MDBBtn>
            </form>
        </MDBCardBody>
        </MDBCard>
        
        
            }
            </>

        );
}

export default AddEditComment