import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './Hero'
import Education from './sections/Education'
import Experience from './sections/Experience'
import SkillsSection from './sections/Skills'
import LatestBlogs, { blogsData } from './sections/Blogs'
import LatestProjects from './sections/Projects'
import Contact from './sections/Contact'

interface SectionSliderProps {
  onBlogClick?: (blog: typeof blogsData[0]) => void
}

export default function SectionSlider({ onBlogClick }: SectionSliderProps) {
  const sections = [
    { id: 'hero', component: HeroSection, title: 'Home' },
    { id: 'education', component: Education, title: 'Education' },
    { id: 'experience', component: Experience, title: 'Experience' },
    { id: 'skills', component: SkillsSection, title: 'Skills' },
    { id: 'blogs', component: () => <LatestBlogs onBlogClick={onBlogClick} />, title: 'Latest Blogs' },
    { id: 'projects', component: LatestProjects, title: 'Latest Projects' },
    { id: 'contact', component: Contact, title: 'Contact' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToIndex = (index: number) => setCurrentIndex(index)
  const goUp = () => setCurrentIndex((i) => (i === 0 ? sections.length - 1 : i - 1))
  const goDown = () => setCurrentIndex((i) => (i === sections.length - 1 ? 0 : i + 1))

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') goUp()
      if (e.key === 'ArrowDown') goDown()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // touch handlers (minimal to avoid accidental swipes)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => setTouchStartY(e.touches[0].clientY)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY == null) return
    const endY = e.changedTouches[0].clientY
    const diff = touchStartY - endY
    if (diff > 80) goDown()
    if (diff < -80) goUp()
    setTouchStartY(null)
  }

  // Left rail rendered into document.body so it's not affected by transformed ancestors
  function LeftRail() {
    return createPortal(
      <div className="w-16 flex flex-col items-center justify-center gap-3 fixed left-3 top-1/2 transform -translate-y-1/2 z-60 md:left-6 md:w-20 pointer-events-auto">
        <button
          onClick={goUp}
          className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Previous section"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <div className="flex flex-col justify-center items-center gap-2">
          {sections.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-2 rounded-full transition-all duration-200 ${
                idx === currentIndex ? 'md:h-8 h-6 bg-blue-600' : 'md:h-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to ${sections[idx].title}`}
            />
          ))}
        </div>

        <button
          onClick={goDown}
          className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
          aria-label="Next section"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>,
      typeof document !== 'undefined' ? document.body : (null as any)
    )
  }

  return (
    <div className="w-full bg-white" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <LeftRail />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Content area: allow sections to expand naturally; min-h-screen provides minimum viewport height but allows longer content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              {/* render component */}
              {(() => {
                const Comp = sections[currentIndex].component as any
                return <div className="min-h-screen">{
                  /* allow component to determine its own height; longer sections will scroll naturally */
                }
                  <Comp />
                </div>
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
