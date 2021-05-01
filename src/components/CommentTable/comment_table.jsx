import { 
    MDBBtn, 
    MDBCard, 
    MDBCardBody, 
    MDBCol, 
    MDBIcon, 
} from 'mdbreact';
import React, {useState, useEffect} from 'react';
// import { combineReducers } from 'redux';
import LibraryServices from '../../Services/request';
import ModalPage from '../CommentModal/Modal';
// import AddEditComment from '../CommentsCRUD/add_edit_comment';
import './comment_table.css'

export const CommentHistoryTable = (props) => {

    const [commentData, setCommentData] = useState()
    const [commentLikes, setCommentLikes] = useState({
        like: false,
        dislike: false
    })
    const [replyComment, setReplyComment] = useState({
        video: props.yt_video_id,
        id: null,
        comment_text: '',
        original_comment: null,
        like: false,
        dislike: false
    });


    useEffect(() => {
        LibraryServices.getAll()
        .then(response => 
            setCommentData(response.data)
            )
        
    }, [])

    const handleOnChangeReply = (e) => {
        setReplyComment({ ...replyComment, comment_text: e.target.value})
    }

    const handleLike = (comment) => {

        if (!comment.like){
            comment.like = true
            comment.dislike = false

            setCommentLikes({
                like: true,
                dislike: false
            })

            LibraryServices.editComment(comment.id, comment)
            .then(response => {
                console.log(response);
            })

            .catch(error => {
                console.log(error);
            })
        }

    }

    const handleDislike = (comment) => {

        if (!comment.dislike){
            comment.dislike = true
            comment.like = false

            setCommentLikes({
                like: false,
                dislike: true
            })

            LibraryServices.editComment(comment.id, comment)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
        

    }

    const deleteComment = (comment) => {
        LibraryServices.removeComment(comment.id)
        .then(response => {
            console.log(response); 
        })
        .catch(error => {
            console.log(error)
        })
        setCommentData(commentData)
    }

    const createReply = (comment) => {
        
        const data = {
            video: props.yt_video_id,
            id: replyComment.id,
            comment_text: replyComment.comment_text,
            original_comment: comment.id,
            like: replyComment.like,
            dislike: replyComment.dislike
        };
        LibraryServices.createComment(data)
        console.log('After services>>', data)
        setReplyComment(
            data
        )
    }

    const handleOnClick = (comment) => {
        console.log('Clicked Comment >>', comment)
    }

    const sortArr = () => {
    }

    
    return (
        <MDBCol className='col-md-4'>
            <MDBCard>
                <MDBCardBody>
                {commentData ? commentData.map((comment, i) => {

                    if(!comment.original_comment){
                    return (
                    <MDBCard className="mb-3" onDoubleClick={() => handleOnClick(comment)} style={{cursor: 'pointer'}} key={comment.id} >
                        {comment.id}
                        {!comment.original_comment ? 
                            <MDBCardBody>
                                {comment.comment_text}
                            </MDBCardBody>
                        :
                            <></>

                        }

                        <div className='buttons' style={{display: 'flex', flexDirection:'row'}}>
                            {/* Reply Comment Modal */}
                            <ModalPage
                                color='mdb-color'
                                type='Reply'
                                click={() => createReply(comment)}
                                change={handleOnChangeReply}
                                value={replyComment.comment_text}
                                title={`Replying to >> ${comment.comment_text}`}
                                content=''
                                closeBtn='Cancel'
                                actionBtn='Save Changes'
                            />

                            {/* Delete Comment Modal */}
                            <ModalPage
                                color='danger'
                                type='Delete'
                                title='Delete Comment'
                                inputType = 'text'
                                content='Are you sure you want to delete the comment?'
                                closeBtn='No'
                                actionBtn='Yes'
                                click={()=>deleteComment(comment)}
                                style={{display:'flex'}}
                            />
                            {/* Only will disable on refresh -- Need to fix */}
                            {comment.like ?
                                    <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)} disabled >
                                        <MDBIcon size='lg' icon='thumbs-up' disabled />
                                    </MDBBtn>
                                :
                                    <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)}  >
                                        <MDBIcon size='lg' icon='thumbs-up' />
                                    </MDBBtn>
                            }
                            {comment.dislike ?
                                    <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleDislike(comment)} disabled >
                                        <MDBIcon size='lg' icon='thumbs-down' disabled />
                                    </MDBBtn>
                                :
                                    <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleDislike(comment)}  >
                                        <MDBIcon size='lg' icon='thumbs-down' />
                                    </MDBBtn>
                            }
                        </div>
                    </MDBCard>
                    )
                }
                if (comment.original_comment){
                    return (
                        <MDBCard className="mb-3" onDoubleClick={() => handleOnClick(comment)} style={{cursor: 'pointer'}} key={comment.id} >
                            Reply &#8658; #{comment.original_comment}
                                <MDBCardBody>
                                    {comment.comment_text}
                                </MDBCardBody>
    
                            <div className='buttons' style={{display: 'flex', flexDirection:'row'}}>
    
                                {/* Delete Comment Modal */}
                                <ModalPage
                                    color='danger'
                                    type='Delete'
                                    title='Delete Comment'
                                    inputType = 'text'
                                    content='Are you sure you want to delete the comment?'
                                    closeBtn='No'
                                    actionBtn='Yes'
                                    click={()=>deleteComment(comment)}
                                    style={{display:'flex'}}
                                />
                                {/* Only will disable on refresh -- Need to fix */}
                                {comment.like ?
                                
                                <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)} disabled >
                                    <MDBIcon size='lg' icon='thumbs-up' disabled />
                                </MDBBtn>
                                :
                                
                                <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)}  >
                                    <MDBIcon size='lg' icon='thumbs-up' />
                                </MDBBtn>
                                }
        
                                {comment.dislike ?
                                
                                <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleDislike(comment)} disabled >
                                    <MDBIcon size='lg' icon='thumbs-down' disabled />
                                </MDBBtn>
                                :
                                
                                <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleDislike(comment)}  >
                                <MDBIcon size='lg' icon='thumbs-down' />
                                </MDBBtn>
                                }
                            </div>
                        </MDBCard>
                        )
                }
                
            
                
                    
                }) 
                
                
                
                
                
                : 
                
                <MDBCard className="mb-3">
                <MDBCardBody>
                    No Comments Yet
                </MDBCardBody>
                </MDBCard>

                }
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
