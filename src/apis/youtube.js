import axios from 'axios';

const KEY = 'AIzaSyBQGrfI9W7LtUhKBCDmJHjTMqFNhFJ2sOQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


