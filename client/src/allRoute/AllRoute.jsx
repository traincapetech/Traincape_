// Updated by Saurav
import React, { Suspense } from "react";
import { lazyWithRetry } from "../utils/lazyWithRetry";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";
import Gallery from "../pages/Gallery";
import CertificateLookup from "../pages/CertificateLookup";
// Preload BS icons to avoid chunk loading errors
import * as BsIcons from "react-icons/bs";
// Loading component
const LoadingComponent = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
      fontSize: "18px",
      color: "#333",
    }}
  >
    <p>Loading content...</p>
  </div>
);

// Lazy load high-level pages for better performance
const Home = lazyWithRetry(() => import("../pages/Home"));
// const UserPage = lazy(() => import("../pages/userPage/UserPage"));
const Login = lazyWithRetry(() => import("../pages/Login"));
const AboutUS = lazyWithRetry(() => import("../pages/AboutUS"));
const ContactUs = lazyWithRetry(() => import("../pages/ContactUs"));
const Signup = lazyWithRetry(() => import("../pages/Signup"));
const FAQ = lazyWithRetry(() => import("../pages/FAQ"));
const Services = lazyWithRetry(() => import("../pages/Services"));
const TermsAndCondition = lazyWithRetry(() =>
  import("../pages/TermsAndCondition")
);
// const Courses = lazyWithRetry(() => import("../pages/Courses"));
const Career = lazyWithRetry(() => import("../pages/Career/Career"));
const Policy = lazyWithRetry(() => import("../pages/Policy"));
const PageNotFound = lazyWithRetry(() => import("../pages/404/PageNotFound"));
const Blogs = lazyWithRetry(() => import("../pages/Blogs/Blogs"));
const CompTIAsinglePage = lazyWithRetry(() =>
  import("../pages/SinglePage/CompTIA/CompTIAsinglePage")
);
const ReviewPage = lazyWithRetry(() => import("../pages/review/ReviewPage"));
const LandingPage = lazyWithRetry(() =>
  import("../pages/landingPage/LandingPage")
);
const Employee = lazyWithRetry(() => import("../pages/Employee"));
const Internship = lazyWithRetry(() => import("../pages/Internship"));
const Test = lazyWithRetry(() => import("../pages/Test/Test"));
// const Training = lazyWithRetry(() => import("../pages/Training"));
const InternalExams = lazyWithRetry(() => import("../pages/InternalExams"));
// const VoucherSuccess = lazyWithRetry(() => import("../pages/VoucherSuccess"));
// const VoucherCancel = lazyWithRetry(() => import("../pages/VoucherCancel"));
// const Comptia = lazyWithRetry(() => import("../pages/Comptia"));
// const Aws = lazyWithRetry(() => import("../pages/Aws"));
// const BookPage = lazyWithRetry(() => import("../pages/ebook/BookPage"));

// Admin imports
const AdminPanel = lazyWithRetry(() =>
  import("../pages/AdminPanel/AdminPanel")
);
const VerifyCertificate = lazyWithRetry(() =>
  import("../pages/Test/VerifyCertificate")
);
const CertificateTemplate = lazyWithRetry(() =>
  import("../pages/Test/CertificateTemplate")
);

// Other pages
const ServiceDetail = lazyWithRetry(() => import("../pages/ServiceDetail"));
// const IBM = lazyWithRetry(() => import("../pages/IBM"));
// const META = lazyWithRetry(() => import("../pages/META"));
const PartnerPage = lazyWithRetry(() => import("../pages/PartnerPage"));
// const PMI = lazyWithRetry(() => import("../pages/PMI"));
// const ITSpeacialist = lazyWithRetry(() => import("../pages/ITSpecialist"));
// const SwiftDevelopment = lazyWithRetry(() =>
//   // import("../pages/SwiftDevelopment")
// );
// const Cart = lazyWithRetry(() => import("../pages/Cart/Cart"));
// const SuccessCartPayment = lazyWithRetry(() =>
//   // import("../pages/Cart/SuccessCartPayment")
// );
// const CancelCartPayment = lazyWithRetry(() =>
//   // import("../pages/Cart/CancelCartPayment")
// );

const AllRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingComponent />}>
      <Routes>
        {/* Pages WITHOUT Navbar/Footer */}
        <Route
          path="/test"
          element={token ? <Test /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/" replace />}
        />
        <Route
          path="/forgot-password"
          element={!token ? <ForgotPassword /> : <Navigate to="/" replace />}
        />

        <Route path="/review-page" element={<ReviewPage />} />
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/ebook-page"
          element={
            token ? (
              <BookPage />
            ) : (
              <Navigate to="/login" state={{ from: "/ebook-page" }} replace />
            )
          }
        /> */}

        {/* <Route path="/login" element={!token ? <Login /> : <Navigate to="/" replace />} /> */}
        {/* <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" replace />} /> */}
        {/* <Route path="/forgot-password" element={!token ? <ForgotPassword /> : <Navigate to="/" replace />} /> */}

        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/frequently-asked-questions" element={<FAQ />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/Terms-and-Conditions" element={<TermsAndCondition />} />
        <Route path="/CertificateLookup" element={<CertificateLookup />} />
        <Route path="/verifyCertificate" element={<VerifyCertificate />} />
        {/* <Route path="/Courses-details" element={<Courses />} /> */}

        <Route path="/Career-details" element={<Career />} />
        <Route path="/Our-Policies" element={<Policy />} />
        <Route path="/Our-Blogs" element={<Blogs />} />

        <Route path="/CompTIA-single-page" element={<CompTIAsinglePage />} />

        <Route path="/home" element={<LandingPage />} />

        {/* Employee and Training Routes */}
        <Route path="/employee" element={<Employee />} />
        <Route path="/internship" element={<Internship />} />
        <Route
          path="/test"
          element={token ? <Test /> : <Navigate to="/login" replace />}
        />

        {/* <Route path="/training" element={<Training />} /> */}
        <Route path="/internal-exams" element={<InternalExams />} />
        {/* <Route path="/voucher-success" element={<VoucherSuccess />} /> */}
        {/* <Route path="/voucher-cancel" element={<VoucherCancel />} /> */}

        {/* Admin Panel */}
        <Route
          path="/admin-panel"
          element={
            token ? (
              <AdminPanel />
            ) : (
              <Navigate to="/login" state={{ from: "/admin-panel" }} replace />
            )
          }
        />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/cer" element={<CertificateTemplate />} />

        <Route path="/Gallery" element={<Gallery />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoute;
