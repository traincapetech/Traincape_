import { useParams } from "react-router-dom";
import CloudServices from "./CloudServices";
// import DataAnalytics from "./DataAnalytics";
import WebDevelopment from "./WebDevelopment";

const ServiceDetail = () => {
  const { slug } = useParams();

  if (slug === "cloud-services") return <CloudServices />;
  // if (slug === "data-analytics") return <DataAnalytics />;
  if (slug === "web-development") return <WebDevelopment />;
  
  // return <NotFound />; // fallback
};

export default ServiceDetail;
