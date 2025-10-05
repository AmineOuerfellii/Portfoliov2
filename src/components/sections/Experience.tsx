import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: 'Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies.',
    achievements: [
      'Architected and delivered 5+ major features',
      'Reduced load time by 40%',
      'Mentored 3 junior developers',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'New York, NY',
    period: '2020 - 2021',
    description: 'Developed and maintained multiple client projects using modern JavaScript frameworks.',
    achievements: [
      'Built 10+ responsive web applications',
      'Implemented CI/CD pipelines',
      'Improved code coverage to 85%',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'StartUp Ventures',
    location: 'Austin, TX',
    period: '2018 - 2020',
    description: 'Created engaging user interfaces and collaborated with design team.',
    achievements: [
      'Launched 3 successful products',
      'Optimized performance metrics',
      'Implemented design system',
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-[600px] py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{exp.description}</p>

            <div className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
