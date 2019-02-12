const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db/connection");
const routes = require("./routes/switchboard")
const Post = require("./models/Post");

console.log("index: Arrived")

const app = express();

app.use(cors());
app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true
  })
  );
  app.use("/", routes)

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
