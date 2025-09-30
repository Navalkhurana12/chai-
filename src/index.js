import mongoose from "mongoose";
import { DB_NAME } from "./constant.js"; // add .js if using ES Modules
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("✅ MongoDB connected");

    app.on("error", (err) => {
      console.log("Express error:", err);
      throw err;
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw error;
  }
})();
