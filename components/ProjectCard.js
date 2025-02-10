import React from 'react';
import { 
  Code, 
  Shield, 
  Server, 
  Lock 
} from 'lucide-react';

const projectIcons = {
  security: <Shield className="text-red-500" />,
  development: <Code className="text-blue-500" />,
  infrastructure: <Server className="text-green-500" />,
  compliance: <Lock className="text-purple-500" />
};

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  category, 
  githubLink 
}) => {
  const CategoryIcon = projectIcons[category] || <Code />;

  return (
    <div className="bg-gray-800 rounded-lg p-6 text-gray-300 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold flex items-center">
          {CategoryIcon}
          <span className="ml-2">{title}</span>
        </h3>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub
          </a>
        )}
      </div>
      
      <p className="mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-gray-700 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Zero Trust Network',
      description: 'Advanced network security architecture eliminating implicit trust.',
      technologies: ['Kubernetes', 'Docker', 'Istio'],
      category: 'security',
      githubLink: '#'
    },
    {
      title: 'Threat Intelligence Platform',
      description: 'Real-time threat detection and analysis system.',
      technologies: ['Python', 'Machine Learning', 'Elastic Stack'],
      category: 'development',
      githubLink: '#'
    },
    {
      title: 'Automated Security Compliance',
      description: 'Framework for continuous security compliance monitoring.',
      technologies: ['Python', 'AWS', 'CloudFormation'],
      category: 'compliance',
      githubLink: '#'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;