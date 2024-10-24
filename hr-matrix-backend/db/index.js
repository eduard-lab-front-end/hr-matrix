const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hr-matrix-db";

const withDB = async (serverListener) => {
  try {
    const x = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    if (typeof serverListener === "function") {
      serverListener();
    }
  } catch (error) {
    console.error("Error connecting to mongo: ", error);
  }
};

module.exports = withDB;
