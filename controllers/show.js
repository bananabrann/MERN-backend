const { Post } = require("../models/Post");

module.exports = {
    index: (req, res) => {
        Post.find({_id: req.params.id }).then(result => {
            res.json(result);
        });
    },
    // create: (req, res) => {

    // },
    // update: (req, res) => {

    // },
    // destroy: (req, res) => {
        
    // }
};
