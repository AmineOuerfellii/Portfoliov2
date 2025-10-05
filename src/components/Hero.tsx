import { Github, Linkedin, Mail } from "lucide-react";
import { TypingAnimation, TextGeneration } from "./TypingAnimation";
import EightBitFigure from "./EightBitFigure";
import { motion } from "framer-motion";

export default function HeroSection() {
  const greetingWords = ["Hello", "Salut", "Willkommen", "عسلامة"];
  const nameWords = ["Mohamed Amine", "an Engineer", "a Data Scientist", "a Quant"];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[hsl(var(--portfolio-bg-from))] via-[hsl(var(--portfolio-bg-via))] to-[hsl(var(--portfolio-bg-to))] relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/5 to-portfolio-secondary/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                <TypingAnimation words={greetingWords} className="text-portfolio-primary" />
                {", I'm "}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
                  <TypingAnimation words={nameWords} />
                </span>
              </h1>
              
              <div className="text-xl text-muted-foreground leading-relaxed max-w-2xl min-h-[120px]">
                <TextGeneration
                  text="Creating powerful digital solutions through mathematical modeling, advanced web technologies, and intelligent systems. Passionate about scalable innovations that merge theory with real world impact"
                  delay={1500}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/AmineOuerfellii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-portfolio-primary hover:bg-portfolio-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-lg font-semibold"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-primary-foreground transition-all text-lg font-semibold"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/AmineOuerfellii"
                className="text-muted-foreground hover:text-portfolio-primary transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/amineouerfelli/"
                className="text-muted-foreground hover:text-portfolio-primary transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mohamedamine.ouerfelli@outlook.com"
                className="text-muted-foreground hover:text-portfolio-primary transition-colors transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* 8-bit Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center w-full max-w-xs mx-auto lg:max-w-full"
          >
            <div className="rounded-2xl shadow-2xl w-full h-auto animate-float bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center p-8 relative max-w-[400px] min-h-[300px]">
              {/* Simple pixel city background */}
              <svg width="400" height="300" className="absolute left-0 top-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
                <rect x="0" y="200" width="400" height="100" fill="#b3c6e0" />
                <rect x="20" y="170" width="40" height="60" fill="#7a8fa6" />
                <rect x="70" y="150" width="30" height="80" fill="#5c6e91" />
                <rect x="110" y="180" width="50" height="50" fill="#8fa6c6" />
                <rect x="180" y="160" width="60" height="70" fill="#6b7fa6" />
                <rect x="260" y="190" width="30" height="40" fill="#a6b8d6" />
                <rect x="310" y="170" width="60" height="60" fill="#7a8fa6" />
                <rect x="380" y="180" width="15" height="50" fill="#5c6e91" />
                {/* Windows */}
                <rect x="30" y="180" width="6" height="10" fill="#fff" opacity="0.7" />
                <rect x="80" y="160" width="5" height="8" fill="#fff" opacity="0.7" />
                <rect x="120" y="190" width="8" height="12" fill="#fff" opacity="0.7" />
                <rect x="200" y="170" width="10" height="15" fill="#fff" opacity="0.7" />
                <rect x="320" y="180" width="8" height="12" fill="#fff" opacity="0.7" />
              </svg>
              
              <div className="flex flex-col items-center justify-center h-full gap-8 z-10">
                <EightBitFigure wave label="Hi" scale={2} />
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full opacity-20 animate-pulse-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent rounded-full opacity-20 animate-pulse-slow delay-1000" />
          </motion.div>
        </div>

  {/* Section slider is rendered by App; hero only contains hero content */}
      </div>
    </section>
  );
}
