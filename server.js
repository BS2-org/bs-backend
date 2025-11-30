require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB Cloud"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(3000, () => console.log("Server Started"));
