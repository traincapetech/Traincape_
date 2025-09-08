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
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '70vh',
    fontSize: '18px',
    color: '#333'
  }}>
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
const TermsAndCondition = lazyWithRetry(() => import("../pages/TermsAndCondition"));
const Courses = lazyWithRetry(() => import("../pages/Courses"));
const Career = lazyWithRetry(() => import("../pages/Career/Career"));
const Policy = lazyWithRetry(() => import("../pages/Policy"));
const PageNotFound = lazyWithRetry(() => import("../pages/404/PageNotFound"));
const Blogs = lazyWithRetry(() => import("../pages/Blogs/Blogs"));
const CompTIAsinglePage = lazyWithRetry(() => import("../pages/SinglePage/CompTIA/CompTIAsinglePage"));
const ReviewPage = lazyWithRetry(() => import("../pages/review/ReviewPage"));
const LandingPage = lazyWithRetry(() => import("../pages/landingPage/LandingPage"));
const Employee = lazyWithRetry(() => import("../pages/Employee"));
const Internship = lazyWithRetry(() => import("../pages/Internship"));
const Test = lazyWithRetry(() => import("../pages/Test/Test"));
const Training = lazyWithRetry(() => import("../pages/Training"));
const InternalExams = lazyWithRetry(() => import("../pages/InternalExams"));
const VoucherSuccess = lazyWithRetry(() => import("../pages/VoucherSuccess"));
const VoucherCancel = lazyWithRetry(() => import("../pages/VoucherCancel"));
const Comptia = lazyWithRetry(() => import("../pages/Comptia"));
const Aws = lazyWithRetry(() => import("../pages/Aws"));
const BookPage = lazyWithRetry(() => import("../pages/ebook/BookPage"));

// Certification pages - AWS
const Overview = lazyWithRetry(() => import("../pages/AWS/Overview"));
const AwsCertifiedNetworking = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedNetworking"));
const AwsCertifiedSolution = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedSolution"));
const AwsCertifiedCloud = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedCloud"));
const AwsCertifiedData = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedData"));
const AwsCertifiedMachine = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedMachine"));
const AwsCertifiedDevops = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedDevops"));
const AwsCertifiedDeveloper = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedDeveloper"));
const AwsCertifiedSysops = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedSysops"));
const AwsCertifiedSecurity = lazyWithRetry(() => import("../pages/AWS/AwsCertifiedSecurity"));

// Admin imports
const AdminPanel = lazyWithRetry(() => import("../pages/AdminPanel/AdminPanel"));
const VerifyCertificate = lazyWithRetry(() => import("../pages/Test/VerifyCertificate"));
const CertificateTemplate = lazyWithRetry(() => import("../pages/Test/CertificateTemplate"));

// Microsoft
const Microsoft = lazyWithRetry(() => import("../pages/Microsoft"));

// Adobe
const AdobePhotoshop = lazyWithRetry(() => import("../pages/AdobeCourse/AdobePhotoshop"));
const PhotoshopCertified = lazyWithRetry(() => import("../pages/AdobeCourse/PhotoshopCertified"));
const AdobeIllustrator = lazyWithRetry(() => import("../pages/AdobeCourse/AdobeIllustrator"));
const AdobePremiere = lazyWithRetry(() => import("../pages/AdobeCourse/AdobePremiere"));
const AdobeAfterEffects = lazyWithRetry(() => import("../pages/AdobeCourse/AdobeAfterEffects"));
const AdobeLightroom = lazyWithRetry(() => import("../pages/AdobeCourse/AdobeLightroom"));
const AdobeInDesign = lazyWithRetry(() => import("../pages/AdobeCourse/AdobeInDesign"));
const AdobeXD = lazyWithRetry(() => import("../pages/AdobeCourse/AdobeXD"));

