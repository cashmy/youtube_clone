import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon} from 'mdbreact';
import React, {useState, useEffect} from 'react';
import LibraryServices from '../../Services/request';
import ModalPage from '../CommentModal/Modal';
import './comment_table.css'

export const CommentHistoryTable = (props) => {

    const [commentData, setCommentData] = useState();
    const [commentLikes, setCommentLikes] = useState({
        like: false,
        dislike: false
    });
    const [toggleModal, setToggleModal] = useState({
        modal12: false
    });
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
        
        setReplyComment(replyComment)
        setCommentData(commentData)
        setToggleModal(toggleModal)
        
    }, [replyComment, commentData, toggleModal]);

    const handleModalCallback = (childData) => {
        setToggleModal({
            modal12: childData
        })
    };

    const handleOnChangeReply = (e) => {
        setReplyComment({ ...replyComment, comment_text: e.target.value})

    };

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
        setToggleModal({
            modal12: false
        })
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
        clearForm()
    }

    function clearForm(){
        setReplyComment({
            video: props.yt_video_id,
            id: null,
            comment_text: '',
            originalComment: null,
            like: false,
            dislike: false
        })
        setToggleModal({
            modal12: false
        })
    }

    const handleOnClick = (comment) => {
        console.log('Clicked Comment >>', comment)
    }

    
    return (
        <MDBCol className='col-md-4'>
            <div className='comment_container'>
            <MDBCard border='white' >
                <MDBCardBody>
                {commentData ? commentData.map(comment => {

                    if(!comment.original_comment){
                    return (
                    <MDBCard className="mb-3" onDoubleClick={() => handleOnClick(comment)} style={{cursor: 'pointer'}} key={comment.id} border='white' >
                        {comment.id}
                        {!comment.original_comment ? 
                            <MDBCardBody>
                                {comment.comment_text}
                            </MDBCardBody>
                        :
                            <></>

                        }

                        <div id='buttons'>

                        {/* Reply Comment Modal */}
                        <ModalPage
                        commentTableCallback={handleModalCallback}
                        color='mdb-color'
                        type='Reply'
                        click={() => createReply(comment)}
                        change={handleOnChangeReply}
                        value={replyComment.comment_text}
                        title={`Replying to ${comment.comment_text}`}
                        content=''
                        closeBtn='Cancel'
                        actionBtn='Reply'
                        />

                        {/* Delete Comment Modal */}
                        <ModalPage
                        commentTableCallback={handleModalCallback}
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
                        <MDBCard className="mb-3" onDoubleClick={() => handleOnClick(comment)} style={{cursor: 'pointer'}} key={comment.id} border='white' >
                            <span>Reply &#8658; #{comment.original_comment}</span>
                                <MDBCardBody>
                                    {comment.comment_text}
                                </MDBCardBody>
    
                            <div id='buttons'>
    
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
            </div>
        </MDBCol>
    )
}
