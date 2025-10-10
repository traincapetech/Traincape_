import { useParams } from "react-router-dom";
import CloudServices from "./CloudServices";
// import DataAnalytics from "./DataAnalytics";
import WebDevelopment from "./WebDevelopment";
import DigitalMarketing from "./digital-marketing";
import SoftwareServices from "./software-services";

const ServiceDetail = () => {
  const { slug } = useParams();

  if (slug === "cloud-services") return <CloudServices />;
  // if (slug === "data-analytics") return <DataAnalytics />;
  if (slug === "web-development") return <WebDevelopment />;
  if (slug === "digital-marketing") return <DigitalMarketing />;
if (slug === "software-services") return <SoftwareServices />;
  
  // return <NotFound />; // fallback
};

export default ServiceDetail;
