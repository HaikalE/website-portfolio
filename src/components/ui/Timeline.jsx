import React from 'react';
import { FiCalendar, FiBriefcase, FiBook } from 'react-icons/fi';

const TimelineItem = ({ 
  title, 
  subtitle, 
  date, 
  description, 
  icon: Icon = FiCalendar,
  index,
}) => {
  return (
    <div className={`relative pl-8 pb-8 ${index % 2 === 0 ? '' : 'md:ml-8'}`}>
      {/* Vertical line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      {/* Icon */}
      <div className="timeline-dot">
        <Icon className="w-3 h-3 text-white" />
      </div>
      
      {/* Content */}
      <div className="pt-1">
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-2">
          <FiCalendar className="mr-1" /> {date}
        </span>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">{subtitle}</p>
        
        {/* Description - either array or string */}
        {Array.isArray(description) ? (
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {description.map((item, i) => (
              <li key={i} className="flex">
                <span className="mr-2 text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items, type = 'work' }) => {
  let IconComponent;
  
  switch (type) {
    case 'education':
      IconComponent = FiBook;
      break;
    case 'work':
      IconComponent = FiBriefcase;
      break;
    default:
      IconComponent = FiCalendar;
  }
  
  return (
    <div className="pt-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={type === 'education' ? item.degree : item.title}
          subtitle={type === 'education' ? item.institution : item.company}
          date={item.period}
          description={item.description}
          icon={IconComponent}
          index={index}
        />
      ))}
    </div>
  );
};

export default Timeline;