import express from "express";
import {
  addVoucher,
  getVouchers,
  deleteVoucher,
} from "../controllers/voucher.controller.js";
import VoucherModel from "../model/Voucher.js";

const router = express.Router();

// ==========================
// Admin adds voucher
// ==========================
router.post("/admin/vouchers", addVoucher);

// ==========================
// Get vouchers by subcourse
// ==========================
router.get("/admin/vouchers", getVouchers);

// ==========================
// Check vouchers for a subcourse (Debug route)
// ==========================
router.get("/check-vouchers/:subcourseId", async (req, res) => {
  try {
    const { subcourseId } = req.params;

    const vouchers = await VoucherModel.find({ subcourseId });
    if (!vouchers.length) {
      return res.json({ message: "❌ No vouchers linked to this subcourse" });
    }

    res.json({
      message: "✅ Vouchers found",
      count: vouchers.length,
      vouchers,
    });
  } catch (err) {
    console.error("Error checking vouchers:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ==========================
// Delete voucher
// ==========================
router.delete("/admin/vouchers/:id", deleteVoucher);

export default router;
