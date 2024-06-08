const axios = require('axios');
const jwt = require('jsonwebtoken');

const TOKEN_SERVER_URL = 'http://20.244.56.144/test/auth';

const tokenRequestBody = {
    "companyName": "goMart",
    "clientID": "3c4dc4fe-8f20-40b5-ac5d-e2ed5e6e05b1",
    "clientSecret": "oOarUdWCcewmcJnQ",
    "ownerName": "Bidur Gupta",
    "ownerEmail": "bidur2112028@akgec.ac.in",
    "rollNo": "2100270120033"
};

let token = null;
let tokenExpiration = null;

const isTokenValid = () => {
    if (!token || !tokenExpiration) {
        return false;
    }
    const currentTime = Math.floor(Date.now() / 1000);
    return currentTime < tokenExpiration;
};

const tokenMiddleware = async (req, res, next) => {
    try {
        if (!isTokenValid()) {
            console.log('Fetching new token...');
            const response = await axios.post(TOKEN_SERVER_URL, tokenRequestBody);
            token = response.data.access_token;
            tokenExpiration = response.expires_in;
        } else {
            console.log('Using existing token.');
        }
        req.headers['Authorization'] = `Bearer ${token}`;
        next();
    } catch (error) {
        console.error('Error fetching token:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = tokenMiddleware;