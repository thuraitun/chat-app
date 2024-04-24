const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema(
    {
        chatId: String,
        senderId: String,
        text: String,
    },
    {
        timestamps: true,
    }
)

const messageModel = mongoose.model('Message', mongooseSchema);

module.exports = messageModel;