import React, {useState} from 'react';
import { connect } from 'react-redux'

export const CommentHistoryTable = (props) => {

    const [commentData, setCommentData] = useState({})



    




    const handleOnClick = (comment) => {
        console.log('Clicked Comment >>', comment)
    }

    const mapCommentCards = () => {

        console.log('\n*** Map Comment Cards ***')

        let commentMapResults = []
        for (let i = 0; i < commentData.length; i++) {

            let card = <MDBCard className="mb-3"
                                onClick={() => }

        }





    }



    
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}