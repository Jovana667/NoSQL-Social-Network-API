const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialNetworkDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
