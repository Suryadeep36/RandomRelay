import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer);
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


io.on('connection', (socket) => {
    socket.emit("Hello");
    app.post("/joinRoom", (req, res) => {
        let {name, roomId} = req.body;
        console.log(name + roomId)
        res.send({
            msg: "Data received."
        })
    })
    app.post("/createRoom", (req, res) => {
        console.log(req.body);
        res.send({
            msg: "Data received."
        })
    })

})
httpServer.listen(port, () => {
    console.log("Server running at port " + port);
});