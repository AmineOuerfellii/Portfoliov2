import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export const blogsData = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with React',
    excerpt: 'Learn the best practices for creating maintainable and scalable React applications.',
    date: '2024-03-15',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Web Development', 'Best Practices'],
    content: `React has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the best practices for creating scalable and maintainable React applications.

When building large-scale applications, it's crucial to establish a solid architecture from the start. This includes proper component organization, state management strategies, and code splitting techniques.

One of the most important aspects is component composition. By breaking down your UI into smaller, reusable components, you create a more maintainable codebase. Each component should have a single responsibility and be easy to test.

State management is another critical consideration. While React's built-in state management is sufficient for small applications, larger projects often benefit from solutions like Redux or Zustand. Choose the right tool based on your specific needs.

Performance optimization should be a priority from day one. Use React.memo for expensive components, implement code splitting with React.lazy, and leverage React's built-in performance tools to identify bottlenecks.

Testing is essential for maintaining code quality. Write unit tests for your components, integration tests for feature flows, and end-to-end tests for critical user journeys. This ensures your application remains stable as it grows.`,
  },
  {
    id: 2,
    title: 'The Future of Web Development in 2024',
    excerpt: 'Exploring emerging trends and technologies shaping the future of web development.',
    date: '2024-03-10',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'Trends', 'Future'],
    content: `The web development landscape is constantly evolving. As we progress through 2024, several emerging trends are shaping how we build and deploy web applications.

Artificial Intelligence is becoming increasingly integrated into development workflows. AI-powered code completion, automated testing, and intelligent debugging tools are making developers more productive than ever.

WebAssembly is gaining traction as a way to run high-performance code in browsers. This technology enables developers to build web applications that rival native desktop applications in speed and capability.

The rise of edge computing is changing how we think about deployment. By running code closer to users, we can dramatically reduce latency and improve user experience. Platforms like Cloudflare Workers and Vercel Edge Functions are leading this charge.

Progressive Web Apps continue to blur the line between web and native applications. With improved offline capabilities and better integration with device features, PWAs offer a compelling alternative to traditional mobile apps.

Sustainability in web development is becoming a priority. Developers are increasingly conscious of their applications' environmental impact, optimizing for energy efficiency and reduced data transfer.`,
  },
  {
    id: 3,
    title: 'Mastering TypeScript for Better Code Quality',
    excerpt: 'How TypeScript can help you write more maintainable and error-free code.',
    date: '2024-03-05',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'Code Quality', 'JavaScript'],
    content: `TypeScript has become the de facto standard for building robust JavaScript applications. Its type system helps catch errors early and makes code more maintainable and self-documenting.

Understanding TypeScript's type system is crucial. Start with basic types like string, number, and boolean, then progress to more advanced concepts like generics, union types, and conditional types.

Interface vs Type: While they're often interchangeable, understanding when to use each is important. Interfaces are great for defining object shapes and can be extended, while type aliases are more flexible for complex types.

Generics are one of TypeScript's most powerful features. They allow you to write reusable code that works with multiple types while maintaining type safety. Mastering generics will significantly improve your code quality.

The strict mode flags in TypeScript help catch more potential issues. Enable strict null checks, no implicit any, and other strict options to get the most benefit from TypeScript's type checking.

Proper typing of third-party libraries is essential. Use DefinitelyTyped when available, and learn to write declaration files when necessary. This ensures type safety throughout your entire application.

TypeScript's tooling integration makes development more efficient. Take advantage of IDE features like intelligent autocomplete, refactoring tools, and inline documentation to boost your productivity.`,
  },
];

interface LatestBlogsProps {
  onBlogClick?: (blog: typeof blogsData[0]) => void;
}

export default function LatestBlogs({ onBlogClick }: LatestBlogsProps) {
  return (
    <div id="blogs" className="min-h-[600px] py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Latest Blog Posts
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <article
            key={blog.id}
            onClick={() => onBlogClick?.(blog)}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                {blog.readTime} read
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {blog.excerpt}
              </p>

              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                <BookOpen className="w-4 h-4" />
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
