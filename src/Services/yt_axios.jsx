import axios from 'axios'

const getVideoInfo = async (yt_video_id) => {
    const yt_httpClient = axios.create()
    yt_httpClient.defaults.timeout = 5000;

    let videoData = {}
    console.log('First Call')

    const response = await yt_httpClient.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ yt_video_id +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0')
    
    console.log('\n\n*** Services - outside ***')
    console.log('Video Snipet :', response.data.items[0].snippet, '\n')
    videoData['title'] = response.data.items[0].snippet.title
    videoData['desription'] = response.data.items[0].snippet.description


    
    // axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ yt_video_id +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0')
    //      .then(response => {
    //          console.log('\n\n*** Services ***');
    //          console.log('Video Snipet :', response.data.items[0].snippet, '\n')
    //          videoData['title'] = response.data.items[0].snippet.title
    //          videoData['desription'] = response.data.items[0].snippet.description
    //         })
    //      .catch(error => {alert('There was an error! ' + error.message)})

    return videoData
}

export default getVideoInfo;