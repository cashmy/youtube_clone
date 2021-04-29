import http from './axios';

class LibraryServices {
    getAll = () => {
    return http.get('/comments');
    };

    get = id => {
    return http.get(`/comments/${id}`);
    };

    createComment = data => {
    return http.post('/comments', data);
    };

    updateComment = (id, data) => {
        return http.put(`/comments${id}`, data)
    }

    remove = id => {
    return http.delete(`comments/${id}`)
    }

    likeSong = (id) => {
    return http.patch(`comments/${id}`)
    }

    getVideoById = (yt_video_id) => {
        return `https://www.youtube.com/embed/${yt_video_id}?autoplay=1&origin=http://example.com`
    }

    // getVideos = () => {
    //     let videoData = {}

    //     if (props.search_text === '' && props.related_yt_video_id !== '') {
    //         // TODO: Replace with services call ??
    //         axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=' + props.related_yt_video_id +'&type=video&key=AIzaSyA655YtG7MH6YYIr3ZJPsA89s3GlRhLA4I&maxResults=5')
    //             .then(response => { videoData = response.data })
    //             .catch(error => {alert('There was an error! ' + error.message)})
    //     } else {
    //         // TODO: Replace with services call ??
    //         axios.get('https://www.googleapis.com/youtube/v3/search?q='+ props.search_text +'&key=AIzaSyA655YtG7MH6YYIr3ZJPsA89s3GlRhLA4I&maxResults=5')
    //             .then(response => { videoData = response.data })
    //             .catch(error => {alert('There was an error! ' + error.message)})
    //     }
    //     return videoData
    // }



}

export default new LibraryServices();