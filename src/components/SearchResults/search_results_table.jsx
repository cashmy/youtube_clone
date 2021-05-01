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
import './search_results_table.css'
import axios from 'axios'
import VideoCard from './video_card'


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


    // const handleOnClick = (video_id, props) => {
    //     props.parentCallback(video_id)
    // }

    const handleVideoCardClick = (video_id) => {
        props.parentCallback(video_id)
    }

    const mapVideoCards = () => {
        if (videoData === '') return
        // Cannot use "videoData.map" as it is an object (checked using typeof function)
        // So iterating over state variable and building my own array
        let videosMapResult = []

        for (let i = 0; i < videoData.length; i++) {

            let card = <VideoCard videoData={videoData[i]} 
                                  parentCallback={handleVideoCardClick}
                        />

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

            