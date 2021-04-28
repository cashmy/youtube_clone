import React, { useEffect, useState } from 'react';
import {
    MDBCol, 
    MDBCard, 
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdbreact";
import axios from 'axios'

const SearchResultsTable = (props) => {

    const [videoData, setVideoData] = useState({})

    useEffect(() => {
            console.log('\n*** Use Effect ***')
            console.log('Props.search: ', props.search_text)
            console.log('Props.related ID: ', props.related_yt_video_id )
            if (props.search_text === '' && props.related_yt_video_id !== '') {
                // TODO: Replace with services call ??
                axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=' + props.related_yt_video_id +'&type=video&key=AIzaSyA655YtG7MH6YYIr3ZJPsA89s3GlRhLA4I')
                    .then(response => { 
                        console.log("Related - Response data: ", response.data)
                        setVideoData(response.data) 
                    })
                    .catch(error => {alert('There was an error! ' + error.message)})
            } else {
                // TODO: Replace with services call ??
                axios.get('https://www.googleapis.com/youtube/v3/search?q='+ props.search_text +'&key=AIzaSyA655YtG7MH6YYIr3ZJPsA89s3GlRhLA4I')
                    .then(response => {
                        console.log("Search - Response data: ", response.data)
                         setVideoData(response.data) })
                    .catch(error => {alert('There was an error! ' + error.message)})
            }
            return 
    }, [props.search_text, props.related_yt_video_id])


    const handleOnClick = (video) => {
        console.log("I have been clicked: ", video)
        console.log(props.search_text)
        // TODO: update props info to VideoPlayer component
    }

    const mapVideoCards = () => {
        console.log("Video Data: ", videoData)
        let newVideosMapResult = props.videos.map((video, yt_video_id) => {
        //    video.key={yt_video_id}
            video.card = 
                <MDBCard className="mb-3"
                         onClick={() => handleOnClick(video)}
                         style={{ cursor: 'pointer' }}
                >
                    <MDBCardBody>
                        Video Card data:
                        {video.yt_video_id}
                        {video.title}
                        {video.description}
                    </MDBCardBody>
                </MDBCard>
            return video;
        });
        console.log('Map results: ',newVideosMapResult)
        return newVideosMapResult
    }

    const data = {
        columns: [
            {
                label: 'Video List',
                field: 'card'
            },
        ],
        rows: mapVideoCards()
    }

    return (
        <MDBCol className="col-md-3 mt-4">
            <MDBCard>
                <MDBTable scrollY borderless maxHeight='1200px'>
                    <MDBTableHead columns={data.columns}/>
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
    videos: [{
        yt_video_id: '1'
    },
    {
        yt_video_id: '2'
    },
    {
        yt_video_id: '3'
    },
    {
        yt_video_id: '4'
    },
    {
        yt_video_id: '5'
    },
    ]
}

export default SearchResultsTable;