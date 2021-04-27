import http from './axios'

class LibraryServices {
    getAll = () => {
    return http.get('/youtube_clone');
    };

    get = id => {
    return http.get(`/youtube_clone/${id}`);
    };

    create = data => {
    return http.post('/youtube_clone', data);
    };

    remove = id => {
    return http.delete(`youtube_clone/${id}`)
    }

    likeSong = (id) => {
    return http.patch(`youtube_clone/${id}`)
    }

    getVideo = (yt_video_id) => {
        return `https://www.youtube.com/embed/${yt_video_id}?autoplay=1&origin=http://example.com`
    }

}

export default new LibraryServices();