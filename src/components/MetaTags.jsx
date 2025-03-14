import React from 'react';
import { Helmet } from 'react-helmet';
import { personalInfo } from '../data/resumeData';

const MetaTags = ({ 
  title = 'Portfolio', 
  description = personalInfo.summary, 
  keywords = ['portfolio', 'developer', 'software engineer', 'web developer'], 
  image = '/assets/images/profile.jpg',
  url = window.location.href
}) => {
  // Create full title with name
  const fullTitle = `${title} | ${personalInfo.name}`;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;