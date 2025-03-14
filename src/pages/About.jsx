import React from 'react';
import { FiDownload, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';
import Timeline from '../components/ui/Timeline';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { personalInfo, education, experience, organizations, skills, certifications, patents } from '../data/resumeData';

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg max-w-2xl opacity-90">
                Get to know more about my background, skills, and experience
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Button 
                href="/resume.pdf" 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <FiDownload className="mr-2" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bio */}
      <section className="py-16 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 lg:w-full lg:h-80 rounded-xl overflow-hidden">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&size=400&background=3b82f6&color=ffffff`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h2 className="text-white text-xl font-bold">{personalInfo.name}</h2>
                    <p className="text-white/90">Computer Science Graduate</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Who Am I?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm a Computer Science graduate with hands-on experience in data engineering and software development. 
                With a strong academic background and practical skills in various programming languages and technologies, 
                I'm passionate about creating efficient, secure, and user-friendly solutions to complex problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                My experience includes developing secure messaging applications, interactive software projects, 
                and data visualization tools. I'm particularly interested in cybersecurity, data engineering, and 
                creating intuitive user interfaces that enhance the user experience.
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="font-medium w-24">Name:</span>
                      <span className="text-gray-600 dark:text-gray-400">{personalInfo.name}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Location:</span>
                      <span className="text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Email:</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-primary">{personalInfo.email}</a>
                    </li>
                    <li className="flex">
                      <span className="font-medium w-24">Phone:</span>
                      <a href={`tel:${personalInfo.phone}`} className="text-primary">{personalInfo.phone}</a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Cybersecurity", "Data Engineering", "AI", "Mobile Development", "Blockchain", "Web Development"].map((interest, index) => (
                      <Badge key={index} variant={index % 2 === 0 ? 'primary' : 'secondary'}>
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience & Education */}
      <section className="py-16 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              My professional journey and academic background
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <FiBriefcase className="text-primary text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <Timeline items={experience} type="work" />
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                  <FiBook className="text-secondary text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <Timeline items={education} type="education" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Patents */}
      {patents.length > 0 && (
        <section className="py-16 bg-white dark:bg-dark">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Patents</h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Intellectual property and innovations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {patents.map((patent, index) => (
                <div key={index} className="bg-gray-50 dark:bg-dark-light p-6 rounded-lg border-l-4 border-primary">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <FiAward className="text-primary" />
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{patent.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{patent.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{patent.authors}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Patent No: {patent.number}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{patent.status}, {patent.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Organizations */}
      <section className="py-16 bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Organizations</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Leadership roles and participation in various organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{org.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{org.role}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{org.organization}</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {org.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {org.tools && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {org.tools.map((tool, i) => (
                        <Badge key={i} variant="gray" size="sm">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills */}
      <section className="py-16 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I'm proficient with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Group skills by category */}
            {Object.entries(skills.reduce((acc, skill) => {
              if (!acc[skill.category]) {
                acc[skill.category] = [];
              }
              acc[skill.category].push(skill);
              return acc;
            }, {})).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-50 dark:bg-dark-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <Badge key={index} variant={category === 'Programming Languages' ? 'primary' : 'secondary'}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;