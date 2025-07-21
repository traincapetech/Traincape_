<<<<<<< HEAD
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";

// Routers
=======

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
import { userRouter } from "./routes/user.routes.js";
import { reviewRouter } from "./routes/review.routes.js";
import { bookRouter } from "./routes/book.routes.js";
import { questionRouter } from "./routes/question.routes.js"; 
import { resultRouter } from "./routes/result.routes.js";
import { paymentRouter } from "./routes/payment.routes.js";
<<<<<<< HEAD
import { employeeRouter } from "./routes/employee.routes.js";
import certificateRouter from "./routes/certificate.routes.js"; // ✅ NEW

dotenv.config();

// ✅ Check for required environment variables
if (!process.env.SECRET_KEY) {
  console.error("❌ CRITICAL ERROR: SECRET_KEY environment variable is not set!");
  console.error("Please create a .env file with SECRET_KEY=your-secret-key");
  process.exit(1);
}

const app = express();

// ✅ Enhanced CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'https://traincapetech.in',
      'http://localhost:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3000'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};
=======

dotenv.config(); 

const app = express();

const corsOptions = {
  origin: ['https://traincapetech.in','http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// ✅ Static Files
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/questions", questionRouter);  
<<<<<<< HEAD
app.use("/employees", employeeRouter);
=======
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
app.use("/results", resultRouter);
app.use("/users", userRouter);
app.use("/review", reviewRouter);
app.use("/books", bookRouter);
app.use("/payments", paymentRouter);
<<<<<<< HEAD
app.use("/certificates", certificateRouter); // ✅ NEW ROUTE
=======
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa

// ✅ Home Endpoint
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to Traincape Technology API",
  });
});

<<<<<<< HEAD
// ✅ Server Bootstrap
=======

>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
<<<<<<< HEAD
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`Using FRONTEND_URL for payment redirects: ${process.env.FRONTEND_URL || 'Not set'}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
=======
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
    process.exit(1);
  }
};

<<<<<<< HEAD
startServer();
=======
startServer();
>>>>>>> 483e8a211b47a7f5a94f042ba4a57e95406f49fa
