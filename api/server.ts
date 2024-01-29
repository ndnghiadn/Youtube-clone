import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/users.ts";
import roomRoutes from "./routes/rooms.ts";
import authRoutes from "./routes/auth.ts";

const app = express();
dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(
      process.env.MONGO ||
        "mongodb+srv://ndnghiadn:jfIBKccEfCzDsuHx@cluster0.fnaslva.mongodb.net/main"
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8888, () => {
  connectDB();
  console.log(`Server is running at port 8888`);
});
