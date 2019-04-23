const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const HeroRoutes = require() this is where is routes to heros

mongoose.connect("mongodb+srv://admin:admin@cluster0-1ldg7.mongodb.net/test?retryWrites=true");

const port = process.env.PORT || 4001
const app = express()

app.use(bodyParser.json())
// app.use() this is where API calls for the hero information

// app.get('/', (req, res) => res.send("Default Hero Route!!")

app.listen(port, () => {
    console.log(`Super Hero App is running on localhost:${port}`)
})