import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Blogs
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by John Doe
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
