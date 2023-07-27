import express from "express";
const app = express();
import mongoose from "mongoose";
const port = 3000;
import cors from "cors";
import authRoute from "./routes/auth";
import todoRoute from "./routes/todo";

app.use(cors()); // This line should work now after installing the 'cors' package



app.use(express.json());
app.use("/auth", authRoute);
app.use("/todo", todoRoute);

app.listen(port, () => {
  console.log(`Example app running at http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/courses', {
    dbName:"courses",
});