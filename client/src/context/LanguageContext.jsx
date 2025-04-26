// LanguageContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context for the language
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default to English

  // Function to toggle language
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
