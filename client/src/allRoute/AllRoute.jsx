// Updated by Saurav
import React from "react";
// Removed lazyWithRetry import to avoid Suspense errors
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";
import Gallery from "../pages/Gallery";
import CertificateLookup from "../pages/CertificateLookup";
// Preload BS icons to avoid chunk loading errors
import * as BsIcons from "react-icons/bs";
// Direct imports for critical pages to avoid Suspense errors
import Home from "../pages/Home";
import Login from "../pages/Login";
import AboutUS from "../pages/AboutUS";
import ContactUs from "../pages/ContactUs";
import Signup from "../pages/Signup";
import FAQ from "../pages/FAQ";
import Services from "../pages/Services";
import TermsAndCondition from "../pages/TermsAndCondition";
import Courses from "../pages/Courses";
import Career from "../pages/Career/Career";
import Policy from "../pages/Policy";
import PageNotFound from "../pages/404/PageNotFound";
import Blogs from "../pages/Blogs/Blogs";
import CompTIAsinglePage from "../pages/SinglePage/CompTIA/CompTIAsinglePage";
import ReviewPage from "../pages/review/ReviewPage";
import LandingPage from "../pages/landingPage/LandingPage";
import Employee from "../pages/Employee";
import Internship from "../pages/Internship";
import Test from "../pages/Test/Test";
import Training from "../pages/Training";
import InternalExams from "../pages/InternalExams";
import VoucherSuccess from "../pages/VoucherSuccess";
import VoucherCancel from "../pages/VoucherCancel";
import Comptia from "../pages/Comptia";
import Aws from "../pages/Aws";
import BookPage from "../pages/ebook/BookPage";

// Certification pages - AWS
import Overview from "../pages/AWS/Overview";
import AwsCertifiedNetworking from "../pages/AWS/AwsCertifiedNetworking";
import AwsCertifiedSolution from "../pages/AWS/AwsCertifiedSolution";
import AwsCertifiedCloud from "../pages/AWS/AwsCertifiedCloud";
import AwsCertifiedData from "../pages/AWS/AwsCertifiedData";
import AwsCertifiedMachine from "../pages/AWS/AwsCertifiedMachine";
import AwsCertifiedDevops from "../pages/AWS/AwsCertifiedDevops";
import AwsCertifiedDeveloper from "../pages/AWS/AwsCertifiedDeveloper";
import AwsCertifiedSysops from "../pages/AWS/AwsCertifiedSysops";
import AwsCertifiedSecurity from "../pages/AWS/AwsCertifiedSecurity";

// Admin imports
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import VerifyCertificate from "../pages/Test/VerifyCertificate";
import CertificateTemplate from "../pages/Test/CertificateTemplate";

// Microsoft
import Microsoft from "../pages/Microsoft";

// Adobe
import AdobePhotoshop from "../pages/AdobeCourse/AdobePhotoshop";
import PhotoshopCertified from "../pages/AdobeCourse/PhotoshopCertified";
import AdobeIllustrator from "../pages/AdobeCourse/AdobeIllustrator";
import AdobePremiere from "../pages/AdobeCourse/AdobePremiere";
import AdobeAfterEffects from "../pages/AdobeCourse/AdobeAfterEffects";
import AdobeLightroom from "../pages/AdobeCourse/AdobeLightroom";
import AdobeInDesign from "../pages/AdobeCourse/AdobeInDesign";
import AdobeXD from "../pages/AdobeCourse/AdobeXD";

// PECB
import PECB from "../pages/PECB";
import Computerforensics from "../pages/Pecb/Computer-forensics";
import CybersecurityAuditTrainings from "../pages/Pecb/Cybersecurity-Audit-Trainings";
import ISO9001LeadImplementer from "../pages/Pecb/ISO-9001-Lead-Implementer";
import ISO9001 from "../pages/Pecb/ISO-9001";
import ISO22301 from "../pages/Pecb/ISO-22301";
import ISO31000RiskManager from "../pages/Pecb/ISO-31000-Risk-Manager";
import ISO37001 from "../pages/Pecb/ISO-37001";
import ISO45001 from "../pages/Pecb/ISO-45001";
import Isoiec27001LeadImplementer from "../pages/Pecb/Iso-iec-27001-Lead-Implementer";
import Isoiec27001 from "../pages/Pecb/Iso-iec-27001";
import Isoiec27005RiskManager from "../pages/Pecb/Iso-iec-27005-Risk-Manager";
import Isoiec27032CyberSecurity from "../pages/Pecb/Iso-iec-27032-Cyber-Security";
import PecbCertifiedIso27001Foundation from "../pages/Pecb/Pecb-Certified-Iso-27001-Foundation";
import SCADASecurityManager from "../pages/Pecb/SCADA-Security-Manager";

