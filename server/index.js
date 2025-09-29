// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import fetch from "node-fetch";

// Routers
import { userRouter } from "./routes/user.routes.js";
import { reviewRouter } from "./routes/review.routes.js";
import { bookRouter } from "./routes/book.routes.js";
import { questionRouter } from "./routes/question.routes.js";
import { resultRouter } from "./routes/result.routes.js";
import { paymentRouter } from "./routes/payment.routes.js";
import { employeeRouter } from "./routes/employee.routes.js";
import certificateRouter from "./routes/certificate.routes.js";
import voucherRouter from "./routes/voucher.routes.js";
import { securityRouter } from "./routes/security.routes.js";
import courseRoutes from "./routes/courseRoutes.js";
import subcourseRoutes from "./routes/subcourseRoutes.js";





// Stripe webhook controller
import { StripeWebhook } from "./controllers/payments/stripe/stripe.controller.js";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  console.log("📡 Incoming:", req.method, req.url);
  next();
});


// ✅ CORS Setup
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    const allowedOrigins = [
      "https://traincapetech.in",
      "https://www.traincapetech.in",
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
    ];
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

/**
 * ⚠️ IMPORTANT: Stripe webhook must come BEFORE express.json()
 * because it needs the raw body for signature validation.
 */
app.post(
  "/payments/stripe/webhook",
  express.raw({ type: "application/json" }),
  StripeWebhook
);

// ✅ Enable JSON parsing for all other routes
app.use(express.json());
app.set("etag", false);
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/api", voucherRouter);
app.use("/api/admin/vouchers", voucherRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/courses", courseRoutes);
app.use("/api/subcourses", subcourseRoutes);
app.use("/questions", questionRouter);
app.use("/employees", employeeRouter);
app.use("/results", resultRouter);
app.use("/users", userRouter);
app.use("/review", reviewRouter);
app.use("/books", bookRouter);
app.use("/payments", paymentRouter); // <-- main payment routes
app.use("/certificates", certificateRouter);
app.use("/vouchers", voucherRouter);
app.use("/security", securityRouter);

// Root route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to Traincape Technology API" });
});

app.get("/proxy/image/:id", async (req, res) => {
  try {
    const fileId = req.params.id;
    const url = `https://drive.google.com/uc?export=view&id=${fileId}`;

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).send("Failed to fetch image");
    }

    // Pass content type (image/jpeg, image/png, etc.)
    res.set("Content-Type", response.headers.get("content-type"));
    response.body.pipe(res);
  } catch (err) {
    console.error("❌ Proxy error:", err);
    res.status(500).send("Proxy server error");
  }
});
// ✅ Start server
const PORT = process.env.PORT || 8080;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(
        `Using FRONTEND_URL for payment redirects: ${
          process.env.FRONTEND_URL || "Not set"
        }`
      );
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
