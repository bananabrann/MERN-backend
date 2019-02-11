const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db/connection");
const Post = require("./models/Post");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
    Post.find().then(results => {
        res.json(results);
    });
    // .catch(err => {
    //     console.log(err);
    // });
});

app.get("/show/:id", (req, res) => {
    Post.findById(req.params.id).then(result => {
        res.json(result);
    });
});

app.listen(app.get("port"), () => {
    console.log("Coming in LIVE from port " + app.get("port") + "!");
});
