import axios from 'axios'

const getVideoInfo = (yt_video_id) => {

        let videoData = {}
        console.log('First Call')
    
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+ yt_video_id +'&key=AIzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkN0')
            .then(response => {
                console.log('\n\n*** Services ***');
                // console.log('Video title :', response.data.items[0].snippet.title, '\n')
                videoData['title'] = response.data.items[0].snippet.title
                videoData['desription'] = response.data.items[0].snippet.description
                // console.log('videoData: ', videoData)
                })
            .catch(error => {alert('There was an error! ' + error.message)})
    return videoData
}

export default getVideoInfo;