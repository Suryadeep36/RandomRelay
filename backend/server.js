import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { createServer } from "http";
import { Server } from "socket.io";
import { count } from 'console';

const app = express();
app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer);
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


io.on('connection', (socket) => {
    socket.on("testCreate", (payload) => {
        console.log("User connected at create room")
        const {name, roomName} = payload;
        if(!io.sockets.adapter.rooms.get(roomName)){
            socket.join(roomName);
            console.log("Joined " + roomName);
        }
        else{
            console.log("Room already exists");
        }
        io.to(roomName).emit("IMP");
    })
    socket.on("testJoin", (payload) => {
        console.log("User connected at join room")
        const {name, roomId} = payload;
        if(io.sockets.adapter.rooms.get(roomId)){
            socket.join(roomId);
            console.log("Joined " + roomId);
        }
        else{
            console.log("Room doesn't exists");
        }
    })
    
})
httpServer.listen(port, () => {
    console.log("Server running at port " + port);
});