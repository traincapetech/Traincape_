// import React from "react";
// import { Routes, Route,Navigate } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import AboutUS from "../pages/AboutUS";
// import ContactUs from "../pages/ContactUs";
// import Signup from "../pages/Signup";
// import FAQ from "../pages/FAQ";
// import Services from "../pages/Services";
// import TermsAndCondition from "../pages/TermsAndCondition";
// import Courses from "../pages/Courses";
// import Career from "../pages/Career/Career";
// import Policy from "../pages/Policy";
// import PageNotFound from "../pages/404/PageNotFound";
// import Blogs from "../pages/Blogs/Blogs";
// import CompTIAsinglePage from "../pages/SinglePage/CompTIA/CompTIAsinglePage"


// import ReviewPage from "../pages/review/ReviewPage";
// import BookPage from "../pages/ebook/BookPage";
// import LandingPage from "../pages/landingPage/LandingPage";
// const AllRoute = () => {
//   const token = localStorage.getItem("token")
//   console.log(token)
//   return (
//     <Routes>
//       <Route path="/review-page" element={<ReviewPage />} />
//       <Route path="/" element={<Home />} />
//       {/* <Route path="/ebook-page" element={<BookPage />}/> */}
//        <Route path="/ebook-page" element={token ? <BookPage /> : <Navigate to="/login" replace />} /> 

//        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" replace />} />
// <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" replace />} />

//       <Route path="/about-us" element={<AboutUS />} />
//       <Route path="/contact-us" element={<ContactUs />} />
//       <Route path="/frequently-asked-questions" element={<FAQ />} />
//       <Route path="/our-services" element={<Services />} />
//       <Route path="/Terms-and-Conditions" element={<TermsAndCondition />} />

//      <Route path="/Courses-details" element={token ? <Courses />  : <Navigate to="/login" replace />} />


//       <Route path="/Career-details" element={<Career />} />
//       <Route path="/Our-Policies" element={<Policy />} />
//       <Route path="/Our-Blogs" element={<Blogs />} />
//       <Route path="*" element={<PageNotFound />} />

//       <Route path="/CompTIA-single-page" element={<CompTIAsinglePage />} />

//       <Route path="/home" element={<LandingPage />} />
//     </Routes>
//   );
// };

// export default AllRoute;

