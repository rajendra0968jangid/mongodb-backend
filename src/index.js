import dotenv from "dotenv";
import connectDB from "../src/db/index.js";
import express from "express";
const app = express();

dotenv.config({
  path: "./env",
});

connectDB();

// (async () => {
//   try {
//     const connection = await mongoose.connect(
//       `${process.env.MONGODB_URL}${"your_database_name"}`
//     );
//     console.log("connection success");
//     app.on("error", (error) => {
//       console.log("err:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("connection error", error);
//     throw error;
//   }
// })();
