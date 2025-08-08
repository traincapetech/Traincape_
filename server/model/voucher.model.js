import mongoose from 'mongoose';

const voucherSchema = new mongoose.Schema({
courseName: {
  type: String,
  required: true,
  trim: true,
},
subcourseName: {
  type: String,
  required: true,
  trim: true,
},
voucherCode: {
  type: String,
  required: true,
  unique: true, // Ensure voucher codes are unique
  trim: true,
},
used: {
  type: Boolean,
  default: false,
},
issuedTo: {
  type: String, // Email of the user
  default: null,
},
usedOn: {
  type: Date,
  default: null,
},
}, { timestamps: true });

const VoucherModel = mongoose.model('Voucher', voucherSchema);

export { VoucherModel };
