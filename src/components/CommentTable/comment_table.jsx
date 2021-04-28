import { MDBCard, MDBCardBody, MDBCol, MDBBtn } from 'mdbreact';
import React, {useState, useEffect} from 'react';
import LibraryServices from '../../Services/request';
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
                                <div className='buttons'>
                                <MDBBtn color="mdb-color" className='edit_btn'>
                                    Edit
                                </MDBBtn>
                                <MDBBtn color='danger' className='delete_btn'>
                                    Delete
                                </MDBBtn>
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