// PECB
const PECB = lazyWithRetry(() => import("../pages/PECB"));
const Computerforensics = lazyWithRetry(() => import("../pages/Pecb/Computer-forensics"));
const CybersecurityAuditTrainings = lazyWithRetry(() => import("../pages/Pecb/Cybersecurity-Audit-Trainings"));
const ISO9001LeadImplementer = lazyWithRetry(() => import("../pages/Pecb/ISO-9001-Lead-Implementer"));
const ISO9001 = lazyWithRetry(() => import("../pages/Pecb/ISO-9001"));
const ISO22301 = lazyWithRetry(() => import("../pages/Pecb/ISO-22301"));
const ISO31000RiskManager = lazyWithRetry(() => import("../pages/Pecb/ISO-31000-Risk-Manager"));
const ISO37001 = lazyWithRetry(() => import("../pages/Pecb/ISO-37001"));
const ISO45001 = lazyWithRetry(() => import("../pages/Pecb/ISO-45001"));
const Isoiec27001LeadImplementer = lazyWithRetry(() => import("../pages/Pecb/Iso-iec-27001-Lead-Implementer"));
const Isoiec27001 = lazyWithRetry(() => import("../pages/Pecb/Iso-iec-27001"));
const Isoiec27005RiskManager = lazyWithRetry(() => import("../pages/Pecb/Iso-iec-27005-Risk-Manager"));
const Isoiec27032CyberSecurity = lazyWithRetry(() => import("../pages/Pecb/Iso-iec-27032-Cyber-Security"));
const PecbCertifiedIso27001Foundation = lazyWithRetry(() => import("../pages/Pecb/Pecb-Certified-Iso-27001-Foundation"));
const SCADASecurityManager = lazyWithRetry(() => import("../pages/Pecb/SCADA-Security-Manager"));

// Cisco
const Cisco = lazyWithRetry(() => import("../pages/Cisco"));

// CompTIA subcourses
const ComptiaSecurity = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaSecurity"));
const ComptiaLinux = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaLinux"));
const ComptiaProject = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaProject"));
const ComptiaProject004 = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaProject004"));
const ComptiaPentest = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaPentest"));
const ComptiaA = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaA"));
const ComptiaNetwork = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaNetwork"));
const ComptiaCloud = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaCloud"));
const ComptiaServer = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaServer"));
const ComptiaData = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaData"));
const ComptiaCloudCLO = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaCloudCLO"));
const ComptiaSecurity601 = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaSecurity601"));
const ComptiaCybersecurity = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaCyberscurity"));
const ComptiaAdvance = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaAdvance"));
const ComptiaNetwork007 = lazyWithRetry(() => import("../pages/CompTIACourse/ComptiaNetwork007"));

// Microsoft subcourses
const MicrosoftAzureAdmin = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureAdministrator"));
const MicrosoftAi = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAi"));
const MicrosoftDeveloper = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftDeveloper"));
const MicrosoftFundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftFundamentals"));
const MicrosoftDynamic365 = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftDynamic365"));
const MicrosoftAzure = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzure"));
const Microsoft365 = lazyWithRetry(() => import("../pages/MicrosoftCourse/Microsoft365"));
const Microsoft365Fundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/Microsoft365Fundamentals"));
const MicrosoftSCI = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftSecurity"));
const MicrosoftPowerPlatform = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftPowerbi"));
const MicrosoftAzureData = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureData"));
const Microsoft365Associate = lazyWithRetry(() => import("../pages/MicrosoftCourse/Microsoft365Associate"));
const MicrosoftPowerBI = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftPowerbi"));
const MicrosoftAzureCosmos = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureCosmos"));
const MicrosoftAzureSAP = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureSAP"));
const MicrosoftAzureSolutions = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureSolutions"));
const MicrosoftAzureVirtual = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureVirtual"));
const MicrosoftDynamicFunction = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftDynamicFunctional"));
const Microsoft365Certification = lazyWithRetry(() => import("../pages/MicrosoftCourse/Microsoft365Certification"));
const MicrosoftCyberAnalyst = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftCyberAnalyst"));
const MicrosoftMS900 = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftMs900"));
const MicrosoftPl300 = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftPl300"));
const MicrosoftExcelExpert = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftExcelExpert"));
const MicrosoftWordAssociate = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftWordAssociate"));
const MicrosoftWordExpert = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftWordExpert"));
const MicrosoftPowerPointAssociate = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftPowerPointAssociate"));
const MicrosoftExcelAssociate = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftExcelAssociate"));
const MicrosoftDynamics365ERP = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftDynamics365ERP"));
const MicrosoftAzureDataFundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureDataFundamentals"));
const MicrosoftAzureFundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftAzureFundamentals"));
const MicrosoftDynamicsCRMFundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftDynamicsCRMFundamentals"));
const MicrosoftPowerPlatformFundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftPowerPlatformFundamentals"));
const MicrosoftSecurityFundamentals = lazyWithRetry(() => import("../pages/MicrosoftCourse/MicrosoftSecurityFundamentals"));

