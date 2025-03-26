// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token) {
//     jwt.verify(token, process.env.secretKey, (err, decoded) => {
//       // console.log(decoded)
//       if (decoded) {
//         req.body.userId = decoded.userId;
//         req.body.username = decoded.username;
//         next();
//       } else {
//         res.send({ error: err });
//       }
//     });
//   } else {
//     res.send({ msg: "Please Login" });
//   }
// };
// module.exports = {
//   auth,
// };
// updated by saurav 
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).send({ msg: "Please login" });
//   }

//   jwt.verify(token, process.env.secretKey, (err, decoded) => {
//     if (err) {
//       return res.status(403).send({ error: "Token is invalid or expired" });
//     }
//     req.body.userId = decoded.userId;
//     req.body.username = decoded.username;
//     next();
//   });
// };

// module.exports = {
//   auth,
// };
//auth.middleware.js
import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) {
        return res.status(401).json({ message: 'Unauthorized'});
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err){
            return res.status(403).json({ message: "Unauthorized: Invalid token"});
        }
        req.user = user;
        next();
    });
};

export default authenticateToken;
