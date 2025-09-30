import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  console.log("📡 Incoming Authorization header:", authHeader);

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  console.log("🔑 Extracted token:", token || "❌ No token found");

  if (!token) {
    console.log("❌ No token provided in request");
    return res.status(401).send({ error: "Please login" });
  }

  const secret = process.env.SECRET_KEY;
  if (!secret) {
    console.log("❌ SECRET_KEY missing in .env");
    return res
      .status(500)
      .send({ error: "Server misconfiguration: SECRET_KEY is not set" });
  }

  console.log("🗝️ Using SECRET_KEY:", secret);

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      console.log("❌ JWT verification failed:", err.message);
      return res.status(403).send({ error: "Token is invalid or expired" });
    }

    console.log("✅ Decoded JWT:", decoded);

    req.user = {
      userId: decoded.userId,
      username: decoded.username,
      role: decoded.role,
      email: decoded.email, // optional if included in token
    };

    console.log("👤 Attached user to req:", req.user);

    next();
  });
};

export default auth;
