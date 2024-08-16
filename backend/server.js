import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import room from "./models/room.js"

const app = express();
app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer);
let port = process.env.PORT || 3000;

main().catch(err => console.log(err));

async function main() {
    //local db connection for now!!
    await mongoose.connect('mongodb://127.0.0.1:27017/randomRelayDB');
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post("/joinRoom", (req, res) => {
    let {name, roomId} = req.body;
    room.findOne({
        roomName: roomId
    }).then((ele) => {
        if(ele){
            ele.users.push({
                username: name
            })
            ele.save();
            res.send({
                msg: "Room Joined!!"
            })
        }
        else{
            res.send({
                msg: "Room doesn't exists."
            })
        }
    })
   
})
app.post("/createRoom", (req, res) => {
    let {name, roomName} = req.body;
    room.findOne({
        roomName: roomName
    }).then((ele) => {
        if(ele){
            res.send({
                msg: "Room already exists"
            })
        }
        else{
            const newRoom = new room({
                roomName: roomName
            })
            newRoom.users.push({
                username: name
            })
            newRoom.save();
            res.send({
                msg: "Room created!!"
            })
        }
    })
})

httpServer.listen(port, () => {
    console.log("Server running at port " + port);
});