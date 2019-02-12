const Post = require("../models/Post");

module.exports = {
    index: (req, res) => {
        console.log("controllers/app: index");

        Post.find({})
            .then(result => {
                res.json(result);
            })
        // res.send("hi");
    }
};
