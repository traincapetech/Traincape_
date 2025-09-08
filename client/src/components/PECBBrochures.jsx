import React from 'react';

const PECBBrochures = () => {
  const brochureCategories = [
    {
      category: "Information Security",
      brochures: [
        { name: "ISO/IEC 27001:2022 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27001 Transition", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27002 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27002 Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27002 Lead Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Chief Information Security Officer", url: "https://pecb.com/en/brochures" },
        { name: "EBIOS", url: "https://pecb.com/en/brochures" },
        { name: "PECB ISO/IEC 27005 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27005:2022 Risk Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27005:2022 Lead Risk Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27035 Incident Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27035 Lead Incident Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27034 Application Security Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27034 Lead Application Security Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27034 Lead Application Security Auditor", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Cybersecurity Management",
      brochures: [
        { name: "PECB Cybersecurity Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Lead Cybersecurity Manager", url: "https://pecb.com/en/brochures" },
        { name: "Certified Lead Cloud Security Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Lead Pen Test Professional", url: "https://pecb.com/en/brochures" },
        { name: "Certified Lead SCADA Security Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27033 Lead Network Security Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Computer Forensics Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Lead Forensics Examiner", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified NIST Cybersecurity Professional", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Lead Lead SOC 2 Analyst", url: "https://pecb.com/en/brochures" },
        { name: "PECB NIS 2 Directive Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified NIS 2 Directive", url: "https://pecb.com/en/brochures" },
        { name: "Cybersecurity Maturity Model Certification Foundations", url: "https://pecb.com/en/brochures" },
        { name: "Cybersecurity Maturity Model Certification Certified Professional", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Technical Cybersecurity",
      brochures: [
        { name: "PECB Certified Lead Ethical Hacker", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Cyber Threat Analyst", url: "https://pecb.com/en/brochures" },
        { name: "Certified Incident Responder", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Continuity, Resilience, and Recovery",
      brochures: [
        { name: "ISO 22301 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 22301 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 22301 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "Lead Disaster Recovery Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified DORA Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified DORA Lead Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Lead Operational Resilience Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Lead Crisis Manager", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Privacy and Data Protection",
      brochures: [
        { name: "ISO/IEC 27701 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27701 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 27701 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified GDPR Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified GDPR – Certified Data Protection Officer", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Artificial Intelligence",
      brochures: [
        { name: "ISO/IEC 42001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 42001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 42001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Artificial Intelligence Professional (CAIP)", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified AI Risk Manager", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Digital Transformation",
      brochures: [
        { name: "PECB Certified Digital Transformation Officer", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Governance, Risk, and Compliance",
      brochures: [
        { name: "ISO 31000 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 31000 Risk Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 31000 Lead Risk Manager", url: "https://pecb.com/en/brochures" },
        { name: "ISO 37001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "ISO 37001:2025 Transition", url: "https://pecb.com/en/brochures" },
        { name: "ISO 37301 Introduction", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37301 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37301 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37301 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 38500 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 38500 IT Governance Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 38500 Lead IT Governance Manager", url: "https://pecb.com/en/brochures" },
        { name: "Certified Management Systems Internal Auditor", url: "https://pecb.com/en/brochures" },
        { name: "ISO 37000 Corporate Governance Manager", url: "https://pecb.com/en/brochures" },
        { name: "ISO 37000 Lead Corporate Governance Manager", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Quality and Management",
      brochures: [
        { name: "ISO 9001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 9001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 9001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB ISO 21502 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 21502 Lead Project Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 13485 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 13485 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 13485 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 17025 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 17025 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 17025 Lead Assessor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 20000 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 20000 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO/IEC 20000 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Six Sigma Green Belt", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified Six Sigma Yellow Belt", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 21001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 21001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 21001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 55001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 55001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 55001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 55001 Transition", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 28000 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 28000 Lead Auditor", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Health and Safety",
      brochures: [
        { name: "PECB Certified ISO 45001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 45001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 45001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 22000 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 22000 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 22000 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 18788 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 18788 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 18788 Lead Auditor", url: "https://pecb.com/en/brochures" }
      ]
    },
    {
      category: "Sustainability",
      brochures: [
        { name: "PECB Certified SO 50001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 50001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 50001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 14001 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 14001 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 14001 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37101 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37101 Lead Implementer", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 37101 Lead Auditor", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 26000 Foundation", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 26000 Lead Manager", url: "https://pecb.com/en/brochures" },
        { name: "PECB Certified ISO 20400 Lead Manager", url: "https://pecb.com/en/brochures" }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            PECB Official Brochures
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access comprehensive information about PECB certification programs, training courses, and professional development opportunities. 
            All brochures are provided by PECB and link directly to their official website.
          </p>
          <div className="mt-6">
            <a
              href="https://pecb.com/en/brochures"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span className="mr-2">→</span>
              Visit PECB Brochures Archive
            </a>
          </div>
        </div>

        {/* Brochures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {brochureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                <p className="text-blue-100 text-sm mt-1">
                  {category.brochures.length} brochure{category.brochures.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {category.brochures.map((brochure, brochureIndex) => (
                    <div key={brochureIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center flex-1">
                        <span className="text-blue-600 mr-3 flex-shrink-0">📄</span>
                        <span className="text-sm text-gray-700 font-medium truncate">
                          {brochure.name}
                        </span>
                      </div>
                      <a
                        href={brochure.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors flex-shrink-0"
                        title={`View ${brochure.name} brochure`}
                      >
                        <span>⬇️</span>
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="https://pecb.com/en/brochures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    View all {category.category} brochures
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Official PECB Partnership
            </h3>
            <p className="text-blue-800 text-sm">
              All brochures and certification information are provided directly by PECB. 
              For the most up-to-date information, course schedules, and official documentation, 
              please visit the <a href="https://pecb.com/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">official PECB website</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PECBBrochures;
