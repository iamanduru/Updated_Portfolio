// src/pages/Experience.jsx
import React, { useState } from 'react';
import { Calendar, Code, Users, ChevronRight, Briefcase, Globe, Database } from 'lucide-react';

export default function ExperiencePage() {
  const [expandedItem, setExpandedItem] = useState(''); 
  
  const experiences = [
    {
      id: 'vfr',
      title: 'Vision Fund Rwanda',
      role: 'Software Developer Intern',
      period: 'April 2025 - Present',
      icon: <Database className="h-6 w-6" />,
      color: 'amber',
      skills: ['Node.js', 'React', 'MySQL', 'Prisma', 'Express', 'Tailwind CSS', 'Figma'],
      responsibilities: [
        {
          text: 'Migrated a suggestion box system from MongoDB to MySQL using Prisma ORM',
          icon: <Database className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Implemented secure authentication system with Node.js and Express',
          icon: <Code className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Developed responsive frontend interfaces with React and Tailwind CSS',
          icon: <Globe className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Provided IT support including configuring laptops for internal use',
          icon: <Briefcase className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Currently leading development of a comprehensive inventory management system',
          icon: <Database className="h-5 w-5 text-amber-400" />
        }
      ]
    },
    {
      id: 'spiderbit',
      title: 'Spiderbit',
      role: 'Web Developer & Design Intern',
      period: 'October 2024 - December 2024',
      icon: <Code className="h-6 w-6" />,
      color: 'amber',
      skills: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design', 'Responsive Design'],
      responsibilities: [
        {
          text: 'Designed and developed user-centric websites using modern web technologies',
          icon: <Globe className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Collaborated with cross-functional teams to align designs with business objectives',
          icon: <Users className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Implemented responsive and accessible interfaces optimized for various devices',
          icon: <Code className="h-5 w-5 text-amber-400" />
        }
      ]
    },
    {
      id: 'somto',
      title: 'SOMTO',
      role: 'Volunteer',
      period: 'June 2023 - August 2024',
      icon: <Users className="h-6 w-6" />,
      color: 'amber',
      skills: ['Event Coordination', 'Technical Training', 'Web Development'],
      responsibilities: [
        {
          text: 'Organized and coordinated a free eye check-up camp in Kisumu, managing logistics and medical professionals',
          icon: <Users className="h-5 w-5 text-amber-400" />
        },
        {
          text: 'Developed and conducted technical training programs in HTML, CSS, and JavaScript for young girls in Kibra',
          icon: <Code className="h-5 w-5 text-amber-400" />
        },
        {
          text: "Redesigned and enhanced SOMTO's website and newsletter systems to improve user experience",
          icon: <Globe className="h-5 w-5 text-amber-400" />
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-gradient-to-b from-teal-900 to-teal-950">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-teal-800 rounded-lg mb-4">
            <Briefcase className="h-6 w-6 text-amber-400 " />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-teal-100 ">
            Work Experience
          </h2>
          <p className="mt-4 text-lg text-amber-400  max-w-2xl text-center">
            My professional journey blending technology, design, and community service.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className={`border rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
                expandedItem === exp.id 
                  ? 'border-' + exp.color + '-200' + exp.color + '-800 bg-amber ' 
                  : 'border-amber-300  bg-teal-900 hover:border-' + exp.color + '-200' + exp.color + '-800'
              }`}
            >
              {/* Header (always visible) */}
              <div 
                className="flex items-center justify-between p-5 cursor-pointer"
                onClick={() => setExpandedItem(expandedItem === exp.id ? null : exp.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-${exp.color}-100`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-teal-100">
                      {exp.title}
                      <span className="ml-2 font-medium text-gray-400">| {exp.role}</span>
                    </h3>
                    <div className="flex items-center mt-1 text-amber-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight 
                  className={`h-5 w-5 text-teal-400 transition-transform duration-300 ${
                    expandedItem === exp.id ? 'transform rotate-90' : ''
                  }`} 
                />
              </div>
              
              {/* Expanded Content */}
              {expandedItem === exp.id && (
                <div className="p-5 pt-0 border-t border-amber-200">
                  {/* Skills */}
                  <div className="mb-5">
                    <p className="text-sm font-medium text-teal-100 mb-2">Skills & Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className={`px-3 py-1 text-sm rounded-full bg-amber-400  text-teal-900`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-3">Key Responsibilities:</p>
                    <div className="space-y-4">
                      {exp.responsibilities.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-3">
                            {item.icon}
                          </div>
                          <p className="text-teal-100">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}