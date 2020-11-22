const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data/data.json")

var cors = require('cors');

const app = express();
app.use(cors())
const router = express.Router();
const port = process.env.PORT || 7000;

const filterStatus = (status) => {
    return data.filter(x => x.status == status && x.status != 3)
}
const getData = (courses = data) => {
    return courses.filter(x => x.status != 3)
}

router.get("/search", async (req, res) => {
    const query = req.query
    if (query.title && query.title != '') {
        const filterData = data.filter(x => x.title.includes(query.title))
        res.send(JSON.stringify(getData(filterData)))
    }else{
        res.send(JSON.stringify(getData()))
    }
});
router.get("/filter", async (req, res) => {
    const query = req.query
    const isDigit = Number.parseInt(query.status)
    if (query.status && isDigit != NaN && isDigit >= 0 && isDigit <= 3) {
        return res.send(JSON.stringify(filterStatus(query.status)))
    }else if(isDigit != NaN){
        res.send(JSON.stringify(getData()))
    }
    else {
        return res.send([])
    }
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
app.use('/static', express.static(__dirname + "/data/images"))

app.listen(port, () => console.log(`server running on port ${port}`));