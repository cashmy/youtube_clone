import React from 'react';
import {
    MDBCol, 
    MDBCard, 
    MDBCardBody,
    MDBTable,
    MDBTableBody,
} from "mdbreact";
import axios from 'axios'

const SearchResultsTable = (props) => {

    const getVideos = () => {
        let videoData = {}

        if (props.search_text === '' && props.related_yt_video_id !== '') {
            // TODO: Replace with services call ??
            axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=' + props.related_yt_video_id +'&type=video&key=AIzaSyA655YtG7MH6YYIr3ZJPsA89s3GlRhLA4I&maxResults=5')
                .then(response => { videoData = response.data })
                .catch(error => {alert('There was an error! ' + error.message)})
        } else {
            // TODO: Replace with services call ??
            axios.get('https://www.googleapis.com/youtube/v3/search?q='+ props.search_text +'&key=AIzaSyA655YtG7MH6YYIr3ZJPsA89s3GlRhLA4I&maxResults=5')
                .then(response => { videoData = response.data })
                .catch(error => {alert('There was an error! ' + error.message)})
        }
        return videoData
    }

    const handleOnClick = (video) => {
        // TODO: update props info to VideoPlayer component
    }

    const mapVideoCards = (videoData) => {
        let newVideosMapResult = videoData.map((video) => {
            video.yt_video_id = ''
            video.title = 'title'
            video.description = 'desc'
            video.card = 
                <MDBCard className="mb-3"
                         onClick={() => handleOnClick(video)}
                         style={{ cursor: 'pointer' }}
                >
                    <MDBCardBody>
                        Video Card data
                    </MDBCardBody>
                </MDBCard>
            return video;
        });
        return newVideosMapResult
    }

    const data = {
        columns: [

            {
                label: 'Track',
                field: 'track',
                sort: 'asc',
                width: 50
            },
        ],
        rows: mapVideoCards()
    }

    return (
        <MDBCol className="col-md-3 mt-4">
            <MDBCard>
                <MDBTable scrollY>
                    <MDBTableBody rows={data.rows} />
                </MDBTable>
                {/* <MDBCardBody>
                    Search Results: {props.search_text} or {props.related_yt_video_id}
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
                </MDBCardBody> */}
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