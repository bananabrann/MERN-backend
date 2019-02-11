const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    content: String
});

module.exports = mongoose.model("Post", PostSchema);