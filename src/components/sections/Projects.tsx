import { ExternalLink, Github, Code2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

// Load all markdown files placed in src/contents/projects/*.md at build time
// Put your project markdown files in: src/contents/projects/*.md
// Example frontmatter expected in each .md file:
// ---
// title: Project title
// image: /path-or-url.jpg
// technologies:
//  - React
//  - TypeScript
// github: https://github.com/...
// demo: https://...
// ---

// Use Vite raw import with query and import: 'default' to get the markdown as string
const modules = import.meta.glob('../../contents/projects/*.md?raw', { eager: true, import: 'default' }) as Record<string, string>

type ProjectData = {
  title: string
  image?: string
  technologies?: string[]
  github?: string
  demo?: string
  description?: string
}

// Debug: list discovered markdown files
console.log('project markdown modules:', Object.keys(modules))

const projects: Array<ProjectData & { slug: string; content: string }> = Object.entries(modules).map(([path, raw]) => {
  // path example: '../../contents/projects/my-project.md'
  const slug = path.split('/').pop()?.replace(/\.md(\?raw)?$/, '') || path
  // @ts-ignore - raw is string because of as: 'raw'
  const parsed = matter(raw)
  const data = parsed.data as ProjectData
  const content = parsed.content
  return {
    slug,
    content,
    ...data,
  }
})

export default function LatestProjects() {
  return (
    <div id="projects" className="min-h-[600px] py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Latest Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No projects found — add markdown files to <code>src/contents/projects/</code></div>
        ) : (
          projects.map((project, index) => {
            return (
              <div
                key={project.slug || index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
            <div className="relative h-48 overflow-hidden">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              </div>

              {project.description ? (
                <p className="text-gray-600 mb-4">{project.description}</p>
              ) : (
                <div className="text-gray-600 mb-4">
                  <ReactMarkdown>{project.content.slice(0, 300)}</ReactMarkdown>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {(project.technologies || []).map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
