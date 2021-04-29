import React, {useEffect, useState } from 'react';
import { MDBCard, 
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from "mdbreact";
import getVideoInfo from '../../Services/yt_axios';


/* Functional component */

const VideoDisplay = (props) => {

    const [videoTitle, setVideoTitle] = useState('')
    const [videoDescription, setVideoDescription] = useState('')
    // Initialization


    let videoData = {
        'title': props.title, 
        'description': props.description,
    }

    function trialAsync() {
        let tempVideoData = {};
        tempVideoData['title'] = 'New Title'
        tempVideoData['description'] = 'New Description'
        console.log("Inside Trial Async ...", tempVideoData)
        return tempVideoData
    }   
    // Async call to rtv data
    useEffect(() => {
        setVideoData(getVideoInfo(props.yt_video_id))
    },[props.yt_video_id])

    videoData = trialAsync()
    // Initial render 
    useEffect(() => {
        console.log('\n\n*** Video Display - Props Change ***')
        console.log('*starting videoTitle: ', videoTitle)
        console.log('props videoTitle: ', props.title)
        console.log('props videoTitle: ', videoData.title)
        if (videoTitle === '' && props.title !== '') {
            console.log('* VDsp - initializing from props')
            setVideoTitle(props.title)
            setVideoDescription(props.description)
            console.log("**ending videoTitle: ", videoTitle) 
        }
    }, [props.title, props.description])


    useEffect(() => {
        console.log('\n\n*** Video Display - video Items ***')
        console.log('*starting videoTitle: ', videoTitle)
        console.log('props videoTitle: ', props.title)
        console.log('props videoTitle: ', videoData.title)
        if (videoTitle !== props.title) {
            console.log('* VDsp - Getting Changes')
            setVideoTitle(videoData.title)
            setVideoDescription(videoData.description)
            console.log("**ending videoTitle: ", videoTitle) 
        }
    },[videoTitle, videoDescription])


    

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
    title: 'PROPS: Skills You Will Learn at devCodeCamp',
    description: "PROPS: It's more than just learning to code. Our Director of Instruction talks more about the skills you will learn to set you up for success as a Software Developer."
}

export default VideoDisplay;