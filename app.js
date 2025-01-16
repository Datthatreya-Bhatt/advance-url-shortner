require('dotenv').config();
const express = require("express");
const parser = require("body-parser");
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('./config/passportConfig');
const createShortURL = require('./routes/createShortUrlRoute');
const authRoutes = require('./routes/authRoutes');

const app = express();




//mongodb connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error while connecting mongodb:', err));



app.use(cors());
app.use(parser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(authRoutes);
app.use(createShortURL);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
