import { VoucherModel } from '../model/voucher.model.js';
// For email services, you'd typically import your configured email sender here
// import { sendVoucherEmail } from '../utils/email.js'; // Assuming you have this utility

const uploadVouchers = async (req, res) => {
const { courseName, subcourseName, vouchers } = req.body;

if (!courseName || !subcourseName || !Array.isArray(vouchers) || vouchers.length === 0) {
  return res.status(400).json({ error: 'Missing courseName, subcourseName, or voucher list.' });
}

const voucherDocs = vouchers.map(code => ({
  courseName,
  subcourseName,
  voucherCode: code.trim(),
  used: false,
}));

try {
  // Insert many documents, `ordered: false` allows other documents to be inserted
  // even if some fail due to unique constraint violations (duplicates).
  const result = await VoucherModel.insertMany(voucherDocs, { ordered: false });
  res.status(200).json({ message: 'Vouchers uploaded successfully', insertedCount: result.length });
} catch (error) {
  if (error.code === 11000) { // Duplicate key error
    // MongoDB returns this error if any document violates a unique index.
    // We can inspect the error details to see how many succeeded vs. failed.
    console.warn('Some vouchers were duplicates and were skipped:', error.writeErrors);
    return res.status(200).json({ message: 'Vouchers uploaded, some duplicates were skipped.', details: error.writeErrors });
  }
  console.error('Error uploading vouchers:', error);
  res.status(500).json({ error: 'Upload failed', details: error.message });
}
};

const getVoucherSummary = async (req, res) => {
try {
  const summary = await VoucherModel.aggregate([
    {
      $group: {
        _id: { courseName: "$courseName", subcourseName: "$subcourseName" },
        total: { $sum: 1 },
        issued: { $sum: { $cond: ["$used", 1, 0] } },
        // issued here means used or assigned, you might want to adjust this based on your 'issuedTo' field
      }
    },
    {
      $project: {
        _id: 0,
        courseName: "$_id.courseName",
        subcourseName: "$_id.subcourseName",
        total: 1,
        issued: 1,
        remaining: { $subtract: ["$total", "$issued"] }
      }
    }
  ]);
  res.status(200).json(summary);
} catch (error) {
  console.error("Error fetching voucher summary:", error);
  res.status(500).json({ error: 'Error fetching voucher summary', message: error.message });
}
};

const issueVoucher = async (req, res) => {
const { courseName, subcourseName, userEmail } = req.body;

if (!courseName || !subcourseName || !userEmail) {
  return res.status(400).json({ error: 'Course name, subcourse name, and user email are required.' });
}

try {
  // Find an unused voucher for the specific course and subcourse
  const voucher = await VoucherModel.findOneAndUpdate(
    { courseName, subcourseName, used: false },
    { $set: { used: true, issuedTo: userEmail, usedOn: new Date() } },
    { new: true } // Return the updated document
  );

  if (!voucher) {
    return res.status(404).json({ error: 'No unused vouchers available for this course and subcourse.' });
  }

  // TODO: Send email to the user with the voucher code
  // Example (requires an email utility):
  // try {
  //   await sendVoucherEmail(userEmail, voucher.voucherCode, courseName, subcourseName);
  //   console.log(`Voucher ${voucher.voucherCode} sent to ${userEmail}`);
  // } catch (emailError) {
  //   console.error(`Failed to send email for voucher ${voucher.voucherCode} to ${userEmail}:`, emailError);
  //   // Optionally, revert the voucher status if email sending is critical
  // }

  res.status(200).json({ message: 'Voucher issued successfully', voucherCode: voucher.voucherCode });
} catch (error) {
  console.error("Error issuing voucher:", error);
  res.status(500).json({ error: 'Error issuing voucher', message: error.message });
}
};

const redeemVoucher = async (req, res) => {
const { voucherCode, userEmail } = req.body; // userEmail for verification/logging

if (!voucherCode || !userEmail) {
  return res.status(400).json({ error: 'Voucher code and user email are required.' });
}

try {
  const voucher = await VoucherModel.findOneAndUpdate(
    { voucherCode, used: true, issuedTo: userEmail }, // Check if it's issued to this user and marked as used (already issued)
    { $set: { used: true, usedOn: new Date() } }, // Re-mark as used, update timestamp
    { new: true }
  );

  if (!voucher) {
    // Could be not found, not issued to this user, or already redeemed
    const existingVoucher = await VoucherModel.findOne({ voucherCode });
    if (!existingVoucher) {
      return res.status(404).json({ error: 'Invalid voucher code.' });
    }
    if (existingVoucher.used) {
      // This case indicates the voucher was found but already used or issued to someone else
      return res.status(409).json({ error: 'Voucher already redeemed or not issued to your account.' });
    }
    // If it's not used but not found by the `findOneAndUpdate` query above, it means `issuedTo` wasn't set.
    // This implies a direct redemption without prior issuance. We need to handle this.
    // I'll adjust the logic to allow direct redemption if `used` is false.
     const directRedeemVoucher = await VoucherModel.findOneAndUpdate(
      { voucherCode, used: false },
      { $set: { used: true, issuedTo: userEmail, usedOn: new Date() } },
      { new: true }
    );
     if(directRedeemVoucher) {
        return res.status(200).json({ message: 'Voucher redeemed successfully', voucher: directRedeemVoucher });
     } else {
         return res.status(400).json({ error: 'Voucher could not be redeemed. Please check the code.' });
     }
  }

  res.status(200).json({ message: 'Voucher redeemed successfully', voucher: voucher });
} catch (error) {
  console.error("Error redeeming voucher:", error);
  res.status(500).json({ error: 'Error redeeming voucher', message: error.message });
}
};

const getCourseVouchers = async (req, res) => {
const { courseName } = req.params;
const { subcourseName } = req.query; // Optional subcourse filter

try {
  let query = { courseName: courseName };
  if (subcourseName) {
    query.subcourseName = subcourseName;
  }

  const vouchers = await VoucherModel.find(query);
  res.status(200).json(vouchers);
} catch (error) {
  console.error("Error fetching course vouchers:", error);
  res.status(500).json({ error: 'Error fetching course vouchers', message: error.message });
}
};

export { uploadVouchers, getVoucherSummary, issueVoucher, redeemVoucher, getCourseVouchers };
