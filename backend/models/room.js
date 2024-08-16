import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomName: String,
    users: [{
        username: String
    }]
});

const room = mongoose.model('Room', roomSchema);

export default room;


