import { MDBCard, MDBCardBody, MDBCol, MDBBtn } from 'mdbreact';
import React, {useState, useEffect} from 'react';
import LibraryServices from '../../Services/request';
import ModalPage from '../CommentModal/Modal';
import './comment_table.css'

export const CommentHistoryTable = (props) => {

    const [commentData, setCommentData] = useState()

    useEffect(() => {
        LibraryServices.getAll()
        .then(response => setCommentData(response.data))
        console.log(commentData)
        
    }, [commentData, setCommentData])



    const handleOnClick = (comment) => {
        console.log('Clicked Comment >>', comment)
    }



    
    return (
        <MDBCol className='col-md-4'>
            <MDBCard>
                <MDBCardBody>
                {commentData ? commentData.map(comment => {
                    return  <MDBCard className="mb-3" >
                                <MDBCardBody {... comment}>
                                    {comment.comment_text}
                                </MDBCardBody>
                                <div className='buttons' style={{display: 'flex', flexDirection:'row'}}>
                                <ModalPage
                                color='mdb-color'
                                type='Edit'
                                inputType='textarea'
                                title='Edit Comment'
                                content={comment.comment_text}
                                closeBtn='Cancel'
                                actionBtn='Save Changes'
                                />
                                <ModalPage
                                color='danger'
                                type='Delete'
                                title='Delete Comment'
                                inputType = 'text'
                                content='Are you sure you want to delete the comment?'
                                closeBtn='No'
                                actionBtn='Yes'
                                />
                                </div>
                            </MDBCard>
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