<<<<<<< HEAD
=======
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
        .then(response => setCommentData(response.data))
        // console.log(commentData)
        
    }, [commentData, setCommentData])



    const handleOnClick = (comment) => {
        console.log('Clicked Comment >>', comment)
        //Todo update props to AddEditComment component
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
                        {/* <ModalPage
                        color='mdb-color'
                        type='Edit'
                        inputType='textarea'
                        title='Edit Comment'
                        content={comment.comment_text}
                        closeBtn='Cancel'
                        actionBtn='Save Changes'
                        /> */}
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
                        <MDBBtn tag='a' size='sm' floating color='blue'>
                            <MDBIcon icon='thumbs-up' />
                        </MDBBtn>
                        <MDBBtn tag='a' size='sm' floating color='blue'>
                            <MDBIcon icon='thumbs-down' />
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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}
>>>>>>> 18b2d89e415c8848faff847cff8390291269c9b3
