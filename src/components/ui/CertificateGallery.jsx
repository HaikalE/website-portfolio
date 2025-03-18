import React, { useState } from 'react';
import { FiImage, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CertificateModal from './CertificateModal';

const CertificateGallery = ({ certificates }) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to open certificate modal
  const openCertificateModal = (certificate, index) => {
    setSelectedCertificate(certificate);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Function to close certificate modal
  const closeCertificateModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to next certificate
  const nextCertificate = () => {
    const nextIndex = (currentIndex + 1) % certificates.length;
    setSelectedCertificate(certificates[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  // Navigate to previous certificate
  const prevCertificate = () => {
    const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    setSelectedCertificate(certificates[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-dark-light rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
            onClick={() => openCertificateModal(cert, index)}
          >
            {/* Certificate image preview */}
            <div className="h-48 overflow-hidden">
              <img 
                src={cert.imageUrl || `https://via.placeholder.com/400x300/3b82f6/ffffff?text=${cert.name.replace(/\s+/g, '+')}`} 
                alt={cert.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/400x300/3b82f6/ffffff?text=${cert.name.replace(/\s+/g, '+')}`;
                }}
              />
            </div>
            
            {/* Certificate info */}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 line-clamp-1">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {cert.issuer} • {cert.year}
              </p>
              <div className="flex items-center text-primary text-sm">
                <FiImage className="mr-1" /> 
                <span>View Certificate</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal with navigation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative bg-white dark:bg-dark-light rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold">{selectedCertificate.name}</h3>
              <button 
                onClick={closeCertificateModal}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark text-gray-500 dark:text-gray-400"
                aria-label="Close"
              >
                <FiImage className="w-6 h-6" />
              </button>
            </div>
            
            {/* Certificate Image */}
            <div className="p-4 overflow-auto max-h-[calc(90vh-8rem)]">
              <img 
                src={selectedCertificate.imageUrl || `https://via.placeholder.com/800x600/3b82f6/ffffff?text=${selectedCertificate.name.replace(/\s+/g, '+')}`} 
                alt={selectedCertificate.name}
                className="w-full h-auto rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/800x600/3b82f6/ffffff?text=${selectedCertificate.name.replace(/\s+/g, '+')}`;
                }}
              />
            </div>
            
            {/* Footer with navigation */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="text-gray-600 dark:text-gray-400">
                <p><span className="font-medium">Issued by:</span> {selectedCertificate.issuer}</p>
                <p><span className="font-medium">Year:</span> {selectedCertificate.year}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={prevCertificate}
                  className="p-2 rounded-full bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-dark-lighter"
                  aria-label="Previous certificate"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500">
                  {currentIndex + 1} / {certificates.length}
                </span>
                <button 
                  onClick={nextCertificate}
                  className="p-2 rounded-full bg-gray-100 dark:bg-dark hover:bg-gray-200 dark:hover:bg-dark-lighter"
                  aria-label="Next certificate"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateGallery;