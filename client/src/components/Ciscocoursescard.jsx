import React, { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import VoucherButton from './VoucherButton';

const Ciscocoursescard = ({image,title, description, price,url, course, subCourse}) => {
    useEffect(() => {
        window.scrollTo(0,0);

    },[]);
    const navigate = useNavigate();
    const openDetails = () => {
      if (url) navigate(url);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-gray-200 group cursor-pointer" onClick={openDetails} role="button" tabIndex={0}>
          <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <img className="w-20 h-20 md:w-28 md:h-28 object-contain" src={image} alt={title} />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
            <p className="text-gray-600 mb-4 text-center flex-grow">{description}</p>
            {course && subCourse && (
              <div className="mt-auto">
                <VoucherButton course={course} subCourse={subCourse} className="w-full justify-center" />
              </div>
            )}
          </div>
        </div>
    );
};
export default Ciscocoursescard;