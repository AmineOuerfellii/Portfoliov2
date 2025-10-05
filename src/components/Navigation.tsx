import { Home, BookOpen, Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isFloating?: boolean;
}

export default function Navigation({ isFloating = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isFloating ? 'bg-white/90 shadow-lg' : 'bg-white/80 border-b border-gray-200'} backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Portfolio
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Briefcase className="w-4 h-4" />
              Projects
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium w-full"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium w-full"
            >
              <BookOpen className="w-4 h-4" />
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium w-full"
            >
              <Briefcase className="w-4 h-4" />
              Projects
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
