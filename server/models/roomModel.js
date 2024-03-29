const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
        topic: { type: String, required: true },
        roomType: { type: String, required: true },
        ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        totalClient: { type: Number, default: 0 },
        speakers: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            ],
            required: false,
        },
       
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Room', roomSchema, 'rooms');