// Cisco
import Cisco from "../pages/Cisco";

// CompTIA subcourses
import ComptiaSecurity from "../pages/CompTIACourse/ComptiaSecurity";
import ComptiaLinux from "../pages/CompTIACourse/ComptiaLinux";
import ComptiaProject from "../pages/CompTIACourse/ComptiaProject";
import ComptiaProject004 from "../pages/CompTIACourse/ComptiaProject004";
import ComptiaPentest from "../pages/CompTIACourse/ComptiaPentest";
import ComptiaA from "../pages/CompTIACourse/ComptiaA";
import ComptiaNetwork from "../pages/CompTIACourse/ComptiaNetwork";
import ComptiaCloud from "../pages/CompTIACourse/ComptiaCloud";
import ComptiaServer from "../pages/CompTIACourse/ComptiaServer";
import ComptiaData from "../pages/CompTIACourse/ComptiaData";
import ComptiaCloudCLO from "../pages/CompTIACourse/ComptiaCloudCLO";
import ComptiaSecurity601 from "../pages/CompTIACourse/ComptiaSecurity601";
import ComptiaCybersecurity from "../pages/CompTIACourse/ComptiaCyberscurity";
import ComptiaAdvance from "../pages/CompTIACourse/ComptiaAdvance";
import ComptiaNetwork007 from "../pages/CompTIACourse/ComptiaNetwork007";

// Microsoft subcourses
import MicrosoftAzureAdmin from "../pages/MicrosoftCourse/MicrosoftAzureAdministrator";
import MicrosoftAi from "../pages/MicrosoftCourse/MicrosoftAi";
import MicrosoftDeveloper from "../pages/MicrosoftCourse/MicrosoftDeveloper";
import MicrosoftFundamentals from "../pages/MicrosoftCourse/MicrosoftFundamentals";
import MicrosoftDynamic365 from "../pages/MicrosoftCourse/MicrosoftDynamic365";
import MicrosoftAzure from "../pages/MicrosoftCourse/MicrosoftAzure";
import Microsoft365 from "../pages/MicrosoftCourse/Microsoft365";
import Microsoft365Fundamentals from "../pages/MicrosoftCourse/Microsoft365Fundamentals";
import MicrosoftSCI from "../pages/MicrosoftCourse/MicrosoftSecurity";
import MicrosoftPowerPlatform from "../pages/MicrosoftCourse/MicrosoftPowerbi";
import MicrosoftAzureData from "../pages/MicrosoftCourse/MicrosoftAzureData";
import Microsoft365Associate from "../pages/MicrosoftCourse/Microsoft365Associate";
import MicrosoftPowerBI from "../pages/MicrosoftCourse/MicrosoftPowerbi";
import MicrosoftAzureCosmos from "../pages/MicrosoftCourse/MicrosoftAzureCosmos";
import MicrosoftAzureSAP from "../pages/MicrosoftCourse/MicrosoftAzureSAP";
import MicrosoftAzureSolutions from "../pages/MicrosoftCourse/MicrosoftAzureSolutions";
import MicrosoftAzureVirtual from "../pages/MicrosoftCourse/MicrosoftAzureVirtual";
import MicrosoftDynamicFunction from "../pages/MicrosoftCourse/MicrosoftDynamicFunctional";
import Microsoft365Certification from "../pages/MicrosoftCourse/Microsoft365Certification";
import MicrosoftCyberAnalyst from "../pages/MicrosoftCourse/MicrosoftCyberAnalyst";
import MicrosoftMS900 from "../pages/MicrosoftCourse/MicrosoftMs900";
import MicrosoftPl300 from "../pages/MicrosoftCourse/MicrosoftPl300";
import MicrosoftExcelExpert from "../pages/MicrosoftCourse/MicrosoftExcelExpert";
import MicrosoftWordAssociate from "../pages/MicrosoftCourse/MicrosoftWordAssociate";
import MicrosoftWordExpert from "../pages/MicrosoftCourse/MicrosoftWordExpert";
import MicrosoftPowerPointAssociate from "../pages/MicrosoftCourse/MicrosoftPowerPointAssociate";
import MicrosoftExcelAssociate from "../pages/MicrosoftCourse/MicrosoftExcelAssociate";
import MicrosoftDynamics365ERP from "../pages/MicrosoftCourse/MicrosoftDynamics365ERP";
import MicrosoftAzureDataFundamentals from "../pages/MicrosoftCourse/MicrosoftAzureDataFundamentals";
import MicrosoftAzureFundamentals from "../pages/MicrosoftCourse/MicrosoftAzureFundamentals";
import MicrosoftDynamicsCRMFundamentals from "../pages/MicrosoftCourse/MicrosoftDynamicsCRMFundamentals";
import MicrosoftPowerPlatformFundamentals from "../pages/MicrosoftCourse/MicrosoftPowerPlatformFundamentals";
import MicrosoftSecurityFundamentals from "../pages/MicrosoftCourse/MicrosoftSecurityFundamentals";

