import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.post("/signin", (req, res) => {
    console.log(req.body);
    res.send({
        msg: "Data received."
    })
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})