import React from 'react';
import { MDBCard, 
    MDBCardBody,
} from "mdbreact";


/* Functional component */

const VideoDisplay = (props) => {
    // Original yt_video_id: M7lc1UVf-VE
    return (
        <MDBCard className="col-md-12 mb-2">
            <MDBCardBody>
                <iframe id="ytplayer" 
                        type="text/html" 
                        width="640" 
                        height="360"
                        src={`https://www.youtube.com/embed/${props.yt_video_id}?autoplay=1&origin=http://example.com`}
                        frameborder="0"
                        title="Video Display"
                        >
                </iframe>
                <p className="mt-3">{props.title}</p>
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