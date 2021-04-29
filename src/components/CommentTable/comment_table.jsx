import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBMask, MDBView } from 'mdbreact';
import React, {useState, useEffect} from 'react';
import LibraryServices from '../../Services/request';
import ModalPage from '../CommentModal/Modal';
import AddEditComment from '../CommentsCRUD/add_edit_comment';
import './comment_table.css'

export const CommentHistoryTable = (props) => {

    const [commentData, setCommentData] = useState()

    useEffect(() => {
        LibraryServices.getAll()
        .then(response => 
            setCommentData(response.data)
            )
        console.log('This is the commentData', commentData)
        
    }, [])

    const handleLike = (comment) => {
        console.log('User liked song >', comment);
        //Add logic if button has already been pressed or accidentally liked
        if (comment.like == 'true'){
            setCommentData({
                commentData
            })
        }
        else {
            comment.like = 'true'
        }

    }



    const handleOnClick = (comment) => {
        console.log('Clicked Comment >>', comment)
        //Todo update props to AddEditComment componen
        

    }

    
    return (
        <MDBCol className='col-md-4'>
            <MDBCard>
                
                <MDBCardBody>

                {commentData ? commentData.map(comment => {
                    return <>
                    <MDBCard className="mb-3" onDoubleClick={() => handleOnClick(comment)} style={{cursor: 'pointer'}} >
                        #{comment.id}
                        <MDBCardBody {... comment}>
                            {comment.comment_text}
                        </MDBCardBody>
                        <div className='buttons' style={{display: 'flex', flexDirection:'row'}}>

                        {/* Edit Comment Modal */}
                        {/* <ModalPage
                        color='mdb-color'
                        type='Edit'
                        inputType='textarea'
                        title='Edit Comment'
                        content={comment.comment_text}
                        closeBtn='Cancel'
                        actionBtn='Save Changes'
                        /> */}

                        {/* Delete Comment Modal */}
                        <ModalPage
                        color='danger'
                        type='Delete'
                        title='Delete Comment'
                        inputType = 'text'
                        content='Are you sure you want to delete the comment?'
                        closeBtn='No'
                        actionBtn='Yes'
                        style={{display:'flex'}}
                        />
                        {/* {comment.like ?
                        <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)} disabled >
                        <MDBIcon size='lg' icon='thumbs-up' />
                        </MDBBtn>
                        <></>
                        :
                        <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)} >
                        <MDBIcon size='lg' icon='thumbs-up' />
                        </MDBBtn>
                        } */}

                        <MDBBtn tag='a' size='sm' color='blue' onClick={() => handleLike(comment)} >
                        <MDBIcon size='lg' icon='thumbs-up' />
                        </MDBBtn>
                        
                            

                        <MDBBtn tag='a' size='sm' color='blue'>
                            <MDBIcon size='lg' icon='thumbs-down' />
                        </MDBBtn>

                        </div>
                    </MDBCard>
                    </>
                }) : 
                
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