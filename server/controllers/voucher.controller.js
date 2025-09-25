import VoucherModel from "../model/Voucher.js";

// ✅ Add Voucher
export const addVoucher = async (req, res) => {
  try {
    const { subcourseId, code } = req.body;

    if (!subcourseId || !code) {
      return res.status(400).json({ message: "Subcourse ID and code are required" });
    }

    const voucher = new VoucherModel({ subcourseId, code });
    await voucher.save();

    res.status(201).json(voucher);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: `Voucher code "${req.body.code}" already exists` });
    }
    console.error("🔥 Error adding voucher:", err);
    res.status(500).json({ message: "Failed to add voucher", error: err.message });
  }
};

// ✅ Get vouchers by subcourseId
export const getVouchers = async (req, res) => {
  try {
    const { subcourseId } = req.query;
    const query = subcourseId ? { subcourseId } : {};
    const vouchers = await VoucherModel.find(query).sort({ createdAt: -1 });
    res.json(vouchers);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch vouchers", error: err.message });
  }
};

// ✅ Delete voucher
export const deleteVoucher = async (req, res) => {
  try {
    const { id } = req.params;
    await VoucherModel.findByIdAndDelete(id);
    res.json({ message: "Voucher deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete voucher", error: err.message });
  }
};
