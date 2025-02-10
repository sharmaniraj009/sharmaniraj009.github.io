import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  Book, 
  Shield, 
  Terminal, 
  Menu 
} from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      href: '/', 
      label: 'Home', 
      icon: <Home className="mr-2" /> 
    },
    { 
      href: '/blog', 
      label: 'Blog', 
      icon: <Book className="mr-2" /> 
    },
    { 
      href: '/projects', 
      label: 'Projects', 
      icon: <Shield className="mr-2" /> 
    },
    { 
      href: '/terminal', 
      label: 'Terminal', 
      icon: <Terminal className="mr-2" /> 
    }
  ];

  return (
    <nav className="bg-gray-900/80 text-green-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Shield className="mr-2" />
          Cyber Sentinel
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <Menu />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="flex items-center hover:text-green-600 transition-colors"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900/90 md:hidden">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className="block p-4 border-b border-green-800 flex items-center hover:bg-green-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;