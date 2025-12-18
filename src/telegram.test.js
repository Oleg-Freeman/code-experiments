const telegram = require('../utils/telegram');
const config = require('../config');

// test sending messages
async function testSendMessage() {
    await telegram.sendMessage({
        text: 'Test message from telegram.test.js',
        chatId: config.telegram.chatId,
    });
}

// Test sending media
async function testSendDocument() {
    const fileContent = 'This is a test document sent from telegram.test.js';

    await telegram.sendDocument({
        document: fileContent,
        chatId: config.telegram.chatId,
    });
}

// Test send message with long text more than 4096 characters
async function testSendLongMessage() {
    const longText = 'A'.repeat(5000); // 5000 characters of 'A'

    await telegram.sendMessage({
        text: longText,
        chatId: config.telegram.chatId,
    });
}

module.exports = {
    testSendMessage,
    testSendDocument,
    testSendLongMessage,
};
