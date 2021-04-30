import axios from 'axios'

const getVideoInfo = (yt_video_id) => {

        let videoData = {}
        console.log('Axios Call for video info')
    
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ yt_video_id +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0')
            .then(response => {
                console.log('\n\n*** Services ***');
                videoData['title'] = response.data.items[0].snippet.title
                videoData['desription'] = response.data.items[0].snippet.description
                console.log('Video Data:', videoData)
                })
            .catch(error => {alert('There was an error! ' + error.message)})
    return videoData
}

export default getVideoInfo;