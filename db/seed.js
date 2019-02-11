const mongoose = require("../db/connection");
const Post = mongoose.model("Post");
const data = require("./seed-data.json")

Post.remove({})
  .then(() => {
    Post.collection.insert(data)
      .then((effect) => {
        console.log(effect)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
