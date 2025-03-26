// const express = require("express");
// const cors = require("cors");
// const { connection } = require("./db");

// const { userRouter } = require("./routes/user.routes");
// const { reviewRouter } = require("./routes/review.routes");
// const { bookRouter } = require("./routes/book.routes");
// require("dotenv").config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/users", userRouter);
// app.use("/review", reviewRouter);
// app.use("/books", bookRouter);
// app.get("/", (req, res) => { 
//   res.status(200).send({
//     message: "This is our Homepage",
//   });
// });

// app.listen(process.env.PORT, async () => {
//   try {
//     await connection;
//     console.log("Connected to MongoDB");
//     console.log(`Server is running on port ${process.env.PORT}`);
//   } catch (error) {
//     console.log(error);
//   }
// });
// Updated by saurav
// index.js
// //app.js
import router from "./Routes/newuser.route.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./db.js";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
connectdb();

app.use(cors({
    methods: ['POST', 'GET', 'PUT', 'DELETE' ],
    credentials: true,
}));

app.use(express.json());

//Routes
app.use("/users", router);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening ${port}`);
});

export default app;