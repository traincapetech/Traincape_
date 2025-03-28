// Updated by Saurav
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

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
const AboutUS = lazy(() => import("../pages/AboutUS"));
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
const AdminPanel = lazy(() => import("../pages/AdminPanel"));
const VerifyCertificate = lazy(() => import("../pages/Test/VerifyCertificate"));
const CertificateTemplate = lazy(() => import("../pages/Test/CertificateTemplate"));

// Microsoft
const Microsoft = lazy(() => import("../pages/Microsoft"));

// PECB
const PECB = lazy(() => import("../pages/PECB"));

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

// Other pages
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const IBM = lazy(() => import("../pages/IBM"));
const META = lazy(() => import("../pages/META"));
const PartnerPage = lazy(() => import("../pages/PartnerPage"));
const PMI = lazy(() => import("../pages/PMI"));
const ITSpeacialist = lazy(() => import("../pages/ITSpecialist"));
const SwiftDevelopment = lazy(() => import("../pages/SwiftDevelopment"));
const Cart = lazy(() => import("../pages/Cart"));

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
          element={token ? <BookPage /> : <Navigate to="/login" replace />} 
        /> 

        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" replace />} />

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
        <Route path="*" element={<PageNotFound />} />

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
        
        {/* Admin Panel */}
        <Route path="/admin-panel" element={token ? <AdminPanel /> : <Navigate to="/login" state={{ from: "/admin-panel" }} replace />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/cer" element={<CertificateTemplate />} />

        {/* Microsoft */}
        <Route path="/microsoft" element={<Microsoft />} />

        {/* PECB */}
        <Route path="/PECB" element={<PECB />} />

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
      </Routes>
    </Suspense>
  );
};

export default AllRoute;

