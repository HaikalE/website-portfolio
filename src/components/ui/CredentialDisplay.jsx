import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CredentialDisplay = ({ credentialId }) => {
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
    <div className="flex items-center group">
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
  );
};

export default CredentialDisplay;