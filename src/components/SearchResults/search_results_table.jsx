import React, { useEffect, useState } from 'react';
import {
    MDBCol,
    MDBRow, 
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBTable,
    MDBTableBody,
} from "mdbreact";
// import getVideoInfo from '../../Services/yt_axios';
import './search_results_table.css'
import axios from 'axios'


const SearchResultsTable = (props) => {

    const [videoData, setVideoData] = useState({})


    useEffect(() => {
            if (props.search_text === '' && props.related_yt_video_id !== '') {
                // TODO: Replace with services call ??
                axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=' + props.related_yt_video_id +'&type=video&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0&maxResults=10&part=snippet')
                    .then(response => { 
                        setVideoData(response.data.items) 
                    })
                    .catch(error => {alert('There was an error! ' + error.message)})
            } else {
                // TODO: Replace with services call ??
                axios.get('https://www.googleapis.com/youtube/v3/search?q='+ props.search_text +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0&maxResults=10&part=snippet')
                    .then(response => {
                         setVideoData(response.data.items) })
                    .catch(error => {alert('There was an error! ' + error.message)})
            }
            return 
    }, [props.search_text, props.related_yt_video_id])


    const handleOnClick = (video_id, props) => {

        // TODO: update props info to VideoPlayer component
        props.parentCallback(video_id)
    }

    const mapVideoCards = () => {
        if (videoData === '') return
        // Cannot use "videoData.map" as it is an object (checked using typeof function)
        // So iterating over state variable and building my own array
        let videosMapResult = []

        for (let i = 0; i < videoData.length; i++) {

            // Reduce Description size (limit 50 characters)
            let tempDescription = ''
            let tempString = videoData[i].snippet.description
            if (tempString.length > 50) {
                let tempText = tempString.substr(0,49)
                tempText = tempText + ' ...'
                console.log("Reducted Text: ", tempText)
                tempDescription = tempText
            } else {
                tempDescription = videoData[i].snippet.description
            }
        

            let card = 
                <MDBCard className="mb-3"
                         onClick={() => handleOnClick(videoData[i].id.videoId, props)}
                         style={{ cursor: 'pointer' }}
                >
                    <MDBRow className="g-0">
                        <MDBCol className="md-4 align-middle">
                            <img 
                                width = {videoData[i].snippet.thumbnails.medium.width}
                                height = {videoData[i].snippet.thumbnails.medium.height}
                                src={videoData[i].snippet.thumbnails.medium.url}
                                // src={'https://www.youtube.com/embed/' + videoData[i].id.videoId + '?autoplay=1&origin=http://example.com'}
                                className="img-fluid" alt=""
                            />
                        </MDBCol>
                        <MDBCol className="md-8">
                            <MDBCardBody>
                                <MDBCardTitle>
                                    {videoData[i].snippet.title}
                                </MDBCardTitle>
                                <MDBCardText>
                                    {tempDescription}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

            videosMapResult.push({
                yt_video_id: videoData[i].id.videoId,
                card: card 
                })
         }

        return videosMapResult
    }

    const data = {

        rows: mapVideoCards()
    }

    return (
        <MDBCol className="col-md-3 mt-4">
            <MDBCard>
                <MDBTable scrollY borderless maxHeight='1200px'>
                    <MDBTableBody rows={data.rows} />
                </MDBTable>
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

            