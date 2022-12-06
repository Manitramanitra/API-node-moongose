const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 5500;
require("./models/dbconfig");
const postsRoutes = require("./routes/postsControler");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
// mongoose.set("useFindAndModify", false);

// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/posts", postsRoutes);

app.listen(port, (error) => {
   if (error) throw error;
   console.log(`server runing on http://localhost:${port}`);
});
