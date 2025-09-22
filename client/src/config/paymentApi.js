import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // your backend
  withCredentials: true,
});

// Create Stripe Checkout Session
export const createStripeSession = (courseId) =>
  API.post("/payments/stripe", { courseId });

// Fetch Stripe session details (after success)
export const getStripeSession = (sessionId) =>
  API.get(`/payments/stripe/session/${sessionId}`);

// Get purchase history
export const getPurchaseHistory = () =>
  API.get("/payments/history");
