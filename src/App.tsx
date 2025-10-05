import { useState } from 'react';
import Navigation from './components/Navigation';
import SectionSlider from './components/sectionslide';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import { blogsData } from './components/sections/Blogs';

function App() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogsData[0] | null>(null);

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation isFloating />
        <BlogPost
          blog={selectedBlog}
          onBack={() => setSelectedBlog(null)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SectionSlider onBlogClick={setSelectedBlog} />
      <Footer />
    </div>
  );
}

export default App;
