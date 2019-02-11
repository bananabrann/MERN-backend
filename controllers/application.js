const { Post } = require("../models/Post");

module.exports = {
    index: (req, res) => {
        Post.find({}).then(result => {
            res.json(result);
        });
    },
};
