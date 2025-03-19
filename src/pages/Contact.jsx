import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';
import MetaTags from '../components/MetaTags';

const Contact = () => {
  return (
    <div className="pt-20">
      <MetaTags 
        title="Contact" 
        description="Get in touch with Muhammad Haikal Rahman. Find my contact information and social media profiles."
      />
      
      {/* Header */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Information</h2>
            
            <div className="space-y-8 mb-16">
              <table className="w-full table-auto">
                <tbody>
                  {/* Email Row */}
                  <tr className="align-middle">
                    <td className="py-6 w-24 md:w-32">
                      <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center flex-shrink-0 mx-auto">
                        <FiMail className="text-primary text-2xl" />
                      </div>
                    </td>
                    <td className="py-6">
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-gray-400 hover:text-primary transition-colors text-lg"
                      >
                        {personalInfo.email}
                      </a>
                    </td>
                  </tr>
                  
                  {/* Phone Row */}
                  <tr className="align-middle">
                    <td className="py-6 w-24 md:w-32">
                      <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center flex-shrink-0 mx-auto">
                        <FiPhone className="text-primary text-2xl" />
                      </div>
                    </td>
                    <td className="py-6">
                      <h3 className="text-xl font-semibold mb-2">Phone</h3>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        className="text-gray-400 hover:text-primary transition-colors text-lg"
                      >
                        {personalInfo.phone}
                      </a>
                    </td>
                  </tr>
                  
                  {/* Location Row */}
                  <tr className="align-middle">
                    <td className="py-6 w-24 md:w-32">
                      <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center flex-shrink-0 mx-auto">
                        <FiMapPin className="text-primary text-2xl" />
                      </div>
                    </td>
                    <td className="py-6">
                      <h3 className="text-xl font-semibold mb-2">Location</h3>
                      <p className="text-gray-400 text-lg">
                        {personalInfo.location}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Social Media */}
            <div className="pt-12 border-t border-gray-700">
              <h3 className="text-2xl font-bold mb-8 text-center">Connect with me</h3>
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://github.com/HaikalE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="GitHub"
                >
                  <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiGithub className="w-7 h-7" />
                  </div>
                  <p className="mt-2 text-center text-gray-400">GitHub</p>
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-haikal-rahman/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="LinkedIn"
                >
                  <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiLinkedin className="w-7 h-7" />
                  </div>
                  <p className="mt-2 text-center text-gray-400">LinkedIn</p>
                </a>
                <a 
                  href="https://www.instagram.com/muhammadhaikalrahman_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Instagram"
                >
                  <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-colors">
                    <FiInstagram className="w-7 h-7" />
                  </div>
                  <p className="mt-2 text-center text-gray-400">Instagram</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;