// Cisco subcourses
import CCSTsupportTech from "../pages/CiscoCourse/CcstSupportTechnician";
import CCSTcybersecurity from "../pages/CiscoCourse/CCSTCybersecurity";
import CCSTNetworking from "../pages/CiscoCourse/CCSTNetworking";
import CCTtechnician from "../pages/CiscoCourse/CcstSupportTechnician";
import CCTroutingSwitching from "../pages/CiscoCourse/CCTroutingSwitching";
import CCTdatacenter from "../pages/CiscoCourse/CCTdatacenter";
import CCNA from "../pages/CiscoCourse/CCNA";
import CCCA from "../pages/CiscoCourse/CCCA";
import CCNPenterprises from "../pages/CiscoCourse/CCNPenterprises";
import CCNPsecurity from "../pages/CiscoCourse/CCNPsecurity";
import CCNPdatacenter from "../pages/CiscoCourse/CCNPdatacenter";
import CCNPserviceprovider from "../pages/CiscoCourse/CCNPserviceprovider";
import CCNPcollaboration from "../pages/CiscoCourse/CCNPcollaboration";
import CCNPdevnet from "../pages/CiscoCourse/CCNPdevnet";
import CCIEinfastructure from "../pages/CiscoCourse/CCIEinfasturcture";
import CCIEwireless from "../pages/CiscoCourse/CCIEwireless";
import CCIEsecurity from "../pages/CiscoCourse/CCIEsecurity";
import CCIEdatacenter from "../pages/CiscoCourse/CCIEdatacenter";
import CCIEserviceprovider from "../pages/CiscoCourse/CCIEserviceprovider";
import CCIEcollab from "../pages/CiscoCourse/CCIEcollaboration";

// IBM subcourses
import IBMAgileMethodologies from "../components/IMBSubCourses/IBMAgileMethodologies";
import WebdevelopementHTML from "../components/IMBSubCourses/Webdevelopementhtml";
import WebdevelopementC from "../components/IMBSubCourses/WebdevelopementC";
import IBMSQL from "../components/IMBSubCourses/IBMSQL";
import IBMSoftwareFoundation from "../components/IMBSubCourses/IBMSoftwareFoundation";
import IBMScala from "../components/IMBSubCourses/IBMScala";
import IBMRestAPI from "../components/IMBSubCourses/IBMRestAPI";
import IBMRDBMS from "../components/IMBSubCourses/IBMRDBMS";
import IBMPython from "../components/IMBSubCourses/IBMPython";
import IBMNodeJs from "../components/IMBSubCourses/IBMNodeJs";
import IBMNoSQL from "../components/IMBSubCourses/IBMNoSQL";
import IBMMethodology from "../components/IMBSubCourses/IBMMethodology";
import IBMMachineLearning from "../components/IMBSubCourses/IBMMachineLearning";
import IBMKubernetes from "../components/IMBSubCourses/IBMKubernetes";
import IBMJavaScript from "../components/IMBSubCourses/IBMJavaScript";
import IBMDevopsFundamentals from "../components/IMBSubCourses/IBMDevopsFundamentals";
import IBMDeepLearning from "../components/IMBSubCourses/IBMDeepLearning";
import IBMDataAnalysis from "../components/IMBSubCourses/IBMDataAnalysis";
import IBMCloudFundamental from "../components/IMBSubCourses/IBMCloudFundamental";
import IBMBigData from "../components/IMBSubCourses/IBMBigData";

