import React from 'react';
import { MDBCard, 
    MDBCardBody,
} from "mdbreact";
import getVideoInfo from '../../Services/yt_axios';
import axios from 'axios'

/* Functional component */

const VideoDisplay = (props) => {
    let videoData = axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${props.yt_video_id}&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0`)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    console.log('hello!!')
    console.log('\n\n*** Services - outside ***')
    console.log('Video Snippet :', videoData.data, '\n')
    // videoData['title'] = videoData.data.items[0].snippet.title
    // videoData['desription'] = videoData.data.items[0].snippet.description
    // Original yt_video_id: M7lc1UVf-VE
    return (
        <MDBCard className="col-md-12 mb-2">
            <MDBCardBody>
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src={`https://www.youtube.com/embed/${props.yt_video_id}?autoplay=1&origin=http://example.com`}
                        frameBorder="0"
                        title="Video Display"
                        >
                </iframe>
                <p className="mt-3">{videoData.title}</p>
                <p>{props.description}</p>
            </MDBCardBody>
        </MDBCard>
    )
} 

// Set default props
VideoDisplay.defaultProps = {
    yt_video_id : 'V65uAHzofbg',
    title: 'Skills You Will Learn at devCodeCamp',
    description: "It's more than just learning to code. Our Director of Instruction talks more about the skills you will learn to set you up for success as a Software Developer."
}

export default VideoDisplay;