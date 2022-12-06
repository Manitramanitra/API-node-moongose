const { Router } = require("express");
const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;

const { PostsModels } = require("../models/postsModels");

router.get("/", (req, res) => {
   PostsModels.find((err, docs) => {
      if (!err) res.send(docs);
      else console.error("error to get data " + err);
   });
});

router.post("/", (req, res) => {
   console.log(req.body);
   const newRecord = new PostsModels({
      author: req.body.author,
      message: req.body.message,
   });

   newRecord.save((err, docs) => {
      if (err) console.log("error:" + err);
      else res.send(docs);
   });
});
router.put("/:id", (req, res) => {
   if (!ObjectId.isValid(req.params.id))
      return res.status(400).send("ID unknow :" + req.params.id);
   const updateRecord = {
      author: req.body.author,
      message: req.body.message,
   };

   PostsModels.findByIdAndUpdate(
      req.params.id,
      { $set: updateRecord },
      { new: true },
      (err, docs) => {
         if (!err) res.send(docs);
         else console.log("Update error: " + err);
      }
   );
});

router.delete("/:id", (req, res) => {
   if (!ObjectId.isValid(req.params.id))
      return res.status(400).send("ID unknow :" + req.params.id);
   PostsModels.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) ressend(docs);
      else console.log("Delete error:" + err);
   });
});
module.exports = router;
