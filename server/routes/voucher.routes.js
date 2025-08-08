import express from 'express';
import { uploadVouchers, getVoucherSummary, issueVoucher, redeemVoucher, getCourseVouchers } from '../controllers/voucher.controller.js';

const voucherRouter = express.Router();

// Route for uploading vouchers by admin
voucherRouter.post('/upload', uploadVouchers);

// Route for getting voucher usage summary for admin panel
voucherRouter.get('/summary', getVoucherSummary);

// Route for issuing a voucher to a user (e.g., after purchase)
voucherRouter.post('/issue', issueVoucher);

// Route for redeeming a voucher by a user
voucherRouter.post('/redeem', redeemVoucher);

// Route for viewing all vouchers for a specific course (and optional subcourse)
voucherRouter.get('/course/:courseName', getCourseVouchers);

export { voucherRouter };
