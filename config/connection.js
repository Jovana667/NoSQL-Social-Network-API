// config/connection.js
const mongoose = require("mongoose");

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialNetworkDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
