import React, { Component } from 'react';
import { MDBCard, 
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBIframe
} from "mdbreact";
import getVideoInfo from '../../Services/yt_axios';

class VideoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: ''
        }
    }
    static defaultProps = {
        yt_video_id : 'V65uAHzofbg',
        title: 'PROPS: Skills You Will Learn at devCodeCamp',
        description: "PROPS: It's more than just learning to code. Our Director of Instruction talks more about the skills you will learn to set you up for success as a Software Developer."    
    }
    
    getVideoInfoToState = async () => {
        console.log('Accessing info ...')
        let videoData = await getVideoInfo(this.props.yt_video_id)
        console.log('After await ...', videoData)
        console.log('>>',videoData['title'])
        this.setState({
            id: this.props.yt_video_id,
            title: videoData.title,
            description: videoData.description,
        })
        console.log('Set state happened: ', this.state)
        return
    }
    
    componentDidMount() {
        if (this.props.yt_video_id !== this.state.id) {

            let videoData = getVideoInfo(this.props.yt_video_id)
            console.log('videoData: ', videoData)
            // this.getVideoInfoToState()
        }
    }

    render() {
        return (
            <MDBCard className="col-md-12 mb-2">
                <MDBCardBody>
                    <MDBIframe id="ytplayer" 
                            type="text/html" 
                            // width="320" 
                            // height="180"
                            src={`https://www.youtube.com/embed/${this.props.yt_video_id}?autoplay=1&origin=http://example.com`}
                            frameBorder="0"
                            title="Video Display"
                            >
                    </MDBIframe>
                    <MDBCardTitle className="mt-2">
                         {this.props.title}
                    </MDBCardTitle>
                    <MDBCardText>
                        This is the description
                        {this.state.videoDescription}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        )
    }
} 


export default VideoDisplay;