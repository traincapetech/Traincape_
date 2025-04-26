
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext.jsx";
import translations from "../pages/AboutUs/data.js";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const { language } = useLanguage();
 // Get translations based on current language
 const t = translations[language].footer;
  return (
    <footer className="bg-slate-900 text-white">
    {/* Top section with contact info */}
    <div className="mx-auto px-2 md:px-10 lg:px-20 py-8 border-b border-slate-800">
      <div className="grid grid-cols-3 md:gap-8">
        {/* Contact Us */}
        <div className="flex items-start gap-1 md:gap-4 group">
          <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
            <Phone className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">
              {t.contactUs}
            </h3>
            <div className="space-y-2 text-slate-300">
              <div className="flex flex-col md:flex-row md:items-center md:gap-3 group/item">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:sales@traincapetech.info"
                  className="text-[10px] sm:text-xs md:text-sm group-hover/item:text-blue-300 transition-colors duration-300"
                >
                  sales@traincapetech.info
                </a>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:gap-3 group/item">
                <Phone className="text-left h-4 w-4 text-blue-400" />
                <a
                  href="https://wa.me/+441253928501"
                  target="_blank"
                  className="text-[10px] sm:text-xs md:text-sm group-hover/item:text-blue-300 transition-colors duration-300"
                >
                  +44 1253 928501
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Working Hours */}
        <div className="flex items-start gap-1 md:gap-4 group">
          <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
            <Clock className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">
              {t.workingHours}
            </h3>
            <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-tight">
              {t.workingTime}
            </p>
            <p className="text-slate-400 text-[10px] sm:text-xs md:text-sm">
              {t.sundayClosed}
            </p>
          </div>
        </div>
  
        {/* Office Address */}
        <div className="flex items-start gap-1 md:gap-4 group">
          <div className="bg-blue-500/20 p-1 md:p-3 rounded-full shadow-lg group-hover:bg-blue-500/40 transition-all duration-300">
            <MapPin className="h-3 md:h-6 w-3 md:w-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-xs md:text-base mb-2 text-blue-50">
              {t.officeAddress}
            </h3>
            <p className="text-slate-300 text-[10px] sm:text-xs md:text-sm leading-tight">
            {t.address}
             </p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Middle section with about, links, explore, map */}
    <div className="mx-auto px-2 md:px-10 lg:px-20 py-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {/* About Us */}
        <div className="space-y-3">
          <h3 className="text-center font-bold text-base pb-2 text-blue-50 border-b border-blue-500/30">
            {t.aboutUs}
          </h3>
          <p className="text-slate-300 text-[10px] sm:text-xs leading-tight">
           {t.aboutDesc}
          </p>
        </div>
  
        {/* Social Media Icons */}
        <div className="space-y-3 text-center">
          <h3 className="font-bold text-base pb-2 text-blue-50 border-b border-blue-500/30">
            {t.socialMediaLinks}
          </h3>
          <div className="flex justify-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100083755432171"
              target="_blank"
              className="bg-slate-800 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/traincape_technology?igsh=MWR5c3EyOTI4dHJ5eg=="
              target="_blank"
              className="bg-slate-800 hover:bg-purple-600 p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://in.linkedin.com/company/traincape-technology"
              target="_blank"
              className="bg-slate-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
  
        <div className="flex flex-row justify-around">
          {/* Links */}
          <div className="space-y-3">
            <h3 className="text-center font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
              {t.links}
            </h3>
            <div className="grid grid-cols-1 gap-1 text-[10px] sm:text-xs">
              <button
                onClick={() => handleNavigation("/frequently-asked-questions")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
               { t.faq}
              </button>
              <button
                onClick={() => handleNavigation("/contact-us")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.contactUs}
              </button>
              <button
                onClick={() => handleNavigation("/Our-Policies")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.policy}
              </button>
              <button
                onClick={() => handleNavigation("/Career-details")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.career}
              </button>
              <button
                onClick={() => handleNavigation("/Employee")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.employee}
              </button>
            </div>
          </div>
  
          {/* Explore */}
          <div className="space-y-3">
            <h3 className="font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
              {t.explore}
            </h3>
            <div className="grid grid-cols-1 gap-1 text-xs">
              <button
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
                onClick={() => handleNavigation("/about-us")}
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.whatWeDo}
              </button>
              <button
                onClick={() => handleNavigation("/Our-Blogs")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.resources}
              </button>
              <button
                onClick={() => handleNavigation("/Internship")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.internship}
              </button>
              <button
                onClick={() => handleNavigation("/PartnerPage")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.partners}
              </button>
              <button
                onClick={() => handleNavigation("/Gallery")}
                className="text-slate-300 hover:text-blue-300 transition-colors duration-300 text-left flex items-center group"
              >
                <span className="w-0 h-0.5 bg-blue-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                {t.gallery}
              </button>
            </div>
          </div>
        </div>
  
        {/* Office Map */}
        <div className="space-y-3">
          <h3 className="font-bold text-base pb-2 inline-block text-blue-50 border-b border-blue-500/30">
            {t.officeMap}
          </h3>
          <div className="w-full h-32 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.324905682962!2d77.08584820125589!3d28.610166815955754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05ecdc6529c1%3A0x7419fbbcac72b568!2sTraincape%20technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1737112758433!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Traincape Office Location"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  
    {/* Copyright */}
    <div className="mx-auto px-4 text-center py-3">
      <p className="text-slate-400 text-[10px] sm:text-xs font-light">
        {t.copyRight}
        <span className="text-blue-400 font-normal">
          Traincape Technology
        </span>
        . {t.allRightsReserved}
      </p>
    </div>
  </footer>
  
  );
}