// Updated by Saurav
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
// import BookPage from "../pages/ebook/BookPage";
import LandingPage from "../pages/landingPage/LandingPage";
import Employee from "../pages/Employee";
import Internship from "../pages/Internship";
import Test from "../pages/Test/Test";
import Training from "../pages/Training";
import Comptia from "../pages/Comptia";
import Aws from "../pages/Aws";
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
import ComptiaSecurity from "../pages/CompTIACourse/ComptiaSecurity";
import ComptiaLinux from "../pages/CompTIACourse/ComptiaLinux";
import ComptiaProject from "../pages/CompTIACourse/ComptiaProject";
import ComptiaProject004 from "../pages/CompTIACourse/ComptiaProject004";
import ComptiaPentest from "../pages/CompTIACourse/ComptiaPentest";
import ComptiaA from "../pages/CompTIACourse/ComptiaA";
import ComptiaCloud from "../pages/CompTIACourse/ComptiaCloud";
import ComptiaServer from "../pages/CompTIACourse/ComptiaServer";
import ComptiaNetwork from "../pages/CompTIACourse/ComptiaNetwork";
import ComptiaData from "../pages/CompTIACourse/ComptiaData";
import ComptiaCloudCLO from "../pages/CompTIACourse/ComptiaCloudCLO";
import ComptiaSecurity601 from "../pages/CompTIACourse/ComptiaSecurity601";
import ComptiaCybersecurity from "../pages/CompTIACourse/ComptiaCyberscurity";
import ComptiaIT from "../pages/CompTIACourse/ComptiaIT";
import ComptiaNetwork007 from "../pages/CompTIACourse/ComptiaNetwork007";
import ComptiaAdavnce from "../pages/CompTIACourse/ComptiaAdvance";
import AdminPanel from "../pages/AdminPanel";
import CertificateTemplate from "../pages/Test/CertificateTemplate";
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
import VerifyCertificate from "../pages/Test/VerifyCertificate";
import ServiceDetail from "../pages/ServiceDetail";
import Microsoft from "../pages/Microsoft";
import MicrosoftSecurity from "../pages/MicrosoftCourse/MicrosoftSecurity";
import MicrosoftPowerPlatfrom from "../pages/MicrosoftCourse/MicrosoftPowerPlatfrom";
import MicrosoftPowerbi from "../pages/MicrosoftCourse/MicrosoftPowerbi";
import MicrosoftDeveloper from "../pages/MicrosoftCourse/MicrosoftDeveloper";
import MicrosoftFundamentals from "../pages/MicrosoftCourse/MicrosoftFundamentals";
import MicrosoftDynamic365 from "../pages/MicrosoftCourse/MicrosoftDynamic365";
import MicrosoftAzure from "../pages/MicrosoftCourse/MicrosoftAzure";
import Microsoft365 from "../pages/MicrosoftCourse/Microsoft365";
import Microsoft365Fundamentals from "../pages/MicrosoftCourse/Microsoft365Fundamentals";
import MicrosoftAzureData from "../pages/MicrosoftCourse/MicrosoftAzureData";
import Microsoft365Associate from "../pages/MicrosoftCourse/Microsoft365Associate";
import MicrosoftAzureSAP from "../pages/MicrosoftCourse/MicrosoftAzureSAP";
import MicrosoftAzureCosmos from "../pages/MicrosoftCourse/MicrosoftAzureCosmos";
import MicrosoftAzureSolutions from "../pages/MicrosoftCourse/MicrosoftAzureSolutions";
import MicrosoftAzureVirtual from "../pages/MicrosoftCourse/MicrosoftAzureVirtual";
import MicrosoftMs900 from "../pages/MicrosoftCourse/MicrosoftMs900";
import MicrosoftPl300 from "../pages/MicrosoftCourse/MicrosoftPl300";
import MicrosoftCyberAnalyst from "../pages/MicrosoftCourse/MicrosoftCyberAnalyst";
import MicrosoftAzureAdministrator from "../pages/MicrosoftCourse/MicrosoftAzureAdministrator";
import MicrosoftAi from  "../pages/MicrosoftCourse/MicrosoftAi";
import MicrosoftDynamicFunctional from "../pages/MicrosoftCourse/MicrosoftDynamicFunctional";
import Microsoft365Certification from "../pages/MicrosoftCourse/Microsoft365Certification"
import Learn from "../pages/MicrosoftCourse/Learn";
import Practice from "../pages/MicrosoftCourse/Practice";
import Certify from "../pages/MicrosoftCourse/Certify";
import Learn2 from "../pages/MicrosoftCourse/Learn"
import CcstSupportTechnician from "../pages/CiscoCourse/CcstSupportTechnician";
import Cisco from "../pages/Cisco";
import CCSTCybersecurity from "../pages/CiscoCourse/CCSTCybersecurity";
import CCSTNetworking from "../pages/CiscoCourse/CCSTNetworking";
import CCCA from "../pages/CiscoCourse/CCCA";
import CCIEcollaboration from "../pages/CiscoCourse/CCIEcollaboration";
import CCIEdatacenter from "../pages/CiscoCourse/CCIEdatacenter";
import CCIEsecurity from "../pages/CiscoCourse/CCIEsecurity";
import CCIEserviceprovider from "../pages/CiscoCourse/CCIEserviceprovider";
import CCIEwireless from "../pages/CiscoCourse/CCIEwireless";
import CCNA from "../pages/CiscoCourse/CCNA";
import CCNPcollaboration from "../pages/CiscoCourse/CCNPcollaboration";
import CCNPdatacenter from "../pages/CiscoCourse/CCNPdatacenter";
import CCNPdevnet from "../pages/CiscoCourse/CCNPdevnet";
import CCNPenterprises from "../pages/CiscoCourse/CCNPenterprises";
import CCNPsecurity from "../pages/CiscoCourse/CCNPsecurity";
import CCNPserviceprovider from "../pages/CiscoCourse/CCNPserviceprovider";
import CCTdatacenter from "../pages/CiscoCourse/CCTdatacenter";
import CCTroutingSwitching from "../pages/CiscoCourse/CCTroutingSwitching";
import CCTtechnicaian from "../pages/CiscoCourse/CCTtechnicaian";
import CCIEinfastructure from "../pages/CiscoCourse/CCIEinfasturcture";
import IBMCourses from "../components/IBMCourses";
import IBM from "../pages/IBM";
import META from "../pages/META";
import MetaCourses from "../components/MetaCourses";
import PartnerPage from "../pages/PartnerPage";
import PMICourses from "../components/PMICourses";
import ITCourses from "../components/ITCourses";
import ITSpeacialist from "../pages/ITSpecialist";
import SwiftCourses from "../components/SwiftCourses";
import SwiftDevelopment from "../pages/SwiftDevelopment";
import PMI from "../pages/PMI";
import Tally from "../pages/PopularCertificationCoureses/Tally";
import TallyCourses from "../components/TallyCourses";
import MicrosoftOffice from "../pages/PopularCertificationCoureses/MicrosoftOffice";
import MicrosoftOffCourses from "../components/MicrosoftOffCourses";
import Autodesk from "../pages/PopularCertificationCoureses/Autodesk";
import AutoDeskCourses from "../components/AutoDeskCourses";
import MicrosoftCertified from "../pages/PopularCertificationCoureses/MicrosoftCertified";
import MicrosoftCertifiedC from "../components/MicrosoftCertifiedC";
import Adobe from "../pages/PopularCertificationCoureses/Adobe";
import AdobeCourses from "../components/AdobeCourses";
import Unity from "../pages/PopularCertificationCoureses/Unity";
import UnityCourses from "../components/UnityCourses";
import CiscoCard from "../pages/PopularCertificationCoureses/CiscoCard";
import Ciscocoursescard from "../components/Ciscocoursescard";

