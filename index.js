const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db/connection");
const Post = require("./models/Post");
const routes = require("./routes/switchboard")

const app = express();

app.use("/", routes)
app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());



// app.get("/", (req, res) => {
//     Post.find().then(results => {
//         res.json(results);
//     });
// });

// app.get("/show/:id", (req, res) => {
//     Post.findById(req.params.id).then(result => {
//         res.json(result);
//     });
// });

app.listen(app.get("port"), () => {
    console.log("Coming in LIVE from port " + app.get("port") + "!");
});
