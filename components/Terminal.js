import React, { useState, useEffect, useRef } from 'react';
import { Code, Terminal as TerminalIcon } from 'lucide-react';

const commandResponses = {
  help: [
    'Available commands:',
    '• whoami - Display user information',
    '• skills - Show cybersecurity skills',
    '• projects - List cyber projects',
    '• contact - Show contact details',
    '• clear - Clear terminal screen'
  ],
  whoami: [
    'User: CyberSentinel',
    'Role: Senior Security Engineer',
    'Specialization: Advanced Threat Mitigation',
    'Clearance: Top Secret'
  ],
  skills: [
    'Cybersecurity Skill Set:',
    '• Penetration Testing: Expert Level',
    '• Network Security Architecture',
    '• Threat Intelligence',
    '• Incident Response Specialist',
    '• Cloud Security Optimization'
  ],
  projects: [
    'Active Cyber Projects:',
    '• Zero-Trust Network Architecture',
    '• Advanced Intrusion Detection System',
    '• Threat Intelligence Platform',
    '• Automated Security Compliance Framework'
  ],
  contact: [
    'Contact Protocols:',
    'Email: cyber.sentinel@secure.protocol',
    'PGP Key: 0xC0D3S3CURITY',
    'Secure Communication Channel: Encrypted'
  ]
};

const CyberTerminal = () => {
  const [output, setOutput] = useState([
    'CyberSentinel Terminal [Version 2.1]',
    'Initializing secure connection...',
    'Access Granted.'
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef(null);

  const executeCommand = (command) => {
    const trimmedCmd = command.trim().toLowerCase();
    
    if (commandResponses[trimmedCmd]) {
      return commandResponses[trimmedCmd];
    }
    
    return trimmedCmd === 'clear' 
      ? [] 
      : [`Unknown command: ${trimmedCmd}. Type 'help' for available commands.`];
  };

  const handleCommand = () => {
    if (!input.trim()) return;

    const newOutput = [
      ...output, 
      `> ${input}`,
      ...executeCommand(input)
    ];
    
    setOutput(newOutput);
    setInput('');
    
    // Auto-scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  };

  return (
    <div className="bg-black/80 text-green-400 font-mono p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <TerminalIcon className="mr-2" />
        <h2 className="text-xl">Cyber Terminal</h2>
      </div>
      <div 
        ref={terminalRef}
        className="h-96 overflow-y-auto mb-4 border-b border-green-600 pb-2"
      >
        {output.map((line, index) => (
          <div key={index} className="break-words">{line}</div>
        ))}
      </div>
      <div className="flex items-center">
        <Code className="mr-2" />
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
          placeholder="Enter command (type 'help')"
          className="bg-transparent text-green-400 outline-none flex-grow"
          autoFocus
        />
      </div>
    </div>
  );
};

export default CyberTerminal;