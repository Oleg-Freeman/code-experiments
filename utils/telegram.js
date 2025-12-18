'use strict';

const https = require('https');
const config = require('../config');

class Telegram {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    makeRequest({ method, path, jsonBody = {}, multipartData = {}, query = {} }) {
        let params = '';

        if (Object.keys(query).length > 0) {
            for (const key of Object.keys(query)) {
                if (params.length > 0) {
                    params += '&';
                }
                params += key + '=' + query[key];
            }
        }

        const url = new URL(
            `https://api.telegram.org/bot${this.apiKey}/${path}${params.length > 0 ? `?${params}` : ''}`
        );

        return new Promise((resolve, reject) => {
            const req = https.request(
                {
                    method,
                    path: `${url.pathname}${url.search}`,
                    host: url.hostname,
                },
                (res) => {
                    let body = [];

                    res.on('data', (chunk) => {
                        body.push(chunk);
                    });
                    res.on('end', () => {
                        body = JSON.parse(Buffer.concat(body).toString());

                        if (!body?.ok) {
                            reject(new Error(body?.description || 'Telegram API: Error sending request'));
                        }

                        resolve(body.result);
                    });
                    res.on('error', (error) => {
                        reject(error);
                    });
                }
            );

            req.on('error', (error) => reject(error));

            if (Object.keys(jsonBody).length > 0) {
                req.setHeader('Content-type', 'application/json');
                req.write(JSON.stringify(jsonBody));
            } else if (Object.keys(multipartData).length > 0) {
                const { chatId, document } = multipartData;
                const boundary = '----FormBoundary' + Math.random().toString(36);

                let body = `--${boundary}\r\n`;
                body += `Content-Disposition: form-data; name="chat_id"\r\n\r\n`;
                body += `${chatId}\r\n`;
                body += `--${boundary}\r\n`;
                body += `Content-Disposition: form-data; name="document"; filename="test-document.txt"\r\n`;
                body += `Content-Type: text/plain\r\n\r\n`;
                body += `${document}\r\n`;
                body += `--${boundary}--\r\n`;

                req.setHeader('Content-Type', `multipart/form-data; boundary=${boundary}`);
                req.setHeader('Content-Length', Buffer.byteLength(body));
                req.write(body);
            }

            req.end();
        });
    }

    sendMessage({ text, chatId }) {
        return this.makeRequest({
            path: 'sendMessage',
            method: 'POST',
            jsonBody: { text, chat_id: chatId, parse_mode: 'HTML' },
        });
    }

    sendDocument({ document, chatId }) {
        return this.makeRequest({
            path: 'sendDocument',
            method: 'POST',
            multipartData: {
                document,
                chatId,
            },
        });
    }
}

const telegram = new Telegram(config.telegram.apiKey);

module.exports = telegram;
