const mongoose = require("mongoose");

const PostsModels = mongoose.model(
   "node-api" /*premier paramétre nom du base de données */,
   {
      author: {
         type: String,
         required: true,
      },
      message: {
         type: String,
         required: true,
      },
      date: {
         type: Date,
         default: Date.now,
      },
   } /** deuxiéme paramétre le model du table */,
   "posts" /** troisiéme  paramétre le nom du table */
);

module.exports = { PostsModels };
