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
const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

const { userRouter } = require("./routes/user.routes");
const { reviewRouter } = require("./routes/review.routes");
const { bookRouter } = require("./routes/book.routes");
require("dotenv").config();

const app = express();

app.use(express.json());


app.use("/users", userRouter);
app.use("/review", reviewRouter);
app.use("/books", bookRouter);

app.get("/", (req, res) => { 
  res.status(200).send({
    message: "This is our Homepage",
  });
});



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
});
