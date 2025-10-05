import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
  blog: {
    id: number;
    title: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
    tags: string[];
  };
}

export default function BlogPost({ onBack, blog }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>

        <article>
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime} read</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {blog.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Written by</p>
                <p className="text-lg font-semibold text-gray-900">John Doe</p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-blue-50 text-blue-600 rounded-full font-medium hover:bg-blue-100 transition-colors">
                  Share
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>March {10 + i}, 2024</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Related Article {i}
                </h4>
                <p className="text-gray-600">
                  Discover more insights and learn about related topics in this article.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