const AllRoute = () => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/review-page" element={<ReviewPage />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="/ebook-page" element={<BookPage />} /> Allow access without token */}

      <Route path="/login" element={ <Login /> } />
      <Route path="/signup" element={<Signup /> } />

      <Route path="/about-us" element={<AboutUS />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/frequently-asked-questions" element={<FAQ />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/Terms-and-Conditions" element={<TermsAndCondition />} />

      <Route path="/Courses-details" element={<Courses />} /> {/* Allow access without token */}

      <Route path="/Career-details" element={<Career />} />
      <Route path="/Our-Policies" element={<Policy />} />
      <Route path="/Our-Blogs" element={<Blogs />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/CompTIA-single-page" element={<CompTIAsinglePage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/test" element={<Test />} />
      <Route path="/training" element={<Training />} />
      <Route path="/training-comptia" element={<Comptia />} />
      <Route path="/aws" element={<Aws />} />
      <Route path="/awsSecurity" element={<AwsCertifiedSecurity />} />
      <Route path="/awsSysops" element={<AwsCertifiedSysops />} />
      <Route path="/awsDeveloper" element={<AwsCertifiedDeveloper />} />
      <Route path="/awsDevops" element={<AwsCertifiedDevops />} />
      <Route path="/awsMachine" element={<AwsCertifiedMachine />} />
      <Route path="/awsData" element={<AwsCertifiedData />} />
      <Route path="/awsCloud" element={<AwsCertifiedCloud />} />
      <Route path="/awsSolution" element={<AwsCertifiedSolution />} />
      <Route path="/awsNetworking" element={<AwsCertifiedNetworking />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/comptiaSecurity" element={<ComptiaSecurity />} />
      <Route path="/comptiaLinux" element={<ComptiaLinux />} />
      <Route path="/comptiaProject" element={<ComptiaProject />} />
      <Route path="/comptiaProject004" element={<ComptiaProject004 />} />
      <Route path="/comptiaPentest" element={<ComptiaPentest />} />
      <Route path="/comptiaA" element={<ComptiaA />} />
      <Route path="/comptiaCloud" element={<ComptiaCloud />} />
      <Route path="/comptiaServer" element={<ComptiaServer />} />
      <Route path="/comptiaNetwork" element={<ComptiaNetwork />} />
      <Route path="/comptiaData" element={<ComptiaData />} />
      <Route path="/comptiaCloudCLO" element={<ComptiaCloudCLO />} />
      <Route path="/comptiaSecurity601" element={<ComptiaSecurity601 />} />
      <Route path="/comptiaCybersecurity" element={<ComptiaCybersecurity />} />
      <Route path="/comptiaIT" element={<ComptiaIT />} />
      <Route path="/comptiaNetwork007" element={<ComptiaNetwork007 />} />
      <Route path="/comptiaAdvance" element={<ComptiaAdavnce />} />
      <Route path="/cer" element={<CertificateTemplate />} />
      <Route path="/verifyCertificate" element={<VerifyCertificate />} />
      <Route path="/PECB" element={<PECB />} />
      <Route path="Computerforensics" element={<Computerforensics />} />
      <Route path="/CybersecurityAuditTrainings" element={<CybersecurityAuditTrainings />} />
      <Route path="ISO9001LeadImplementer" element={<ISO9001LeadImplementer />} />
      <Route path="ISO9001" element={<ISO9001/>}/ >
      <Route path="ISO22301" element={< ISO22301/>}/ >
      <Route path="ISO31000RiskManager" element={<ISO31000RiskManager/>}/ >
      <Route path="ISO37001" element={<ISO37001/>}/ >
      <Route path="ISO45001" element={<ISO45001 />}/ >
      <Route path="Isoiec27001LeadImplementer" element={ <Isoiec27001LeadImplementer/>}/ >
      <Route path="Isoiec27001" element={ <Isoiec27001/>}/>
      <Route path="Isoiec27005RiskManager" element={ <Isoiec27005RiskManager/>}/ >
      <Route path="Isoiec27032CyberSecurity" element={ <Isoiec27032CyberSecurity/>}/ >
      <Route path="PecbCertifiedIso27001Foundation" element={ <PecbCertifiedIso27001Foundation/>}/ >
      <Route path="SCADASecurityManager" element={ <SCADASecurityManager/>}/ >
      <Route path="/service-detail" element={<ServiceDetail />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/microsoft" element={<Microsoft />} />
      <Route path="/microsoftazureadmin" element={<MicrosoftAzureAdministrator />} />
      <Route path="/microsoftAi" element={<MicrosoftAi/>} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/certify" element={<Certify />} />
      <Route path="/Learn2" element={<Learn2 />} />
      <Route path="/microsoftDeveloper" element={<MicrosoftDeveloper />} />
      <Route path="/microsoftFundamentals" element={<MicrosoftFundamentals/>} />
      <Route path="/microsoftDynamic365" element={<MicrosoftDynamic365/>} />
      <Route path="/microsoftAzure" element={<MicrosoftAzure/>} />
      <Route path="/microsoft365" element={<Microsoft365/>} />
      <Route path="/microsoft365fundamentals" element={<Microsoft365Fundamentals/>} />
      <Route path="/microsoft S C I" element={<MicrosoftSecurity/>} />
      <Route path="/microsoftpowerplatform" element={<MicrosoftPowerPlatfrom/>} />
      <Route path="/microsoftazuredata" element={<MicrosoftAzureData/>} />
      <Route path="/microsoft365associate" element={<Microsoft365Associate/>} />
      <Route path="/microsoftpowerbi" element={<MicrosoftPowerbi/>} />
      <Route path="/microsoftazureSAP" element={<MicrosoftAzureSAP/>} />
      <Route path="/microsoftAzurecosmos" element={<MicrosoftAzureCosmos/>} />
      <Route path="/microsoftAzuresolutions" element={<MicrosoftAzureSolutions/>} />
      <Route path="/microsoftAzurevirtual" element={<MicrosoftAzureVirtual/>} />
      <Route path="/microsoftdynamicfunction" element={<MicrosoftDynamicFunctional/>} />
      <Route path="/microsoft365certification" element={<Microsoft365Certification/>} />
      <Route path="/microsoftcyberanalyst" element={<MicrosoftCyberAnalyst/>} />
      <Route path="/microsoftMS-900" element={<MicrosoftMs900/>} />
      <Route path="/microsoftpl-300" element={<MicrosoftPl300/>} />
      <Route path="/CCSTsupportTech" element={<CcstSupportTechnician/>} />
      <Route path="/CISCO" element={<Cisco/>} />
      <Route path="/CCSTcybersecurity" element={<CCSTCybersecurity/>} />
      <Route path="/CCSTNetworking" element={<CCSTNetworking/>} />
      <Route path="/CCCA" element={<CCCA/>} />
      <Route path="/CCIEcollab" element={<CCIEcollaboration/>} />
      <Route path="/CCIEdatacenter" element={<CCIEdatacenter/>} />
      <Route path="/CCIEinfastructure" element={<CCIEinfastructure/>} />
      <Route path="/CCIEsecurity" element={<CCIEsecurity/>} />
      <Route path="/CCIEserviceprovider" element={<CCIEserviceprovider/>} />
      <Route path="/CCIEwireless" element={<CCIEwireless/>} />
      <Route path="/CCNA" element={<CCNA/>} />
      <Route path="/CCNPcollaboration" element={<CCNPcollaboration/>} />
      <Route path="/CCNPdatacenter" element={<CCNPdatacenter/>} />
      <Route path="/CCNPdevnet" element={<CCNPdevnet/>} />
      <Route path="/CCNPenterprises" element={<CCNPenterprises/>} />
      <Route path="/CCNPsecurity" element={<CCNPsecurity/>} />
      <Route path="/CCNPserviceprovider" element={<CCNPserviceprovider/>} />
      <Route path="/CCTdatacenter" element={<CCTdatacenter/>} />
      <Route path="/CCTroutingSwitching" element={<CCTroutingSwitching/>} />
      <Route path="/CCTtechnician" element={<CCTtechnicaian/>} />
      <Route path="/CcstSupportTechnician" element={<CcstSupportTechnician/>} />
      <Route path="/IBMcourses" element={<IBMCourses/>} />
      <Route path="/IBM" element={<IBM/>} />
      <Route path="/META" element={<META/>} />
      <Route path="/MetaCourses" element={<MetaCourses/>} />
      <Route path="/PartnerPage" element={<PartnerPage/>}/>
      <Route path="/PMI" element={<PMI/>}/>
      <Route path="/PMICourses" element={<PMICourses/>}/>
      <Route path="/ITCourses" element={<ITCourses/>}/>
      <Route path="/ITSpeacialist" element={<ITSpeacialist/>}/>
      <Route path="/SwiftCourses" element={<SwiftCourses/>}/>
      <Route path="/SwiftDevelopment" element={<SwiftDevelopment/>}/>
      <Route path="/Tally" element={<Tally/>}/>
      <Route path="/TallyCourses" element={<TallyCourses/>}/>
      <Route path="/Microsoftoffice" element={<MicrosoftOffice/>}/>
      <Route path="/MicrosoftCourses" element={<MicrosoftOffCourses/>}/>
      <Route path="/Autodesk" element={<Autodesk/>}/>
      <Route path="/AutoDeskCourses" element={<AutoDeskCourses/>}/>
      <Route path="/MicrosoftCertified" element={<MicrosoftCertified/>}/>
      <Route path="/MicrosoftCertifiedcourses" element={<MicrosoftCertifiedC/>}/>
      <Route path="/Adobe" element={<Adobe/>}/>
      <Route path="/AdobeCourses" element={<AdobeCourses/>}/>
      <Route path="/unity" element={<Unity/>}/>
      <Route path="/unitycourses" element={<UnityCourses/>}/>
      <Route path="/ciscocard" element={<CiscoCard/>}/>
      <Route path="/ciscocoursescard" element={<Ciscocoursescard/>}/>
    </Routes>
  );
};

export default AllRoute;

