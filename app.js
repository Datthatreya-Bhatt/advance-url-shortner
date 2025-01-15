const express = require("express");
const parser = require("body-parser");
const cors = require('cors');

const createShortURL = require('./routes/createShortUrlRoute');

const app = express();


app.use(cors());
app.use(parser.json());

app.use(createShortURL);


app.listen(3000)

