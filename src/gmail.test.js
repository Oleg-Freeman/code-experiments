const { google } = require('googleapis');
const { web: json } = require('./google_greds.json');

console.log(json);

const { client_id, client_secret, redirect_uris } = json;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