// Cisco subcourses
const CCSTsupportTech = lazyWithRetry(() => import("../pages/CiscoCourse/CcstSupportTechnician"));
const CCSTcybersecurity = lazyWithRetry(() => import("../pages/CiscoCourse/CCSTCybersecurity"));
const CCSTNetworking = lazyWithRetry(() => import("../pages/CiscoCourse/CCSTNetworking"));
const CCTtechnician = lazyWithRetry(() => import("../pages/CiscoCourse/CcstSupportTechnician"));
const CCTroutingSwitching = lazyWithRetry(() => import("../pages/CiscoCourse/CCTroutingSwitching"));
const CCTdatacenter = lazyWithRetry(() => import("../pages/CiscoCourse/CCTdatacenter"));
const CCNA = lazyWithRetry(() => import("../pages/CiscoCourse/CCNA"));
const CCCA = lazyWithRetry(() => import("../pages/CiscoCourse/CCCA"));
const CCNPenterprises = lazyWithRetry(() => import("../pages/CiscoCourse/CCNPenterprises"));
const CCNPsecurity = lazyWithRetry(() => import("../pages/CiscoCourse/CCNPsecurity"));
const CCNPdatacenter = lazyWithRetry(() => import("../pages/CiscoCourse/CCNPdatacenter"));
const CCNPserviceprovider = lazyWithRetry(() => import("../pages/CiscoCourse/CCNPserviceprovider"));
const CCNPcollaboration = lazyWithRetry(() => import("../pages/CiscoCourse/CCNPcollaboration"));
const CCNPdevnet = lazyWithRetry(() => import("../pages/CiscoCourse/CCNPdevnet"));
const CCIEinfastructure = lazyWithRetry(() => import("../pages/CiscoCourse/CCIEinfasturcture"));
const CCIEwireless = lazyWithRetry(() => import("../pages/CiscoCourse/CCIEwireless"));
const CCIEsecurity = lazyWithRetry(() => import("../pages/CiscoCourse/CCIEsecurity"));
const CCIEdatacenter = lazyWithRetry(() => import("../pages/CiscoCourse/CCIEdatacenter"));
const CCIEserviceprovider = lazyWithRetry(() => import("../pages/CiscoCourse/CCIEserviceprovider"));
const CCIEcollab = lazyWithRetry(() => import("../pages/CiscoCourse/CCIEcollaboration"));

// IBM subcourses
const IBMAgileMethodologies = lazyWithRetry(() => import("../components/IMBSubCourses/IBMAgileMethodologies"));
const WebdevelopementHTML = lazyWithRetry(() => import("../components/IMBSubCourses/Webdevelopementhtml"));
const WebdevelopementC = lazyWithRetry(() => import("../components/IMBSubCourses/WebdevelopementC"));
const IBMSQL = lazyWithRetry(() => import("../components/IMBSubCourses/IBMSQL"));
const IBMSoftwareFoundation = lazyWithRetry(() => import("../components/IMBSubCourses/IBMSoftwareFoundation"));
const IBMScala = lazyWithRetry(() => import("../components/IMBSubCourses/IBMScala"));
const IBMRestAPI = lazyWithRetry(() => import("../components/IMBSubCourses/IBMRestAPI"));
const IBMRDBMS = lazyWithRetry(() => import("../components/IMBSubCourses/IBMRDBMS"));
const IBMPython = lazyWithRetry(() => import("../components/IMBSubCourses/IBMPython"));
const IBMNodeJs = lazyWithRetry(() => import("../components/IMBSubCourses/IBMNodeJs"));
const IBMNoSQL = lazyWithRetry(() => import("../components/IMBSubCourses/IBMNoSQL"));
const IBMMethodology = lazyWithRetry(() => import("../components/IMBSubCourses/IBMMethodology"));
const IBMMachineLearning = lazyWithRetry(() => import("../components/IMBSubCourses/IBMMachineLearning"));
const IBMKubernetes = lazyWithRetry(() => import("../components/IMBSubCourses/IBMKubernetes"));
const IBMJavaScript = lazyWithRetry(() => import("../components/IMBSubCourses/IBMJavaScript"));
const IBMDevopsFundamentals = lazyWithRetry(() => import("../components/IMBSubCourses/IBMDevopsFundamentals"));
const IBMDeepLearning = lazyWithRetry(() => import("../components/IMBSubCourses/IBMDeepLearning"));
const IBMDataAnalysis = lazyWithRetry(() => import("../components/IMBSubCourses/IBMDataAnalysis"));
const IBMCloudFundamental = lazyWithRetry(() => import("../components/IMBSubCourses/IBMCloudFundamental"));
const IBMBigData = lazyWithRetry(() => import("../components/IMBSubCourses/IBMBigData"));

