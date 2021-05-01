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

    removeComment = id => {
    return http.delete(`comments/${id}`)
    }

    editComment = (id, data) => {
    return http.put(`comments/${id}`, data)
    }

    getVideoById = (id) => {
        return http.get(`youtube_clone/${id}`)
    } 
}
export default new LibraryServices();