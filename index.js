const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
// const Translation = mongoose.model("Translation");
// const routes = require("./routes/switchboard.js");

app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());
// app.use("/", routes);

app.listen(app.get("port"), () => {
    console.log("Server Live! Port: " + app.get("port"));
});

// app.listen(3001, () => {
//     console.log("server is running");
//   });