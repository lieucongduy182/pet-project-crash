import axios from 'axios';

export default axios.create({
    baseURL: 'https://6274f68c5dc4f5764b9c1500.mockapi.io',
    headers: {
        'Content-type': 'application/json',
    },
});