// META subcourses
const MetaDigitalMarketing = lazyWithRetry(() => import("../pages/MetaCourse/MetaDigitalMarketing"));
const MetaFrontEndDeveloper = lazyWithRetry(() => import("../pages/MetaCourse/MetaFrontEndDeveloper"));
const MetaBackEndDeveloper = lazyWithRetry(() => import("../pages/MetaCourse/MetaBackEndDeveloper"));
const MetaAndroidDeveloper = lazyWithRetry(() => import("../pages/MetaCourse/MetaAndroidDeveloper"));
const MetaIosDeveloper = lazyWithRetry(() => import("../pages/MetaCourse/MetaIosDeveloper"));

// Other pages
const ServiceDetail = lazyWithRetry(() => import("../pages/ServiceDetail"));
const IBM = lazyWithRetry(() => import("../pages/IBM"));
const META = lazyWithRetry(() => import("../pages/META"));
const PartnerPage = lazyWithRetry(() => import("../pages/PartnerPage"));
const PMI = lazyWithRetry(() => import("../pages/PMI"));
const ITSpeacialist = lazyWithRetry(() => import("../pages/ITSpecialist"));
const SwiftDevelopment = lazyWithRetry(() => import("../pages/SwiftDevelopment"));
const Cart = lazyWithRetry(() => import("../pages/Cart/Cart"));
const SuccessCartPayment = lazyWithRetry(() => import("../pages/Cart/SuccessCartPayment"));
const CancelCartPayment = lazyWithRetry(() => import("../pages/Cart/CancelCartPayment"));

const Tally = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/Tally"));
const MicrosoftOffice = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/MicrosoftOffice"));
const Autodesk = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/Autodesk"));
const MicrosoftCertified = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/MicrosoftCertified"));
const Adobe = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/Adobe"));
const Unity = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/Unity"));
const CiscoCard = lazyWithRetry(() => import("../pages/PopularCertificationCoureses/CiscoCard"));

// PMI subcourses
const PMIProjectManagement = lazyWithRetry(() => import("../pages/PMICourse/PMIProjectManagement"));

// IT Specialist subcourses
const ITSpecialistPython = lazyWithRetry(() => import("../pages/ITSpecialistCourse/ITSpecialistPython"));
const ITSpecialistJavaScript = lazyWithRetry(() => import("../pages/ITSpecialistCourse/ITSpecialistJavaScript"));
const ITSpecialistHTML = lazyWithRetry(() => import("../pages/ITSpecialistCourse/ITSpecialistHTML"));
const ITSpecialistNetworking = lazyWithRetry(() => import("../pages/ITSpecialistCourse/ITSpecialistNetworking"));

// Swift Development subcourses
const SwiftDevelopmentBasics = lazyWithRetry(() => import("../pages/SwiftCourse/SwiftDevelopmentBasics"));
const SwiftDevelopmentAdvanced = lazyWithRetry(() => import("../pages/SwiftCourse/SwiftDevelopmentAdvanced"));

// Tally subcourses (Courses section) 
const TallyEssentialLevel1 = lazyWithRetry(() => import("../pages/TallyCourse/TallyEssentialLevel1"));
const TallyEssentialLevel2 = lazyWithRetry(() => import("../pages/TallyCourse/TallyEssentialLevel2"));
const TallyEssentialLevel3 = lazyWithRetry(() => import("../pages/TallyCourse/TallyEssentialLevel3"));
const TallyProfessional = lazyWithRetry(() => import("../pages/TallyCourse/TallyProfessional"));
const TallyEssentialComprehensive = lazyWithRetry(() => import("../pages/TallyCourse/TallyEssentialComprehensive"));
const TallyPrime = lazyWithRetry(() => import("../pages/TallyCourse/TallyPrime"));

