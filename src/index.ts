import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI must be defined");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  app.listen(3000, () => {
    console.log("Tickets is listening on port 3000");
  });
};

start();
