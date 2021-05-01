import {
    MDBCol,
    MDBRow, 
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact";
import './search_results_table.css'


const VideoCard = (props) => {
        
    const reduceText = (text) => {
        if (text.length > 50) {
            let tempText = text.substr(0,49)
            tempText = tempText + ' ...'
            return tempText 
        } else {
            return text
        }
    }

    const handleOnClick = (video_id, props) => {
        props.parentCallback(video_id)
    }

    return (
        <MDBCard className="mb-3"
                    onClick={() => handleOnClick(props.videoData.id.videoId, props)}
                    style={{ cursor: 'pointer' }}
        >
            <MDBRow className="g-0">
                <MDBCol className="md-4 align-middle">
                    <img 
                        width = {props.videoData.snippet.thumbnails.medium.width}
                        height = {props.videoData.snippet.thumbnails.medium.height}
                        src={props.videoData.snippet.thumbnails.medium.url}
                        // src={'https://www.youtube.com/embed/' + videoData[i].id.videoId + '?autoplay=1&origin=http://example.com'}
                        className="img-fluid" alt=""
                    />
                </MDBCol>
                <MDBCol className="md-8">
                    <MDBCardBody>
                        <MDBCardTitle>
                            {props.videoData.snippet.title}
                        </MDBCardTitle>
                        <MDBCardText>
                            {reduceText(props.videoData.snippet.description)}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>
    )
}

export default VideoCard