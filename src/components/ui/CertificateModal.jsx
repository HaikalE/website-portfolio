import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !certificate) return null;
  
  // Get placeholder image if certificate image isn't available
  const placeholderImage = `https://via.placeholder.com/800x600/3b82f6/ffffff?text=${certificate.name.replace(/\s+/g, '+')}`;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative bg-white dark:bg-dark-light rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-xl font-bold">{certificate.name}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark text-gray-500 dark:text-gray-400"
            aria-label="Close"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        
        {/* Certificate Image */}
        <div className="p-4 overflow-auto max-h-[calc(90vh-8rem)]">
          <img 
            src={certificate.imageUrl || placeholderImage} 
            alt={certificate.name}
            className="w-full h-auto rounded-md"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImage;
            }}
          />
        </div>
        
        {/* Footer with details */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-medium">Issued by:</span> {certificate.issuer}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-medium">Year:</span> {certificate.year}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-medium">Credential ID:</span> {certificate.credentialId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;