const Post = require("../models/Post");

module.exports = {
    index: (req, res) => {
        console.log("controllers/show: index")
        // console.log(req.params)
        Post.findOne({_id: req.params.id }).then(result => {
            res.json(result)
            // console.log("I hate this")
            // console.log(result)
        });
    },
    // create: (req, res) => {

    // },
    // update: (req, res) => {

    // },
    // destroy: (req, res) => {
        
    // }
};
