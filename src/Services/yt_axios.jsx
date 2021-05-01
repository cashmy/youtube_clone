import axios from 'axios'

const getVideoInfo = async (yt_video_id) => {
    let videoData = {}  
    let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ yt_video_id +'&key=AIzaSyDhPzky3hbBomJ4zBtc4IrdqMF4emK3vX4')
            videoData.title = response.data.items[0].snippet.title
            videoData.description = response.data.items[0].snippet.description
    return videoData
}

export default getVideoInfo;