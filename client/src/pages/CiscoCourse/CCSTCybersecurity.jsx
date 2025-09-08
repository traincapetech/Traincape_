import React, { useEffect } from 'react'
import VoucherButton from "../../components/VoucherButton";
import { FaShieldAlt, FaClock, FaCheckCircle, FaHeadset, FaLock, FaCertificate, FaStar } from 'react-icons/fa';

const CCSTCybersecurity = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500">Course Details</span>
            <span className="text-gray-400">›</span>
            <span className="text-gray-500">Cisco Certifications</span>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-semibold">CCST Cybersecurity</span>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-90" />
        <svg className="absolute -top-10 -right-10 w-[40rem] h-[40rem] opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M40.2,-58.3C54.3,-49.5,69.7,-41.7,74.4,-29.7C79.1,-17.8,73.2,-1.8,67.8,12.9C62.3,27.7,57.3,41.2,47.2,52.3C37.2,63.4,22.1,72.1,5.9,78.9C-10.3,85.8,-27.6,90.7,-39.8,83.7C-52,76.7,-59.2,57.7,-64.4,41.3C-69.6,24.8,-72.7,10.9,-73.5,-3.1C-74.3,-17.1,-72.8,-31.3,-65.7,-43.2C-58.6,-55.1,-46,-64.7,-32.1,-73.1C-18.2,-81.5,-9.1,-88.7,1.8,-91.8C12.8,-95,25.6,-94.1,40.2,-58.3Z" transform="translate(100 100)"/></svg>
        <div className="relative z-10 px-4 md:px-10 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_320px] gap-8 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Cisco CCST Cybersecurity Voucher</h1>
              <p className="text-blue-100 mt-3 max-w-2xl">Get an official exam voucher for CCST Cybersecurity. Add to cart and checkout securely. Voucher is delivered instantly to your email.</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-md px-3 py-2 text-blue-50"><FaShieldAlt /> Authorized</div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-md px-3 py-2 text-blue-50"><FaClock /> Instant</div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-md px-3 py-2 text-blue-50"><FaLock /> Secure</div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-md px-3 py-2 text-blue-50"><FaHeadset /> Support</div>
              </div>
            </div>
            <div className="md:sticky md:top-24">
              <div className="bg-white/90 backdrop-blur shadow-2xl p-6 rounded-2xl border border-white/60">
                <h2 className="text-lg font-bold mb-1 text-gray-900 text-center">Certification Voucher</h2>
                <p className="text-sm text-gray-600 mb-4 text-center">CCST Cybersecurity Exam</p>
                <VoucherButton course={"Cisco"} subCourse={"CCSTcybersecurity"} className="w-full justify-center" />
                <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Official exam voucher</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Instant email delivery</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Secure Stripe checkout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-full px-4 md:px-[6rem] lg:px-[12rem] xl:px-[18rem]">
        <div className="max-w-6xl mx-auto mt-8 space-y-10">
          <div className="bg-white/90 rounded-xl shadow-md border border-gray-100 p-3 overflow-x-auto">
            <div className="flex gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">Description</span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-700 text-sm">Benefits</span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-700 text-sm">Exam Details</span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-700 text-sm">How it works</span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-700 text-sm">What's included</span>
              <span className="px-4 py-2 rounded-full bg-gray-50 text-gray-700 text-sm">FAQs</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700 mt-1 tracking-wide">CCST Cybersecurity validates essential security concepts, threat awareness, risk mitigation and basic incident response for entry‑level roles.</p>
            <p className="text-gray-700 mt-2 tracking-wide">Use your voucher to schedule the exam online. After purchase, the code is delivered instantly to your email.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border bg-blue-50/50">
                <div className="flex items-center gap-3 text-blue-700 font-semibold"><FaCertificate /> Recognized Cisco credential</div>
                <p className="text-gray-700 mt-2 text-sm">Signals foundational cybersecurity competence to employers.</p>
              </div>
              <div className="p-4 rounded-lg border bg-green-50/50">
                <div className="flex items-center gap-3 text-green-700 font-semibold"><FaStar /> Job‑ready skills</div>
                <p className="text-gray-700 mt-2 text-sm">Mapped to practical, real‑world security tasks.</p>
              </div>
              <div className="p-4 rounded-lg border bg-purple-50/50">
                <div className="flex items-center gap-3 text-purple-700 font-semibold"><FaClock /> Instant delivery</div>
                <p className="text-gray-700 mt-2 text-sm">Voucher is emailed immediately after a successful checkout.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Exam Details</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border text-center"><div className="text-sm text-gray-500">Format</div><div className="font-semibold text-gray-900">Online (Certiport)</div></div>
              <div className="p-4 rounded-lg border text-center"><div className="text-sm text-gray-500">Duration</div><div className="font-semibold text-gray-900">~50–60 min</div></div>
              <div className="p-4 rounded-lg border text-center"><div className="text-sm text-gray-500">Prerequisites</div><div className="font-semibold text-gray-900">None</div></div>
              <div className="p-4 rounded-lg border text-center"><div className="text-sm text-gray-500">Delivery</div><div className="font-semibold text-gray-900">Instant email</div></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How it works</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Add to cart", "Pay securely", "Receive voucher", "Schedule exam"].map((step, idx) => (
                <div key={idx} className="p-4 rounded-lg border flex flex-col items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{idx+1}</div>
                  <div className="mt-2 font-semibold text-gray-900">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's included</h3>
            <ul className="space-y-2">
              {["Official CCST Cybersecurity exam voucher","Redemption instructions","Email delivery and receipt"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700"><FaCheckCircle className="text-green-500" /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FAQ's</h3>
            <div className="space-y-3">
              <details className="group border rounded-md p-3"><summary className="cursor-pointer font-semibold text-gray-900">How do I receive my voucher?</summary><p className="mt-2 text-gray-700">Immediately by email after successful payment.</p></details>
              <details className="group border rounded-md p-3"><summary className="cursor-pointer font-semibold text-gray-900">Is the voucher refundable?</summary><p className="mt-2 text-gray-700">Vouchers are generally non‑refundable once issued.</p></details>
              <details className="group border rounded-md p-3"><summary className="cursor-pointer font-semibold text-gray-900">Need help?</summary><p className="mt-2 text-gray-700">Contact us via the Contact page; we typically respond within 24 hours.</p></details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCSTCybersecurity;