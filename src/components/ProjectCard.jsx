import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#102a43] overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 max-w-2xl mx-auto md:max-w-lg">
      <a href={project.linkToProject} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 text-center group">

          {/* Project Information */}
          <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-400">
            {project.title}
          </h3>
          <p className="text-[#D6DEEB] mb-4">{project.imageDescription}</p>
          <p className="text-sm text-[#8892b0] mb-4">{project.techUsed}</p>
          
          {/* View Project Button Animation (Hover over card activates animation) */}
          <button className="relative inline-block font-medium p-2.5 group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#61DBFB] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#102a43] border border-[#61DBFB] group-hover:bg-[#61DBFB] group-hover:border-[#102a43]"></span>
            <span className="relative text-[#61DBFB] group-hover:text-[#102a43] flex items-center">
              View Project
            </span>
          </button>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;