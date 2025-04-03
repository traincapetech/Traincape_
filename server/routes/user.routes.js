// const express = require("express");
// const userRouter = express.Router();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const { UserModel } = require("../model/user.model");

// userRouter.post("/register", async (req, res) => {
//   const { username, email, password, role } = req.body;
//   try {
//     bcrypt.hash(password, 5, async (err, hash) => {
//       const user = new UserModel({ username, email, password: hash, role });
//       await user.save();
//       res.status(200).send({
//         msg: "The new user has been registered",
//         registeredUser: user,
//       });
//     });
//   } catch (error) {
//     res.status(400).send({ error: error });
//   }
// });
// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email });
//     if (user) {
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (result) {
//           res.status(200).send({
//             msg: "Login successful!",
//             token: jwt.sign(
//               { userId: user._id, username: user.username },
//               process.env.secretKey
//             ),
//             user,
//           });
//         } else {
//           console.log(err);
//           res.status(402).send({ error: err });
//         }
//         // result == true
//       });
//     } else {
//       res.status(400).send({ msg: "Wrong Credentials" });
//     }
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// });

// module.exports = {
//   userRouter,
// };
// updated by saurav
// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const { UserModel } = require("../model/user.model");

// const userRouter = express.Router();

// userRouter.post("/register", async (req, res) => {
//   const { username, email, password, role } = req.body;
//   try {
//     // Check if email already exists

//     const existingUser = await UserModel.findOne({email: email.trim()});

//     if (existingUser) {
//       return res.status(400).send({ msg: "Email already registered" });
//     }

//     bcrypt.hash(password, 5, async (err, hash) => {
//       const user = new UserModel({ username, email, password: hash, role });
//       await user.save();
//       res.status(200).send({
//         msg: "The new user has been registered",
//         registeredUser: user,
//       });
//     });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       return res.status(400).send({ msg: "Wrong Credentials" });
//     }
//     bcrypt.compare(password, user.password, (err, result) => {
//       if (err || !result) {
//         return res.status(401).send({ msg: "Wrong Credentials" });
//       }
//       const token = jwt.sign(
//         { userId: user._id, username: user.username },
//         process.env.secretKey,
//         { expiresIn: "1h" }
//       );
//       res.status(200).send({
//         msg: "Login successful!",
//         token,
//         user,
//       });
//     });
//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

// module.exports = {
//   userRouter,
// };

//Updated by Ritik
const express = require("express");
const nodemailer = require("nodemailer");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const emailjs = require("@emailjs/browser");

const { UserModel } = require("../model/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const {
    username,
    email,
    password,
    role,
    phoneNumber,
    address,
    pinCode,
    country,
    linkedIn,
    interest,
  } = req.body;
  try {
    // Check if email already exists

    const existingUser = await UserModel.findOne({ email: email.trim() });

    if (existingUser) {
      return res.status(400).send({ msg: "Email already registered" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      const user = new UserModel({
        username,
        email,
        password: hash,
        role,
        phoneNumber,
        address,
        pinCode,
        country,
        linkedIn,
        interest,
      });
      await user.save();
      res.status(200).send({
        msg: "The new user has been registered",
        registeredUser: user,
      });
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ success:false , msg: "Wrong Credentials" });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).send({ success:false ,msg: "Wrong Credentials" });
      }
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        process.env.secretKey,
        { expiresIn: "1h" }
      );
      res.status(200).send({
        msg: "Login successful!",
        token,
        user: {
          username: user.username,
          email: user.email,
        },
        success:true,
      });
    });
  } catch (error) {
    res.status(500).send({ success:false, msg: error.message });
  }
});

userRouter.post("/sendOTPToEmail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ msg: "Email Id does not exist in the database" });
    }
    console.log(email);
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      // to: email,
      subject: "Password Reset OTP",
      html: `
      <!-- Updated HTML template with image -->
<div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f4f4f4;">
  <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
      <h2 style="color: #333;">OTP Verification</h2>
      <p style="color: #555; font-size: 16px;">Your One-Time Password (OTP) for verification is:</p>
      <div style="font-size: 24px; font-weight: bold; color: #333; padding: 10px 20px; background: #f8f8f8; border: 1px dashed #333; display: inline-block; margin: 10px 0;">
          ${otp}
      </div>
      <p style="color: #777; font-size: 14px;">This OTP is valid for only 10 minutes. Do not share it with anyone.</p>
      <p style="color: #777; font-size: 14px;">If you did not request this, please ignore this email.</p>
      <div style="font-size: 12px; color: #aaa; margin-top: 20px;">© 2025 TrainCape Industries</div>
  </div>
</div>
`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ message: "Error sending email" });
      }
      res.json({ message: "OTP sent to email" });
    });
    await user.save();
    console.log(user);
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Internal Server Error" });
  }
});

userRouter.post("/verifyOtp", async (req, res) => {
  const { otp, email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Wrong Credentials" });
    }
    if (user.verifyOtp !== otp || user.verifyOtp === "") {
      return res.json({ success: false, message: "Invalid OTP" });
    }
    if (user.verifyOtpExpireAt < Date.now()) {
      return res.json({ success: false, message: "OTP expired" });
    }
    user.verifyOtp = "";
    user.verifyOTPExpireAt = 0;
    await user.save();
    return res.json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: e.message });
  }
});

userRouter.post("/reset_password", async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "Wrong Credentials" });
    }
    console.log("newPassword", newPassword);
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpireAt = 0;

    await user.save();
    return res.json({
      success: true,
      message: "Password has been changed Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: e.message });
  }
});

userRouter.post("/auth/google", async (req, res) => {
  const { email, newPassword, photo } = req.body;
  const user = await UserModel.findOne({ email });
  try {
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.secretKey);
      user.isAccountVerified = true;
      const { password: newPassword, ...rest } = user._doc;
      await user.save();
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.json({ success: true, rest, token });
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(generatedPassword, 10);
      const newUser = new userModel({
        name: req.body.name,
        isAccountVerified: true,
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { password: pass, ...rest } = newUser._doc;
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      //sending welcome email
      const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: req.body.email,
        subject: "Welcome to AapkaGhar",
        text: `Welcome to AapkaGhar!Your account has been created with email id: ${req.body.email}.`,
      };
      await transporter.sendMail(mailOptions);
      return res.json({ success: true, rest });
    }
  } catch (e) {
    return res.json({ success: false, message: e.message, user });
  }
});
module.exports = {
  userRouter,
};
