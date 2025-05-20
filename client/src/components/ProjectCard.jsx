// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  demoUrl, 
  codeUrl,
  icon
}) {
  return (
    <div className="h-full overflow-hidden rounded-xl bg-teal-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400 group">
      <div className="relative">
        {/* Header with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-amber-400 via-transparent to-black/70 z-10" />
        
        {/* Project image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Project tags */}
        <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-medium bg-transparent backdrop-blur-sm text-teal-300 rounded-full border border-amber-400"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title positioned over image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {icon && <span>{icon}</span>}
            {title}
          </h3>
        </div>
      </div>
      
      {/* Content area */}
      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {description}
        </p>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center mt-auto">
          <a 
            href={demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-amber-500  hover:bg-amber-700 text-white transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          
          <a 
            href={codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 rounded-lg border border-amber-400  hover:bg-teal-600  text-teal-100 hover:text-amber-400 transition-colors duration-300"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}