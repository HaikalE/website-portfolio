import React from 'react';
import { FiAward } from 'react-icons/fi';
import CertificateGallery from '../components/ui/CertificateGallery';
import MetaTags from '../components/MetaTags';
import { certifications } from '../data/resumeData';

const Certificates = () => {
  // Group certificates by year for better organization
  const certificatesByYear = certifications.reduce((acc, cert) => {
    if (!acc[cert.year]) {
      acc[cert.year] = [];
    }
    acc[cert.year].push(cert);
    return acc;
  }, {});

  // Sort years in descending order (most recent first)
  const sortedYears = Object.keys(certificatesByYear).sort((a, b) => b - a);

  return (
    <div className="pt-20">
      <MetaTags 
        title="Certificates" 
        description="View my professional certifications and achievements in various technologies and domains."
      />
      
      {/* Header */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Certificates</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Professional certifications and achievements in various technologies and domains
          </p>
        </div>
      </section>
      
      {/* Certificates by Year */}
      <section className="py-16 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          {sortedYears.map(year => (
            <div key={year} className="mb-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FiAward className="text-primary text-xl" />
                </div>
                <h2 className="text-2xl font-bold">{year}</h2>
              </div>
              
              <CertificateGallery certificates={certificatesByYear[year]} />
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-white dark:bg-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm committed to continuously improving my skills and staying up-to-date with the latest technologies and practices.
            These certifications represent my dedication to professional growth and excellence.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-medium inline-flex items-center"
            >
              View My LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;