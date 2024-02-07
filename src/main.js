import fetch from 'isomorphic-fetch'; // Assuming ES module syntax
import https from 'https';
import fs from 'fs';

const agent = new https.Agent({
    key: fs.readFileSync(`../serverkey.pem`),
    cert: fs.readFileSync(`../servercert.pem`),
    rejectUnauthorized: false // This should be used with caution
});

fetch('https://127.0.0.1:8443/api/v1/', {agent})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));