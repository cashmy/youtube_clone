import axios from './axios'

const getAll = () => {
    return axios.get('/youtube_clone');
};

const get = id => {
    return axios.get(`/youtube_clone/${id}`);
};

const create = data => {
    return axios.post('/youtube_clone', data);
};

const remove = id => {
    return axios.delete(`youtube_clone/${id}`)
}

const likeSong = (id) => {
    return axios.patch(`youtube_clone/${id}`)
}

export default {
    getAll, get, create, remove, likeSong
};