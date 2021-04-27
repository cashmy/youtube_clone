import React from 'react';
import {
    MDBCol, 
    MDBCard, 
    MDBCardBody,
} from "mdbreact";

const SearchResultsTable = (props) => {
    return (
        <MDBCol className="col-md-3 mt-4">
            <MDBCard>
                <MDBCardBody>
                    Search Results:
                    <MDBCard className="mb-3">
                        <MDBCardBody>
                            Video Card data
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-3">
                        <MDBCardBody>
                            Video Card data
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-3">
                        <MDBCardBody>
                            Video Card data
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="mb-3">
                        <MDBCardBody>
                            Video Card data
                        </MDBCardBody>
                    </MDBCard>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

// Set default props
SearchResultsTable.defaultProps = {
    search_text : '',
    related_yt_video_id: 'V65uAHzofbg',
}

export default SearchResultsTable;