// META subcourses
import MetaDigitalMarketing from "../pages/MetaCourse/MetaDigitalMarketing";
import MetaFrontEndDeveloper from "../pages/MetaCourse/MetaFrontEndDeveloper";
import MetaBackEndDeveloper from "../pages/MetaCourse/MetaBackEndDeveloper";
import MetaAndroidDeveloper from "../pages/MetaCourse/MetaAndroidDeveloper";
import MetaIosDeveloper from "../pages/MetaCourse/MetaIosDeveloper";

// Other pages
import ServiceDetail from "../pages/ServiceDetail";
import IBM from "../pages/IBM";
import META from "../pages/META";
import PartnerPage from "../pages/PartnerPage";
import PMI from "../pages/PMI";
import ITSpeacialist from "../pages/ITSpecialist";
import SwiftDevelopment from "../pages/SwiftDevelopment";
import Cart from "../pages/Cart/Cart";
import SuccessCartPayment from "../pages/Cart/SuccessCartPayment";
import CancelCartPayment from "../pages/Cart/CancelCartPayment";

import Tally from "../pages/PopularCertificationCoureses/Tally";
import MicrosoftOffice from "../pages/PopularCertificationCoureses/MicrosoftOffice";
import Autodesk from "../pages/PopularCertificationCoureses/Autodesk";
import MicrosoftCertified from "../pages/PopularCertificationCoureses/MicrosoftCertified";
import Adobe from "../pages/PopularCertificationCoureses/Adobe";
import Unity from "../pages/PopularCertificationCoureses/Unity";
import CiscoCard from "../pages/PopularCertificationCoureses/CiscoCard";

// PMI subcourses
import PMIProjectManagement from "../pages/PMICourse/PMIProjectManagement";

// IT Specialist subcourses
import ITSpecialistPython from "../pages/ITSpecialistCourse/ITSpecialistPython";
import ITSpecialistJavaScript from "../pages/ITSpecialistCourse/ITSpecialistJavaScript";
import ITSpecialistHTML from "../pages/ITSpecialistCourse/ITSpecialistHTML";
import ITSpecialistNetworking from "../pages/ITSpecialistCourse/ITSpecialistNetworking";

// Swift Development subcourses
import SwiftDevelopmentBasics from "../pages/SwiftCourse/SwiftDevelopmentBasics";
import SwiftDevelopmentAdvanced from "../pages/SwiftCourse/SwiftDevelopmentAdvanced";

// Tally subcourses (Courses section) 
import TallyEssentialLevel1 from "../pages/TallyCourse/TallyEssentialLevel1";
import TallyEssentialLevel2 from "../pages/TallyCourse/TallyEssentialLevel2";
import TallyEssentialLevel3 from "../pages/TallyCourse/TallyEssentialLevel3";
import TallyProfessional from "../pages/TallyCourse/TallyProfessional";
import TallyEssentialComprehensive from "../pages/TallyCourse/TallyEssentialComprehensive";
import TallyPrime from "../pages/TallyCourse/TallyPrime";

// Autodesk subcourses
import AutodeskAutoCAD from "../pages/AutodeskCourse/AutodeskAutoCAD";
import AutodeskRevit from "../pages/AutodeskCourse/AutodeskRevit";
import Autodesk3dsMax from "../pages/AutodeskCourse/Autodesk3dsMax";
import AutodeskFusion360 from "../pages/AutodeskCourse/AutodeskFusion360";
import AutodeskMaya from "../pages/AutodeskCourse/AutodeskMaya";

// Unity subcourses
import UnityArtistCourseware from "../pages/UnityCourse/ArtistCourseware";
import UnityProgrammer from "../pages/UnityCourse/UnityProgrammer";
import UnityDeveloperCourseware from "../pages/UnityCourse/DevelloperCourseware";

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

const AllRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  return (
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
        <Route path="/MicrosoftCourse/MicrosoftAzureAdmin" element={<MicrosoftAzureAdmin />} />
        <Route path="/MicrosoftCourse/MicrosoftAi" element={<MicrosoftAi />} />
        <Route path="/MicrosoftCourse/MicrosoftDeveloper" element={<MicrosoftDeveloper />} />
        <Route path="/MicrosoftCourse/MicrosoftFundamentals" element={<MicrosoftFundamentals />} />
        <Route path="/MicrosoftCourse/MicrosoftDynamic365" element={<MicrosoftDynamic365 />} />
        <Route path="/MicrosoftCourse/MicrosoftAzure" element={<MicrosoftAzure />} />
        <Route path="/MicrosoftCourse/Microsoft365" element={<Microsoft365 />} />
        <Route path="/MicrosoftCourse/Microsoft365Fundamentals" element={<Microsoft365Fundamentals />} />
        <Route path="/MicrosoftCourse/MicrosoftSCI" element={<MicrosoftSCI />} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPlatform" element={<MicrosoftPowerPlatform />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureData" element={<MicrosoftAzureData />} />
        <Route path="/MicrosoftCourse/Microsoft365Associate" element={<Microsoft365Associate />} />
        <Route path="/MicrosoftCourse/MicrosoftPowerBI" element={<MicrosoftPowerBI />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureCosmos" element={<MicrosoftAzureCosmos />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureSAP" element={<MicrosoftAzureSAP />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureSolutions" element={<MicrosoftAzureSolutions />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureVirtual" element={<MicrosoftAzureVirtual />} />
        <Route path="/MicrosoftCourse/MicrosoftDynamicFunction" element={<MicrosoftDynamicFunction />} />
        <Route path="/MicrosoftCourse/Microsoft365Certification" element={<Microsoft365Certification />} />
        <Route path="/MicrosoftCourse/MicrosoftCyberAnalyst" element={<MicrosoftCyberAnalyst />} />
        <Route path="/MicrosoftCourse/MicrosoftMS900" element={<MicrosoftMS900 />} />
        <Route path="/MicrosoftCourse/MicrosoftPl300" element={<MicrosoftPl300 />} />
        <Route path="/MicrosoftCourse/MicrosoftSecurityFundamentals" element={<MicrosoftSecurityFundamentals />} />
        <Route path="/MicrosoftCourse/MicrosoftExcelExpert" element={<MicrosoftExcelExpert />} />
        <Route path="/MicrosoftCourse/MicrosoftWordAssociate" element={<MicrosoftWordAssociate />} />
        <Route path="/MicrosoftCourse/MicrosoftWordExpert" element={<MicrosoftWordExpert />} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPointAssociate" element={<MicrosoftPowerPointAssociate />} />
        <Route path="/MicrosoftCourse/MicrosoftExcelAssociate" element={<MicrosoftExcelAssociate />} />
        <Route path="/MicrosoftCourse/MicrosoftDynamics365ERP" element={<MicrosoftDynamics365ERP />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureDataFundamentals" element={<MicrosoftAzureDataFundamentals />} />
        <Route path="/MicrosoftCourse/MicrosoftAzureFundamentals" element={<MicrosoftAzureFundamentals />} />
        <Route path="/MicrosoftCourse/MicrosoftDynamics365CRMFundamentals" element={<MicrosoftDynamicsCRMFundamentals />} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPlatformFundamentals" element={<MicrosoftPowerPlatformFundamentals />} />
        
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
      <Route path="/AutodeskCourse/AutodeskAutoCAD" element={<AutodeskAutoCAD />} />
      <Route path="/AutodeskCourse/AutodeskRevit" element={<AutodeskRevit />} />
      <Route path="/AutodeskCourse/Autodesk3dsMax" element={<Autodesk3dsMax />} />
      <Route path="/AutodeskCourse/AutodeskFusion360" element={<AutodeskFusion360 />} />
      <Route path="/AutodeskCourse/AutodeskMaya" element={<AutodeskMaya />} />

      {/* Unity Subcourse Routes */}
      <Route path="/UnityCourse/ArtistCourseware" element={<UnityArtistCourseware />} />
      <Route path="/UnityCourse/UnityProgrammer" element={<UnityProgrammer />} />
      <Route path="/UnityCourse/DeveloperCourseware" element={<UnityDeveloperCourseware />} />

      {/* Adobe Subcourse Routes */}
      <Route path="/AdobeCourse/AdobePhotoshop" element={<AdobePhotoshop />} />
      <Route path="/AdobeCourse/PhotoshopCertified" element={<PhotoshopCertified />} />
      <Route path="/AdobeCourse/AdobeIllustrator" element={<AdobeIllustrator />} />
      <Route path="/AdobeCourse/AdobePremiere" element={<AdobePremiere />} />
      <Route path="/AdobeCourse/AdobeAfterEffects" element={<AdobeAfterEffects />} />
      <Route path="/AdobeCourse/AdobeLightroom" element={<AdobeLightroom />} />
      <Route path="/AdobeCourse/AdobeInDesign" element={<AdobeInDesign />} />
      <Route path="/AdobeCourse/AdobeXD" element={<AdobeXD />} />
      
      {/* Catch-all route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoute;