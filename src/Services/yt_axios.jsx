import axios from 'axios'

const getVideoInfo = async (yt_video_id) => {
    let videoData = {}  
    let response = await axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ yt_video_id +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0')
            videoData.title = response.data.items[0].snippet.title
            videoData.description = response.data.items[0].snippet.description
    return videoData
}

export default getVideoInfo;