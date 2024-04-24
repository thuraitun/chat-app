const messageModel = require('../Models/messageModel');

// createMessage 
const createMessage = async(req, res) => {

    const { chatId, senderId, text } = req.body;

    const message = await messageModel({
        chatId,
        senderId,
        text
    });

    try {
        const response = await message.save();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// getMessage 

const getMessage = async(req, res) => {
    const { chatId } = req.params;

    try {
        const message = await messageModel.find({ chatId });
        res.status(200).json(message);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

module.exports = { createMessage, getMessage };