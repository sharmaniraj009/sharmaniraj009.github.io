import React from 'react';
import { Shield, Code, Lock, Network } from 'lucide-react';

const skills = [
  { 
    name: 'Malware Analysis', 
    level: 90, 
    icon: <Shield className="mr-2" />,
    color: 'bg-red-500'
  },
  { 
    name: 'Network Security', 
    level: 85, 
    icon: <Network className="mr-2" />,
    color: 'bg-blue-500'
  },
  { 
    name: 'Threat Analysis', 
    level: 88, 
    icon: <Code className="mr-2" />,
    color: 'bg-green-500'
  },
  { 
    name: 'Incident Response', 
    level: 82, 
    icon: <Lock className="mr-2" />,
    color: 'bg-purple-500'
  },
  { 
    name: 'Reverse Engineering', 
    level: 85, 
    icon: <Code className="mr-2" />,
    color: 'bg-green-500'
  },
  

];

const SkillMatrix = () => {
  return (
    <div className="text-green-400">
      <h2 className="text-2xl flex items-center mb-4">
        <Shield className="mr-2" /> Skill Proficiency
      </h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className={`${skill.color} h-2.5 rounded-full`}
              style={{width: `${skill.level}%`}}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillMatrix;