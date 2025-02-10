import React, { useState } from 'react';
import SkillMatrix from '../components/SkillMatrix';
import ProjectsSection from '../components/ProjectCard';
import { Shield, Code, Network, Lock } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: 'About Cyber Sentinel',
      content: (
        <div className="text-gray-300">
          <h2 className="text-2xl flex items-center mb-4">
            <Shield className="mr-2" /> Professional Profile
          </h2>
          <p>
          My Name is Niraj Sharma and I am a dedicated Security Researcher specializing in malware analysis with a passion for malware and tools development. I am also passionate about incident response, offensive security, pentesting, Hardwares and LLMs. My expertise lies in reverse engineering, network analysis, and offensive security techniques, i love cats 🐱 and i have completed the helicopter mission in gta vice city. 
          </p>
          <div className="mt-6">
            <h3 className="text-xl mb-3">Core Competencies</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced Malware Analysis</li>
              <li>Penetration Testing and Vulnerability Assessment</li>
              <li>Incident Response and Threat Mitigation</li>
              <li>Cloud Security Optimization</li>
              <li>Reverse Engineering</li>
              <li>Network Analysis</li>
              <li>Low-Level Programming (C, C++, Assembly, Rust)</li>
              <li>Scripting Languages(Python, Powershell)</li>
              <li>Various CPU Architectures</li>
              <li>Offensive Security</li>

            </ul>
          </div>
        </div>
      )
    },
    skills: {
      title: 'Skill Matrix',
      content: <SkillMatrix />
    },
    projects: {
      title: 'Cyber Projects',
      content: <ProjectsSection />
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-gray-900 bg-opacity-80 p-6 rounded-lg">
          <nav className="mb-6 flex space-x-4">
            {Object.keys(sections).map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-3 py-1 rounded ${
                  activeSection === section 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          {sections[activeSection].content}
        </div>
        
        <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg">
          <h2 className="text-2xl mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <strong>Email:</strong> 
              <p>sharmaniraj009@gmail.coml</p>
            </div>
            <div>
              <strong>Location:</strong>
              <p>Ahmedabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}