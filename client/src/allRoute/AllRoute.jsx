// Updated by Saurav
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";
import Gallery from "../pages/Gallery";
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
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const AboutUS = lazy(() => import("../pages/AboutUs/AboutUS"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const Signup = lazy(() => import("../pages/Signup"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Services = lazy(() => import("../pages/Services"));
const TermsAndCondition = lazy(() => import("../pages/TermsAndCondition"));
const Courses = lazy(() => import("../pages/Courses"));
const Career = lazy(() => import("../pages/Career/Career"));
const Policy = lazy(() => import("../pages/Policy"));
const PageNotFound = lazy(() => import("../pages/404/PageNotFound"));
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));
const CompTIAsinglePage = lazy(() => import("../pages/SinglePage/CompTIA/CompTIAsinglePage"));
const ReviewPage = lazy(() => import("../pages/review/ReviewPage"));
const LandingPage = lazy(() => import("../pages/landingPage/LandingPage"));
const Employee = lazy(() => import("../pages/Employee"));
const Internship = lazy(() => import("../pages/Internship"));
const Test = lazy(() => import("../pages/Test/Test"));
const Training = lazy(() => import("../pages/Training"));
const Comptia = lazy(() => import("../pages/Comptia"));
const Aws = lazy(() => import("../pages/Aws"));
const BookPage = lazy(() => import("../pages/ebook/BookPage"));

// Certification pages - AWS
const Overview = lazy(() => import("../pages/AWS/Overview"));
const AwsCertifiedNetworking = lazy(() => import("../pages/AWS/AwsCertifiedNetworking"));
const AwsCertifiedSolution = lazy(() => import("../pages/AWS/AwsCertifiedSolution"));
const AwsCertifiedCloud = lazy(() => import("../pages/AWS/AwsCertifiedCloud"));
const AwsCertifiedData = lazy(() => import("../pages/AWS/AwsCertifiedData"));
const AwsCertifiedMachine = lazy(() => import("../pages/AWS/AwsCertifiedMachine"));
const AwsCertifiedDevops = lazy(() => import("../pages/AWS/AwsCertifiedDevops"));
const AwsCertifiedDeveloper = lazy(() => import("../pages/AWS/AwsCertifiedDeveloper"));
const AwsCertifiedSysops = lazy(() => import("../pages/AWS/AwsCertifiedSysops"));
const AwsCertifiedSecurity = lazy(() => import("../pages/AWS/AwsCertifiedSecurity"));

// Admin imports
const AdminPanel = lazy(() => import("../pages/AdminPanel/AdminPanel"));
const EmployeeInfoPage = lazy(() => import("../pages/AdminPanel/EmployeeManagement/UserPage/UserPage"));
const VerifyCertificate = lazy(() => import("../pages/Test/VerifyCertificate"));
const CertificateTemplate = lazy(() => import("../pages/Test/CertificateTemplate"));

// Microsoft
const Microsoft = lazy(() => import("../pages/Microsoft"));

// PECB
const PECB = lazy(() => import("../pages/PECB"));
const Computerforensics = lazy(() => import("../pages/Pecb/Computer-forensics"));
const CybersecurityAuditTrainings = lazy(() => import("../pages/Pecb/Cybersecurity-Audit-Trainings"));
const ISO9001LeadImplementer = lazy(() => import("../pages/Pecb/ISO-9001-Lead-Implementer"));
const ISO9001 = lazy(() => import("../pages/Pecb/ISO-9001"));
const ISO22301 = lazy(() => import("../pages/Pecb/ISO-22301"));
const ISO31000RiskManager = lazy(() => import("../pages/Pecb/ISO-31000-Risk-Manager"));
const ISO37001 = lazy(() => import("../pages/Pecb/ISO-37001"));
const ISO45001 = lazy(() => import("../pages/Pecb/ISO-45001"));
const Isoiec27001LeadImplementer = lazy(() => import("../pages/Pecb/Iso-iec-27001-Lead-Implementer"));
const Isoiec27001 = lazy(() => import("../pages/Pecb/Iso-iec-27001"));
const Isoiec27005RiskManager = lazy(() => import("../pages/Pecb/Iso-iec-27005-Risk-Manager"));
const Isoiec27032CyberSecurity = lazy(() => import("../pages/Pecb/Iso-iec-27032-Cyber-Security"));
const PecbCertifiedIso27001Foundation = lazy(() => import("../pages/Pecb/Pecb-Certified-Iso-27001-Foundation"));
const SCADASecurityManager = lazy(() => import("../pages/Pecb/SCADA-Security-Manager"));

// Cisco
const Cisco = lazy(() => import("../pages/Cisco"));

// CompTIA subcourses
const ComptiaSecurity = lazy(() => import("../pages/CompTIACourse/ComptiaSecurity"));
const ComptiaLinux = lazy(() => import("../pages/CompTIACourse/ComptiaLinux"));
const ComptiaProject = lazy(() => import("../pages/CompTIACourse/ComptiaProject"));
const ComptiaProject004 = lazy(() => import("../pages/CompTIACourse/ComptiaProject004"));
const ComptiaPentest = lazy(() => import("../pages/CompTIACourse/ComptiaPentest"));
const ComptiaA = lazy(() => import("../pages/CompTIACourse/ComptiaA"));
const ComptiaNetwork = lazy(() => import("../pages/CompTIACourse/ComptiaNetwork"));
const ComptiaCloud = lazy(() => import("../pages/CompTIACourse/ComptiaCloud"));
const ComptiaServer = lazy(() => import("../pages/CompTIACourse/ComptiaServer"));
const ComptiaData = lazy(() => import("../pages/CompTIACourse/ComptiaData"));
const ComptiaCloudCLO = lazy(() => import("../pages/CompTIACourse/ComptiaCloudCLO"));
const ComptiaSecurity601 = lazy(() => import("../pages/CompTIACourse/ComptiaSecurity601"));
const ComptiaCybersecurity = lazy(() => import("../pages/CompTIACourse/ComptiaCyberscurity"));
const ComptiaAdvance = lazy(() => import("../pages/CompTIACourse/ComptiaAdvance"));
const ComptiaNetwork007 = lazy(() => import("../pages/CompTIACourse/ComptiaNetwork007"));

// Microsoft subcourses
const MicrosoftAzureAdmin = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureAdministrator"));
const MicrosoftAi = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAi"));
const MicrosoftDeveloper = lazy(() => import("../pages/MicrosoftCourse/MicrosoftDeveloper"));
const MicrosoftFundamentals = lazy(() => import("../pages/MicrosoftCourse/MicrosoftFundamentals"));
const MicrosoftDynamic365 = lazy(() => import("../pages/MicrosoftCourse/MicrosoftDynamic365"));
const MicrosoftAzure = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzure"));
const Microsoft365 = lazy(() => import("../pages/MicrosoftCourse/Microsoft365"));
const Microsoft365Fundamentals = lazy(() => import("../pages/MicrosoftCourse/Microsoft365Fundamentals"));
const MicrosoftSCI = lazy(() => import("../pages/MicrosoftCourse/MicrosoftSecurity"));
const MicrosoftPowerPlatform = lazy(() => import("../pages/MicrosoftCourse/MicrosoftPowerbi"));
const MicrosoftAzureData = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureData"));
const Microsoft365Associate = lazy(() => import("../pages/MicrosoftCourse/Microsoft365Associate"));
const MicrosoftPowerBI = lazy(() => import("../pages/MicrosoftCourse/MicrosoftPowerbi"));
const MicrosoftAzureCosmos = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureCosmos"));
const MicrosoftAzureSAP = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureSAP"));
const MicrosoftAzureSolutions = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureSolutions"));
const MicrosoftAzureVirtual = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureVirtual"));
const MicrosoftDynamicFunction = lazy(() => import("../pages/MicrosoftCourse/MicrosoftDynamicFunctional"));
const Microsoft365Certification = lazy(() => import("../pages/MicrosoftCourse/Microsoft365Certification"));
const MicrosoftCyberAnalyst = lazy(() => import("../pages/MicrosoftCourse/MicrosoftCyberAnalyst"));
const MicrosoftMS900 = lazy(() => import("../pages/MicrosoftCourse/MicrosoftMs900"));
const MicrosoftPl300 = lazy(() => import("../pages/MicrosoftCourse/MicrosoftPl300"));
const MicrosoftExcelExpert = lazy(() => import("../pages/MicrosoftCourse/MicrosoftExcelExpert"));
const MicrosoftWordAssociate = lazy(() => import("../pages/MicrosoftCourse/MicrosoftWordAssociate"));
const MicrosoftWordExpert = lazy(() => import("../pages/MicrosoftCourse/MicrosoftWordExpert"));
const MicrosoftPowerPointAssociate = lazy(() => import("../pages/MicrosoftCourse/MicrosoftPowerPointAssociate"));
const MicrosoftExcelAssociate = lazy(() => import("../pages/MicrosoftCourse/MicrosoftExcelAssociate"));
const MicrosoftDynamics365ERP = lazy(() => import("../pages/MicrosoftCourse/MicrosoftDynamics365ERP"));
const MicrosoftAzureDataFundamentals = lazy(() => import("../pages/MicrosoftCourse/MicrosoftAzureDataFundamentals"));
const MicrosoftDynamicsCRMFundamentals = lazy(() => import("../pages/MicrosoftCourse/MicrosoftDynamicsCRMFundamentals"));
const MicrosoftPowerPlatformFundamentals = lazy(() => import("../pages/MicrosoftCourse/MicrosoftPowerPlatformFundamentals"));
const MicrosoftSecurityFundamentals = lazy(() => import("../pages/MicrosoftCourse/MicrosoftSecurityFundamentals"));

// Cisco subcourses
const CCSTsupportTech = lazy(() => import("../pages/CiscoCourse/CcstSupportTechnician"));
const CCSTcybersecurity = lazy(() => import("../pages/CiscoCourse/CCSTCybersecurity"));
const CCSTNetworking = lazy(() => import("../pages/CiscoCourse/CCSTNetworking"));
const CCTtechnician = lazy(() => import("../pages/CiscoCourse/CcstSupportTechnician"));
const CCTroutingSwitching = lazy(() => import("../pages/CiscoCourse/CCTroutingSwitching"));
const CCTdatacenter = lazy(() => import("../pages/CiscoCourse/CCTdatacenter"));
const CCNA = lazy(() => import("../pages/CiscoCourse/CCNA"));
const CCCA = lazy(() => import("../pages/CiscoCourse/CCCA"));
const CCNPenterprises = lazy(() => import("../pages/CiscoCourse/CCNPenterprises"));
const CCNPsecurity = lazy(() => import("../pages/CiscoCourse/CCNPsecurity"));
const CCNPdatacenter = lazy(() => import("../pages/CiscoCourse/CCNPdatacenter"));
const CCNPserviceprovider = lazy(() => import("../pages/CiscoCourse/CCNPserviceprovider"));
const CCNPcollaboration = lazy(() => import("../pages/CiscoCourse/CCNPcollaboration"));
const CCNPdevnet = lazy(() => import("../pages/CiscoCourse/CCNPdevnet"));
const CCIEinfastructure = lazy(() => import("../pages/CiscoCourse/CCIEinfasturcture"));
const CCIEwireless = lazy(() => import("../pages/CiscoCourse/CCIEwireless"));
const CCIEsecurity = lazy(() => import("../pages/CiscoCourse/CCIEsecurity"));
const CCIEdatacenter = lazy(() => import("../pages/CiscoCourse/CCIEdatacenter"));
const CCIEserviceprovider = lazy(() => import("../pages/CiscoCourse/CCIEserviceprovider"));
const CCIEcollab = lazy(() => import("../pages/CiscoCourse/CCIEcollaboration"));

// IBM subcourses
const IBMAgileMethodologies = lazy(() => import("../components/IMBSubCourses/IBMAgileMethodologies"));
const WebdevelopementHTML = lazy(() => import("../components/IMBSubCourses/Webdevelopementhtml"));
const WebdevelopementC = lazy(() => import("../components/IMBSubCourses/WebdevelopementC"));
const IBMSQL = lazy(() => import("../components/IMBSubCourses/IBMSQL"));
const IBMSoftwareFoundation = lazy(() => import("../components/IMBSubCourses/IBMSoftwareFoundation"));
const IBMScala = lazy(() => import("../components/IMBSubCourses/IBMScala"));
const IBMRestAPI = lazy(() => import("../components/IMBSubCourses/IBMRestAPI"));
const IBMRDBMS = lazy(() => import("../components/IMBSubCourses/IBMRDBMS"));
const IBMPython = lazy(() => import("../components/IMBSubCourses/IBMPython"));
const IBMNodeJs = lazy(() => import("../components/IMBSubCourses/IBMNodeJs"));
const IBMNoSQL = lazy(() => import("../components/IMBSubCourses/IBMNoSQL"));
const IBMMethodology = lazy(() => import("../components/IMBSubCourses/IBMMethodology"));
const IBMMachineLearning = lazy(() => import("../components/IMBSubCourses/IBMMachineLearning"));
const IBMKubernetes = lazy(() => import("../components/IMBSubCourses/IBMKubernetes"));
const IBMJavaScript = lazy(() => import("../components/IMBSubCourses/IBMJavaScript"));
const IBMDevopsFundamentals = lazy(() => import("../components/IMBSubCourses/IBMDevopsFundamentals"));
const IBMDeepLearning = lazy(() => import("../components/IMBSubCourses/IBMDeepLearning"));
const IBMDataAnalysis = lazy(() => import("../components/IMBSubCourses/IBMDataAnalysis"));
const IBMCloudFundamental = lazy(() => import("../components/IMBSubCourses/IBMCloudFundamental"));
const IBMBigData = lazy(() => import("../components/IMBSubCourses/IBMBigData"));

// META subcourses
const MetaDigitalMarketing = lazy(() => import("../pages/MetaCourse/MetaDigitalMarketing"));
const MetaFrontEndDeveloper = lazy(() => import("../pages/MetaCourse/MetaFrontEndDeveloper"));
const MetaBackEndDeveloper = lazy(() => import("../pages/MetaCourse/MetaBackEndDeveloper"));
const MetaAndroidDeveloper = lazy(() => import("../pages/MetaCourse/MetaAndroidDeveloper"));
const MetaIosDeveloper = lazy(() => import("../pages/MetaCourse/MetaIosDeveloper"));

// Other pages
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const IBM = lazy(() => import("../pages/IBM"));
const META = lazy(() => import("../pages/META"));
const PartnerPage = lazy(() => import("../pages/PartnerPage"));
const PMI = lazy(() => import("../pages/PMI"));
const ITSpeacialist = lazy(() => import("../pages/ITSpecialist"));
const SwiftDevelopment = lazy(() => import("../pages/SwiftDevelopment"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const SuccessCartPayment = lazy(() => import("../pages/Cart/SuccessCartPayment"));
const CancelCartPayment = lazy(() => import("../pages/Cart/CancelCartPayment"));

const Tally = lazy(() => import("../pages/PopularCertificationCoureses/Tally"));
const MicrosoftOffice = lazy(() => import("../pages/PopularCertificationCoureses/MicrosoftOffice"));
const Autodesk = lazy(() => import("../pages/PopularCertificationCoureses/Autodesk"));
const MicrosoftCertified = lazy(() => import("../pages/PopularCertificationCoureses/MicrosoftCertified"));
const Adobe = lazy(() => import("../pages/PopularCertificationCoureses/Adobe"));
const Unity = lazy(() => import("../pages/PopularCertificationCoureses/Unity"));
const CiscoCard = lazy(() => import("../pages/PopularCertificationCoureses/CiscoCard"));

// PMI subcourses
const PMIProjectManagement = lazy(() => import("../pages/PMICourse/PMIProjectManagement"));

// IT Specialist subcourses
const ITSpecialistPython = lazy(() => import("../pages/ITSpecialistCourse/ITSpecialistPython"));
const ITSpecialistJavaScript = lazy(() => import("../pages/ITSpecialistCourse/ITSpecialistJavaScript"));
const ITSpecialistHTML = lazy(() => import("../pages/ITSpecialistCourse/ITSpecialistHTML"));
const ITSpecialistNetworking = lazy(() => import("../pages/ITSpecialistCourse/ITSpecialistNetworking"));

// Swift Development subcourses
const SwiftDevelopmentBasics = lazy(() => import("../pages/SwiftCourse/SwiftDevelopmentBasics"));
const SwiftDevelopmentAdvanced = lazy(() => import("../pages/SwiftCourse/SwiftDevelopmentAdvanced"));

// Tally subcourses (Courses section) 
const TallyEssentialLevel1 = lazy(() => import("../pages/TallyCourse/TallyEssentialLevel1"));
const TallyEssentialLevel2 = lazy(() => import("../pages/TallyCourse/TallyEssentialLevel2"));
const TallyEssentialLevel3 = lazy(() => import("../pages/TallyCourse/TallyEssentialLevel3"));
const TallyProfessional = lazy(() => import("../pages/TallyCourse/TallyProfessional"));
const TallyEssentialComprehensive = lazy(() => import("../pages/TallyCourse/TallyEssentialComprehensive"));
const TallyPrime = lazy(() => import("../pages/TallyCourse/TallyPrime"));

// Autodesk subcourses
const AutodeskAutoCAD = lazy(() => import("../pages/AutodeskCourse/AutodeskAutoCAD"));
const AutodeskRevit = lazy(() => import("../pages/AutodeskCourse/AutodeskRevit"));
const Autodesk3dsMax = lazy(() => import("../pages/AutodeskCourse/Autodesk3dsMax"));
const AutodeskFusion360 = lazy(() => import("../pages/AutodeskCourse/AutodeskFusion360"));
const AutodeskMaya = lazy(() => import("../pages/AutodeskCourse/AutodeskMaya"));

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

        <Route 
          path="/Courses-details" 
          element={<Courses />} 
        />

      <Route path="/Career-details" element={<Career />} />
      <Route path="/Our-Policies" element={<Policy />} />
      <Route path="/Our-Blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />

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
        <Route path="/microsoftazureadmin" element={<MicrosoftAzureAdmin />} />
        <Route path="/microsoftAi" element={<MicrosoftAi />} />
        <Route path="/microsoftDeveloper" element={<MicrosoftDeveloper />} />
        <Route path="/microsoftFundamentals" element={<MicrosoftFundamentals />} />
        <Route path="/microsoftDynamic365" element={<MicrosoftDynamic365 />} />
        <Route path="/microsoftAzure" element={<MicrosoftAzure />} />
        <Route path="/microsoft365" element={<Microsoft365 />} />
        <Route path="/microsoft365fundamentals" element={<Microsoft365Fundamentals />} />
        <Route path="/microsoft S C I" element={<MicrosoftSCI />} />
        <Route path="/microsoftpowerplatform" element={<MicrosoftPowerPlatform />} />
        <Route path="/microsoftazuredata" element={<MicrosoftAzureData />} />
        <Route path="/microsoft365associate" element={<Microsoft365Associate />} />
        <Route path="/microsoftpowerbi" element={<MicrosoftPowerBI />} />
        <Route path="/microsoftAzurecosmos" element={<MicrosoftAzureCosmos />} />
        <Route path="/microsoftazureSAP" element={<MicrosoftAzureSAP />} />
        <Route path="/microsoftAzuresolutions" element={<MicrosoftAzureSolutions />} />
        <Route path="/microsoftAzurevirtual" element={<MicrosoftAzureVirtual />} />
        <Route path="/microsoftdynamicfunction" element={<MicrosoftDynamicFunction />} />
        <Route path="/microsoft365certification" element={<Microsoft365Certification />} />
        <Route path="/microsoftcyberanalyst" element={<MicrosoftCyberAnalyst />} />
        <Route path="/microsoftMS-900" element={<MicrosoftMS900 />} />
        <Route path="/microsoftpl-300" element={<MicrosoftPl300 />} />
        <Route path="/MicrosoftSecurityFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftSecurityFundamentals /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftExcelExpert" element={<Suspense fallback={<LoadingComponent />}><MicrosoftExcelExpert /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftWordAssociate" element={<Suspense fallback={<LoadingComponent />}><MicrosoftWordAssociate /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftWordExpert" element={<Suspense fallback={<LoadingComponent />}><MicrosoftWordExpert /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftPowerPointAssociate" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPowerPointAssociate /></Suspense>} />
        <Route path="/MicrosoftCourse/MicrosoftExcelAssociate" element={<Suspense fallback={<LoadingComponent />}><MicrosoftExcelAssociate /></Suspense>} />
        <Route path="/MicrosoftDynamics365ERP" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDynamics365ERP /></Suspense>} />
        <Route path="/MicrosoftAzureDataFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftAzureDataFundamentals /></Suspense>} />
        <Route path="/MicrosoftDynamics365CRMFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftDynamicsCRMFundamentals /></Suspense>} />
        <Route path="/MicrosoftPowerPlatformFundamentals" element={<Suspense fallback={<LoadingComponent />}><MicrosoftPowerPlatformFundamentals /></Suspense>} />
        
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
        <Route path="/admin-panel/:employeeId" element={token ? <EmployeeInfoPage /> : <Navigate to="/login" state={{ from: "/admin-panel" }} replace />} />
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
        <Route path="/CISCO" element={<Cisco />} />

        {/* Other Routes */}
      <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/IBM" element={<IBM />} />
        <Route path="/META" element={<META />} />
        <Route path="/PartnerPage" element={<PartnerPage />} />
        <Route path="/PMI" element={<PMI />} />
        <Route path="/ITSpeacialist" element={<ITSpeacialist />} />
        <Route path="/SwiftDevelopment" element={<SwiftDevelopment />} />
        <Route path="/Cart" element={<Cart />} />
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
    </Routes>
    </Suspense>
  );
};

export default AllRoute;
