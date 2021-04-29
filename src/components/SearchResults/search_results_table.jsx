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
import axios from 'axios'
import './search_results_table.css'

const SearchResultsTable = (props) => {

    const [videoData, setVideoData] = useState({})

    useEffect(() => {
        // Temporarily deactivate YouTube API requests and using props data ...
            // if (props.search_text === '' && props.related_yt_video_id !== '') {
            //     // TODO: Replace with services call ??
            //     axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=' + props.related_yt_video_id +'&type=video&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0&maxResults=10')
            //         .then(response => { 
            //             setVideoData(response.data.items) 
            //         })
            //         .catch(error => {alert('There was an error! ' + error.message)})
            // } else {
            //     // TODO: Replace with services call ??
            //     axios.get('https://www.googleapis.com/youtube/v3/search?q='+ props.search_text +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0&maxResults=10')
            //         .then(response => {
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
        let tempTitle = ''
        let tempDescription = ''
        for (let i = 0; i < videoData.length; i++) {


                console.log('Inside loop: ', i)
                // axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ videoData[i].id.videoId +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0')
                //     .then(response => {

                //         tempTitle = 'snippet.title'
                //         tempDescription = 'snippet.description'
                //         console.log('Snippet Title: ' + tempTitle)
                //         console.log('>>> ',response.data.items[0].snippet.title)
                //         let card = 
                //             <MDBCard className="mb-3"
                //                     onClick={() => handleOnClick(videoData[i].id.videoId )}
                //                     style={{ cursor: 'pointer' }}
                //             >
                //                 <MDBRow className="g-0">
                //                     <MDBCol className="md-4">
            
                //                             <iframe id="ytplayer" 
                //                             type="text/html"
                //                             width="150"  
                //                             height="auto"
                //                             src={'https://www.youtube.com/embed/' + videoData[i].id.videoId + '?autoplay=1&origin=http://example.com'}
                //                             frameBorder="0"
                //                             title="Video Display"
                //                             />
                //                     </MDBCol>
                //                     <MDBCol className="md-8">
                //                         <MDBCardBody>
                //                             <MDBCardTitle>
                //                                 response.data.items[0].snippet.title
                //                             </MDBCardTitle>
                //                             <MDBCardText>
                //                                 response.data.items[0].snippet.description
                //                             </MDBCardText>
                //                         </MDBCardBody>
                //                     </MDBCol>
                //                 </MDBRow>
                //             </MDBCard>
        
                //         videosMapResult.push({
                //             yt_video_id: videoData[i].id.videoId, 
                //             card: card 
                //             })
                //         })
                //     .catch(error => {alert('There was an error! ' + error.message)})
            

            let card = 
                <MDBCard className="mb-3"
                         onDoubleClick={() => handleOnClick(videoData[i].id.videoId)}
                         style={{ cursor: 'pointer' }}
                >
                    <MDBRow className="g-0">
                        <MDBCol className="md-4">

                                <iframe id="ytplayer" 
                                type="text/html"
                                width="150"  
                                height="auto"
                                src={'https://www.youtube.com/embed/' + videoData[i].id.videoId + '?autoplay=1&origin=http://example.com'}
                                frameBorder="0"
                                title="Video Display"
                                />
                        </MDBCol>
                        <MDBCol className="md-8">
                            <MDBCardBody>
                                <MDBCardTitle>
                                    Title
                                </MDBCardTitle>
                                <MDBCardText>
                                    Description
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



        // console.log('VideosMapResult: ', videosMapResult)
        // console.log('typeof videosMapResult: ', typeof(videosMapResult))

        // let newVideosMapResult = props.videos.map((video) => {
        //     console.log("Video Record: ", video)
        // //    video.key={yt_video_id}
        //     video.card = 
        //         <MDBCard className="mb-3"
        //                  onClick={() => handleOnClick(video)}
        //                  style={{ cursor: 'pointer' }}
        //         >
        //             <MDBRow className="g-0">
        //                 <MDBCol className="md-4">

        //                         <iframe id="ytplayer" 
        //                         type="text/html"
        //                         width="150"  
        //                         height="auto"
        //                         src={`https://www.youtube.com/embed/${video.yt_video_id}?autoplay=1&origin=http://example.com`}
        //                         frameBorder="0"
        //                         title="Video Display"
        //                         />
        //                 </MDBCol>
        //                 <MDBCol className="md-8">
        //                     <MDBCardBody>
        //                         <MDBCardTitle>
        //                             Title
        //                         </MDBCardTitle>
        //                         <MDBCardText>
        //                             Description
        //                         </MDBCardText>
        //                     </MDBCardBody>
        //                 </MDBCol>
        //             </MDBRow>
        //         </MDBCard>
        //     return video;
        // });

         console.log('Video Map Results: ', videosMapResult)
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
        },
        {
            "kind": "youtube#searchResult",
            "etag": "YAG-UiDGoxdwNfPvxAn05hV82fU",
            "id": {
                "kind": "youtube#video",
                "videoId": "u4XXkujwPus"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "DCN-1vaFZfULokPAMciHaFOzfoM",
            "id": {
                "kind": "youtube#video",
                "videoId": "p597uPO1RYc"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dHfFIgUVPxLiURhvKclmE1WDw6g",
            "id": {
                "kind": "youtube#video",
                "videoId": "fEGBbblR3YE"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "n9Xm2UYGiuubaRVrOVOohQflJcI",
            "id": {
                "kind": "youtube#video",
                "videoId": "5esSnoLjdqc"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Z87nbuWus2-oM1NXtEZ6oywU9GI",
            "id": {
                "kind": "youtube#video",
                "videoId": "CVL1E1v-lF0"
            }
        }
    ]
}

export default SearchResultsTable;