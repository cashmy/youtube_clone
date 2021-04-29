import React, {useEffect, useState } from 'react';
import { MDBCard, 
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from "mdbreact";
import getVideoInfo from '../../Services/yt_axios';
import axios from 'axios'

/* Functional component */

const VideoDisplay = (props) => {

    const [videoTitle, setVideoTitle] = useState('')
    const [videoDescription, setVideoDescription] = useState('')
    
    // let videoData = getVideoInfo(props.yt_video_id)
    let videoData = {
        'title': props.title, 
        'description': props.description,
    }

    // // Initial Render only
    // useEffect(() => {
    //     setVideoTitle(props.title)
    //     setVideoDescription(props.description)
    //     console.log('\n\n*** Video Display - Initial useEffect ***')
    //     console.log("Props title: ", props.title)
    // },[props.title, props.description])

    useEffect(() => {
        if (videoData !== '') {
            setVideoTitle(videoData.title)
            setVideoDescription(videoData.description)
            console.log('\n\n*** Video Display - Datachange useEffect ***')
            console.log("Props title: ", videoTitle) }
    },[videoData])


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
                <MDBCardTitle>
                    {videoTitle}
                </MDBCardTitle>
                <MDBCardText>
                    {videoDescription}
                </MDBCardText>
                {/* <p className="mt-3">{props.title}</p>
                <p>{props.description}</p> */}
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