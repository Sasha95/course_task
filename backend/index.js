const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data.json")

var cors = require('cors')

const app = express();
app.use(cors())
const router = express.Router();
const port = process.env.PORT || 7000;

router.get("/data", async (req, res) => {
    res.send(JSON.stringify(data))
});

app.use((_, res, next) => {
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use("/api", router);
app.use('/static', express.static(__dirname + "/images"))

app.listen(port, () => console.log(`server running on port ${port}`));