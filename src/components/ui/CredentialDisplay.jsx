import React, { useState } from 'react';
import { FiCopy, FiCheck, FiImage } from 'react-icons/fi';

const CredentialDisplay = ({ credentialId, onViewCertificate }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  // Truncate long credential IDs
  const truncatedId = credentialId.length > 12 
    ? `${credentialId.substring(0, 12)}...` 
    : credentialId;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center">
        <span 
          className="text-sm text-gray-500 dark:text-gray-500 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
          title={expanded ? "Click to collapse" : "Click to expand"}
        >
          Credential ID: {expanded ? credentialId : truncatedId}
        </span>
        <button 
          onClick={handleCopy}
          className="ml-2 p-1 text-gray-400 hover:text-primary transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <FiCheck className="text-green-500" /> : <FiCopy className="opacity-0 group-hover:opacity-100 transition-opacity" />}
        </button>
      </div>
      
      {onViewCertificate && (
        <button 
          onClick={onViewCertificate}
          className="p-1 text-gray-400 hover:text-primary transition-colors flex items-center"
          title="View certificate"
        >
          <FiImage className="mr-1" />
          <span className="text-sm">View</span>
        </button>
      )}
    </div>
  );
};

export default CredentialDisplay;