import React, { useEffect, useState } from 'react';
import {
    MDBCol, 
    MDBCard,
    MDBCardVideo, 
    MDBCardBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdbreact";
import axios from 'axios'

const SearchResultsTable = (props) => {

    const [videoData, setVideoData] = useState({})

    useEffect(() => {
        // Temporarily deactivate YouTube API requests and using props data ...
            // if (props.search_text === '' && props.related_yt_video_id !== '') {
            //     // TODO: Replace with services call ??
            //     axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=' + props.related_yt_video_id +'&type=video&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0&maxResults=10')
            //         .then(response => { 
            //             console.log("Related - Response data: ", response.data.items)
            //             setVideoData(response.data.items) 
            //         })
            //         .catch(error => {alert('There was an error! ' + error.message)})
            // } else {
            //     // TODO: Replace with services call ??
            //     axios.get('https://www.googleapis.com/youtube/v3/search?q='+ props.search_text +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0&maxResults=10')
            //         .then(response => {
            //             console.log(">>> Search - Response data: ", response.data.items)
            //              setVideoData(response.data.items) })
            //         .catch(error => {alert('There was an error! ' + error.message)})
            // }
            setVideoData(props.items)
            return 
    }, [props.search_text, props.related_yt_video_id, props.items])


    const handleOnClick = (video) => {
        console.log("I have been clicked: ", video)
        console.log(props.search_text)
        // TODO: update props info to VideoPlayer component
    }

    const mapVideoCards = () => {

        console.log('\n*** Map Video Cards ***')
        console.log('Props.search: ', props.search_text)
        console.log('Props.related ID: ', props.related_yt_video_id )
        console.log("\n\n *** Video Data: ", videoData)
        console.log('typeof: ', typeof(videoData))

        // Cannot use "videoData.map" as it is an object (checked using typeof function)
        // So iterating over state variable and building my own array
        let videosMapResult = []
        for (let i = 0; i < videoData.length; i++) {

            let card = <MDBCard className="mb-3"
                                onClick={() => handleOnClick(card)}
                                style={{ cursor: 'pointer' }}
                        >
                            <MDBCardBody>
                                Related Video Card data:
                                {videoData[i].id.videoId}
                            </MDBCardBody>
                        </MDBCard>

            videosMapResult.push({
                yt_video_id: videoData[i].id.videoId, 
                card: card 
                })
         }



        console.log('VideosMapResult: ', videosMapResult)
        console.log('typeof videosMapResult: ', typeof(videosMapResult))

        let newVideosMapResult = props.videos.map((video) => {
            console.log("Video Record: ", video)
        //    video.key={yt_video_id}
            video.card = 
                <MDBCardVideo className="mb-3"
                         onClick={() => handleOnClick(video)}
                         style={{ cursor: 'pointer' }}
                >
                    <MDBCardBody>
                        Props Video Card data:
                        {video.yt_video_id}
                        {video.title}
                        {video.description}
                    </MDBCardBody>
                </MDBCardVideo>
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
        yt_video_id: 'MArhfhV5Z8A'
    },
    {
        yt_video_id: 'n7yvElqUUtQ'
    },
    {
        yt_video_id: 'DgW14g0chfU'
    },
    {
        yt_video_id: 'iC1K-G8m9PI'
    },
    {
        yt_video_id: '5jEWNUQzrXY'
    },
    ],
    items: [
        {
            "kind": "youtube#searchResult",
            "etag": "yx7a8-Nd08nUyfdfdD5hz8R8FIo",
            "id": {
                "kind": "youtube#video",
                "videoId": "MArhfhV5Z8A"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "b1H8Bnr226C4zW2fqtRMwPJjPh0",
            "id": {
                "kind": "youtube#video",
                "videoId": "n7yvElqUUtQ"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "U9eKJUwEhOIS2M2H_3NBH5ns-sM",
            "id": {
                "kind": "youtube#video",
                "videoId": "DgW14g0chfU"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-W_n0Ey78KhyOmyOdRNy3S1RnpM",
            "id": {
                "kind": "youtube#video",
                "videoId": "iC1K-G8m9PI"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "GxG4Bm8rH-Fe-19tumzlMZ4nRRg",
            "id": {
                "kind": "youtube#video",
                "videoId": "5jEWNUQzrXY"
            }
        }
    ]
}

export default SearchResultsTable;