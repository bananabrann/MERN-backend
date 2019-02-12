const Post = require("../models/Post");

module.exports = {
    index: (req, res) => {
        console.log("controllers/show: index");
        // console.log(req.params)
        Post.findOne({ _id: req.params.id }).then(result => {
            res.json(result);
            // console.log("I hate this")
            // console.log(result)
        });
    },
    create: (req, res) => {
        Post.create({
            title: req.body.title,
            content: req.body.content
        }).then(() => {
            res.redirect("/");
        });
    },
    update: (req, res) => {
        Post.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, content: req.body.content }
        ).then(result => {
            res.json(result);
        });
    },

    destroy: (req, res) => {
        Post.findOneAndRemove({ _id: req.params.id })
            // .then(res.direct("/"))
            .then(() => {
                res.direct("/");
            });
    }
};
