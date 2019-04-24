const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HeroRoutes = require("./express/routes/heros");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-1ldg7.mongodb.net/test?retryWrites=true"
);

const port = process.env.PORT || 4001;
const app = express();

app.use(bodyParser.json());
app.use("/api/heros", HeroRoutes);

app.get("/", (req, res) => res.send("Default Hero Route!!"));

app.listen(port, () => {
  console.log(`Super Hero App is running on localhost:${port}`);
});
