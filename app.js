import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from "cors";
import * as dotenv from 'dotenv';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter);
dotenv.config()

const PORT = process.env.PORT || 8000
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@blog-database.wumlrhf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => app.listen(PORT))
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
// app.listen(5000);
