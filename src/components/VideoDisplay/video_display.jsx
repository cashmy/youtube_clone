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
        this.getVideoInfoToState = this.getVideoInfoToState.bind(this)
    }
    
    getVideoInfoToState = async () => {
        let videoData = await getVideoInfo(this.props.yt_video_id)
        this.setState({
            id: this.props.yt_video_id,
            title: videoData.title,
            description: videoData.description,
        })
        return
    }
    
    componentDidMount() {
            this.getVideoInfoToState()
    }

    componentDidUpdate(nextProps, prevProps){
        if (this.props.yt_video_id !== this.state.id ) {
            this.getVideoInfoToState()
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
                         {this.state.title}
                    </MDBCardTitle>
                    <MDBCardText>
                        This is the description
                        {this.state.description}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        )
    }
} 


export default VideoDisplay;