// Autodesk subcourses
const AutodeskAutoCAD = lazyWithRetry(() => import("../pages/AutodeskCourse/AutodeskAutoCAD"));
const AutodeskRevit = lazyWithRetry(() => import("../pages/AutodeskCourse/AutodeskRevit"));
const Autodesk3dsMax = lazyWithRetry(() => import("../pages/AutodeskCourse/Autodesk3dsMax"));
const AutodeskFusion360 = lazyWithRetry(() => import("../pages/AutodeskCourse/AutodeskFusion360"));
const AutodeskMaya = lazyWithRetry(() => import("../pages/AutodeskCourse/AutodeskMaya"));

// Unity subcourses
const UnityArtistCourseware = lazyWithRetry(() => import("../pages/UnityCourse/ArtistCourseware"));
const UnityProgrammer = lazyWithRetry(() => import("../pages/UnityCourse/UnityProgrammer"));
const UnityDeveloperCourseware = lazyWithRetry(() => import("../pages/UnityCourse/DevelloperCourseware"));

const AllRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingComponent />}>
    <Routes>
      <Route path="/review-page" element={<ReviewPage />} />
      <Route path="/" element={<Home />} />
        <Route 
          path="/ebook-page" 
          element={token ? <BookPage /> : <Navigate to="/login" state={{ from: "/ebook-page" }} replace />} 
        /> 

        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" replace />} />
        <Route path="/forgot-password" element={!token ? <ForgotPassword /> : <Navigate to="/" replace />} />

      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/frequently-asked-questions" element={<FAQ />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/Terms-and-Conditions" element={<TermsAndCondition />} />
      <Route path="/CertificateLookup" element={<CertificateLookup />} />
        <Route path="/verifyCertificate" element={<VerifyCertificate />} />
        <Route 
          path="/Courses-details" 
          element={<Courses />} 
        />

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
          element={
            token ? (
              <Test />
            ) : (
              <Navigate 
                to="/login" 
                state={{ 
                  from: "/test",
                  testParams: location.state 
                }} 
                replace 
              />
            )
          } 
        />
      <Route path="/training" element={<Training />} />
        <Route path="/internal-exams" element={<InternalExams />} />
        <Route path="/voucher-success" element={<VoucherSuccess />} />
        <Route path="/voucher-cancel" element={<VoucherCancel />} />
        
        {/* Certification Routes */}
        <Route path="/comptia" element={<Comptia />} />
      <Route path="/aws" element={<Aws />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/awsNetworking" element={<AwsCertifiedNetworking />} />
        <Route path="/awsSolution" element={<AwsCertifiedSolution />} />
        <Route path="/awsCloud" element={<AwsCertifiedCloud />} />
        <Route path="/awsData" element={<AwsCertifiedData />} />
        <Route path="/awsMachine" element={<AwsCertifiedMachine />} />
        <Route path="/awsDevops" element={<AwsCertifiedDevops />} />
        <Route path="/awsDeveloper" element={<AwsCertifiedDeveloper />} />
        <Route path="/awsSysops" element={<AwsCertifiedSysops />} />
      <Route path="/awsSecurity" element={<AwsCertifiedSecurity />} />
        
        {/* CompTIA Subcourse Routes */}
      <Route path="/comptiaSecurity" element={<ComptiaSecurity />} />
      <Route path="/comptiaLinux" element={<ComptiaLinux />} />
      <Route path="/comptiaProject" element={<ComptiaProject />} />
      <Route path="/comptiaProject004" element={<ComptiaProject004 />} />
      <Route path="/comptiaPentest" element={<ComptiaPentest />} />
      <Route path="/comptiaA" element={<ComptiaA />} />
        <Route path="/comptiaNetwork" element={<ComptiaNetwork />} />
      <Route path="/comptiaCloud" element={<ComptiaCloud />} />
      <Route path="/comptiaServer" element={<ComptiaServer />} />
      <Route path="/comptiaData" element={<ComptiaData />} />
      <Route path="/comptiaCloudCLO" element={<ComptiaCloudCLO />} />
        <Route path="/ComptiaSecurity601" element={<ComptiaSecurity601 />} />
      <Route path="/comptiaCybersecurity" element={<ComptiaCybersecurity />} />
        <Route path="/comptiaAdvance" element={<ComptiaAdvance />} />
      <Route path="/comptiaNetwork007" element={<ComptiaNetwork007 />} />
        
        {/* Microsoft Subcourse Routes */}
        <Route path="/MicrosoftCourse/MicrosoftAzureAdmin" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureAdmin /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAi" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAi /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftDeveloper" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDeveloper /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftFundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftDynamic365" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDynamic365 /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzure" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzure /></Suspense>} />
        <Route path="/MicrosoftCourse/Microsoft365" element={<Suspense fallback={<LoadingComponent />}><Microsoft365 /></Suspense>} />
        <Route path="/MicrosoftCourse/Microsoft365Fundamentals" element={<Suspense fallback={<LoadingComponent />}><Microsoft365Fundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftSCI" element={<Suspense fallback={<LoadingComponent />}><MicrosoftSCI /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPlatform" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPowerPlatform /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureData" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureData /></Suspense>} />
        <Route path="/MicrosoftCourse/Microsoft365Associate" element={<Suspense fallback={<LoadingComponent />}><Microsoft365Associate /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftPowerBI" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPowerBI /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureCosmos" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureCosmos /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureSAP" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureSAP /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureSolutions" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureSolutions /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureVirtual" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureVirtual /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftDynamicFunction" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDynamicFunction /></Suspense>} />
        <Route path="/MicrosoftCourse/Microsoft365Certification" element={<Suspense fallback={<LoadingComponent />}><Microsoft365Certification /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftCyberAnalyst" element={<Suspense fallback={<LoadingComponent />}><MicrosoftCyberAnalyst /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftMS900" element={<Suspense fallback={<LoadingComponent />}><MicrosoftMS900 /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftPl300" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPl300 /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftSecurityFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftSecurityFundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftExcelExpert" element={<Suspense fallback={<LoadingComponent />}><MicrosoftExcelExpert /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftWordAssociate" element={<Suspense fallback={<LoadingComponent />}><MicrosoftWordAssociate /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftWordExpert" element={<Suspense fallback={<LoadingComponent />}><MicrosoftWordExpert /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPointAssociate" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPowerPointAssociate /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftExcelAssociate" element={<Suspense fallback={<LoadingComponent />}><MicrosoftExcelAssociate /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftDynamics365ERP" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDynamics365ERP /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureDataFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureDataFundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftAzureFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureFundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftDynamics365CRMFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDynamicsCRMFundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPlatformFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPowerPlatformFundamentals /></Suspense>} />
        
        {/* Cisco Subcourse Routes */}
        <Route path="/CCSTsupportTech" element={<CCSTsupportTech />} />
        <Route path="/CCSTcybersecurity" element={<CCSTcybersecurity />} />
        <Route path="/CCSTNetworking" element={<CCSTNetworking />} />
        <Route path="/CCTtechnician" element={<CCTtechnician />} />
        <Route path="/CCTroutingSwitching" element={<CCTroutingSwitching />} />
        <Route path="/CCTdatacenter" element={<CCTdatacenter />} />
        <Route path="/CCNA" element={<CCNA />} />
        <Route path="/CCCA" element={<CCCA />} />
        <Route path="/CCNPenterprises" element={<CCNPenterprises />} />
        <Route path="/CCNPsecurity" element={<CCNPsecurity />} />
        <Route path="/CCNPdatacenter" element={<CCNPdatacenter />} />
        <Route path="/CCNPserviceprovider" element={<CCNPserviceprovider />} />
        <Route path="/CCNPcollaboration" element={<CCNPcollaboration />} />
        <Route path="/CCNPdevnet" element={<CCNPdevnet />} />
        <Route path="/CCIEinfastructure" element={<CCIEinfastructure />} />
        <Route path="/CCIEwireless" element={<CCIEwireless />} />
        <Route path="/CCIEsecurity" element={<CCIEsecurity />} />
        <Route path="/CCIEdatacenter" element={<CCIEdatacenter />} />
        <Route path="/CCIEserviceprovider" element={<CCIEserviceprovider />} />
        <Route path="/CCIEcollab" element={<CCIEcollab />} />
        
        {/* IBM Subcourse Routes */}
        <Route path="/IBMAgileMethodologies" element={<IBMAgileMethodologies />} />
        <Route path="/htmlcourse" element={<WebdevelopementHTML />} />
        <Route path="/C-course" element={<WebdevelopementC />} />
        <Route path="/IBMSQL" element={<IBMSQL />} />
        <Route path="/IBMSoftwareFoundation" element={<IBMSoftwareFoundation />} />
        <Route path="/IBMScala" element={<IBMScala />} />
        <Route path="/IBMRestAPI" element={<IBMRestAPI />} />
        <Route path="/IBMRDBMS" element={<IBMRDBMS />} />
        <Route path="/IBMPython" element={<IBMPython />} />
        <Route path="/IBMNodeJs" element={<IBMNodeJs />} />
        <Route path="/IBMNoSQL" element={<IBMNoSQL />} />
        <Route path="/IBMMethodology" element={<IBMMethodology />} />
        <Route path="/IBMMachineLearning" element={<IBMMachineLearning />} />
        <Route path="/IBMKubernetes" element={<IBMKubernetes />} />
        <Route path="/IBMJavaScript" element={<IBMJavaScript />} />
        <Route path="/IBMDevopsFundamentals" element={<IBMDevopsFundamentals />} />
        <Route path="/IBMDeepLearning" element={<IBMDeepLearning />} />
        <Route path="/IBMDataAnalysis" element={<IBMDataAnalysis />} />
        <Route path="/IBMCloudFundamental" element={<IBMCloudFundamental />} />
        <Route path="/IBMBigData" element={<IBMBigData />} />
        
        {/* META Subcourse Routes */}
        <Route path="/MetaDigitalMarketing" element={<MetaDigitalMarketing />} />
        <Route path="/MetaFrontEndDeveloper" element={<MetaFrontEndDeveloper />} />
        <Route path="/MetaBackEndDeveloper" element={<MetaBackEndDeveloper />} />
        <Route path="/MetaAndroidDeveloper" element={<MetaAndroidDeveloper />} />
        <Route path="/MetaIosDeveloper" element={<MetaIosDeveloper />} />
        
        {/* Admin Panel */}
        <Route path="/admin-panel" element={token ? <AdminPanel /> : <Navigate to="/login" state={{ from: "/admin-panel" }} replace />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
      <Route path="/cer" element={<CertificateTemplate />} />

        {/* Microsoft */}
        <Route path="/microsoft" element={<Microsoft />} />

        {/* PECB */}
      <Route path="/PECB" element={<PECB />} />
      <Route path="/Computerforensics" element={<Computerforensics />} />
      <Route path="/CybersecurityAuditTrainings" element={<CybersecurityAuditTrainings />} />
      <Route path="/ISO9001LeadImplementer" element={<ISO9001LeadImplementer />} />
      <Route path="/ISO9001" element={<ISO9001 />} />
      <Route path="/ISO22301" element={<ISO22301 />} />
      <Route path="/ISO31000RiskManager" element={<ISO31000RiskManager />} />
      <Route path="/ISO37001" element={<ISO37001 />} />
      <Route path="/ISO45001" element={<ISO45001 />} />
      <Route path="/ISOIEC27001LeadImplementer" element={<Isoiec27001LeadImplementer />} />
      <Route path="/ISOIEC27001" element={<Isoiec27001 />} />
      <Route path="/ISOIEC27005RiskManager" element={<Isoiec27005RiskManager />} />
      <Route path="/ISOIEC27032CyberSecurity" element={<Isoiec27032CyberSecurity />} />
      <Route path="/PecbCertifiedISO27001Foundation" element={<PecbCertifiedIso27001Foundation />} />
      <Route path="/SCADASecurityManager" element={<SCADASecurityManager />} />

        {/* Cisco */}
        <Route path="/CISCO" element={<Navigate to="/ciscocard" replace />} />
        <Route path="/Cisco" element={<Navigate to="/ciscocard" replace />} />
        <Route path="/cisco" element={<Navigate to="/ciscocard" replace />} />

        {/* Other Routes */}
      <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/IBM" element={<IBM />} />
        <Route path="/META" element={<META />} />
        <Route path="/PartnerPage" element={<PartnerPage />} />
        <Route path="/PMI" element={<PMI />} />
        <Route path="/ITSpeacialist" element={<ITSpeacialist />} />
        <Route path="/SwiftDevelopment" element={<SwiftDevelopment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Cart" element={<Navigate to="/cart" replace />} />
        <Route path="/success" element={<SuccessCartPayment />} />
        <Route path="/cancel-stripe-payment" element={<CancelCartPayment />} />
        <Route path="/Tally" element={<Tally />} />
        <Route path="/MicrosoftOffice" element={<MicrosoftOffice/>} />
        <Route path="/Autodesk" element={<Autodesk/>} />
        <Route path="/MicrosoftCertified" element={<MicrosoftCertified/>} />
        <Route path="/Adobe" element={<Adobe/>} />
        <Route path="/unity" element={<Unity/>} />
        <Route path="/ciscocard" element={<CiscoCard/>} />
        <Route path="/Gallery" element={<Gallery/>} />

      {/* PMI Subcourse Routes */}
      <Route path="/PMIProjectManagement" element={<PMIProjectManagement />} />

      {/* IT Specialist Subcourse Routes */}
      <Route path="/ITSpecialistPython" element={<ITSpecialistPython />} />
      <Route path="/ITSpecialistJavaScript" element={<ITSpecialistJavaScript />} />
      <Route path="/ITSpecialistHTML" element={<ITSpecialistHTML />} />
      <Route path="/ITSpecialistNetworking" element={<ITSpecialistNetworking />} />
      
      {/* Swift Development Subcourse Routes */}
      <Route path="/SwiftDevelopmentBasics" element={<SwiftDevelopmentBasics />} />
      <Route path="/SwiftDevelopmentAdvanced" element={<SwiftDevelopmentAdvanced />} />

      {/* Tally Subcourse Routes */}
      <Route path="/TallyEssentialLevel1" element={<TallyEssentialLevel1 />} />
      <Route path="/TallyEssentialLevel2" element={<TallyEssentialLevel2 />} />
      <Route path="/TallyEssentialLevel3" element={<TallyEssentialLevel3 />} />
      <Route path="/TallyProfessional" element={<TallyProfessional />} />
      <Route path="/TallyEssentialComprehensive" element={<TallyEssentialComprehensive />} />
      <Route path="/TallyPrime" element={<TallyPrime />} />

      {/* Autodesk Subcourse Routes */}
      <Route path="/AutodeskCourse/AutodeskAutoCAD" element={<Suspense fallback={<LoadingComponent />}><AutodeskAutoCAD /></Suspense>} />
      <Route path="/AutodeskCourse/AutodeskRevit" element={<Suspense fallback={<LoadingComponent />}><AutodeskRevit /></Suspense>} />
      <Route path="/AutodeskCourse/Autodesk3dsMax" element={<Suspense fallback={<LoadingComponent />}><Autodesk3dsMax /></Suspense>} />
      <Route path="/AutodeskCourse/AutodeskFusion360" element={<Suspense fallback={<LoadingComponent />}><AutodeskFusion360 /></Suspense>} />
      <Route path="/AutodeskCourse/AutodeskMaya" element={<Suspense fallback={<LoadingComponent />}><AutodeskMaya /></Suspense>} />

      {/* Unity Subcourse Routes */}
      <Route path="/UnityCourse/ArtistCourseware" element={<Suspense fallback={<LoadingComponent />}><UnityArtistCourseware /></Suspense>} />
      <Route path="/UnityCourse/UnityProgrammer" element={<Suspense fallback={<LoadingComponent />}><UnityProgrammer /></Suspense>} />
      <Route path="/UnityCourse/DeveloperCourseware" element={<Suspense fallback={<LoadingComponent />}><UnityDeveloperCourseware /></Suspense>} />

      {/* Adobe Subcourse Routes */}
      <Route path="/AdobeCourse/AdobePhotoshop" element={<Suspense fallback={<LoadingComponent />}><AdobePhotoshop /></Suspense>} />
      <Route path="/AdobeCourse/PhotoshopCertified" element={<Suspense fallback={<LoadingComponent />}><PhotoshopCertified /></Suspense>} />
      <Route path="/AdobeCourse/AdobeIllustrator" element={<Suspense fallback={<LoadingComponent />}><AdobeIllustrator /></Suspense>} />
      <Route path="/AdobeCourse/AdobePremiere" element={<Suspense fallback={<LoadingComponent />}><AdobePremiere /></Suspense>} />
      <Route path="/AdobeCourse/AdobeAfterEffects" element={<Suspense fallback={<LoadingComponent />}><AdobeAfterEffects /></Suspense>} />
      <Route path="/AdobeCourse/AdobeLightroom" element={<Suspense fallback={<LoadingComponent />}><AdobeLightroom /></Suspense>} />
      <Route path="/AdobeCourse/AdobeInDesign" element={<Suspense fallback={<LoadingComponent />}><AdobeInDesign /></Suspense>} />
      <Route path="/AdobeCourse/AdobeXD" element={<Suspense fallback={<LoadingComponent />}><AdobeXD /></Suspense>} />
      
      {/* Catch-all route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </Suspense>
  );
};

export default AllRoute;