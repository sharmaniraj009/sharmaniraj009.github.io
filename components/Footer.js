import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  GitHub, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Twitter />, 
      href: 'https://twitter.com/cybersentinel',
      color: 'text-blue-400'
    },
    { 
      icon: <Linkedin />, 
      href: 'https://linkedin.com/in/cybersentinel',
      color: 'text-blue-600'
    },
    { 
      icon: <GitHub />, 
      href: 'https://github.com/cybersentinel',
      color: 'text-white'
    },
    { 
      icon: <Mail />, 
      href: 'mailto:cyber.sentinel@secure.protocol',
      color: 'text-red-500'
    }
  ];

  return (
    <footer className="bg-gray-900/80 text-green-400 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} hover:opacity-70 transition-opacity`}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <p className="text-sm">
          © {new Date().getFullYear()} Cyber Sentinel. All Rights Secured.
        </p>
        
        <div className="mt-2 text-xs text-gray-500">
          🔒 Secured with Advanced Cryptographic Protocols
        </div>
      </div>
    </footer>
  );
};

export default Footer;