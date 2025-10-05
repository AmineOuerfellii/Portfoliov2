import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    period: "2017 - 2023",
    title: "Diploma in Software Engineering",
    institution: "Esprit",
    description: "Specialization in Quantitative Finance. Thesis on \"Modelling Macroeconomic Indicators: Tunisian & American Economies\"",
  },
  {
    period: "2012 - 2016",
    title: "Baccalauréat",
    institution: "Ibn Khaldoun",
    description: "Scientific Baccalaureate specialization in Mathematics",
  },
];

const certifications = [
  {
    title: "Getting Started with AI using IBM Watson",
    issuer: "IBM",
    period: "Issued: 2020",
  },
  {
    title: "Introduction to Big Data",
    issuer: "UC San Diego",
    period: "Issued: 2020",
  },
  {
    title: "Introduction to Data Analytics for Business",
    issuer: "University of Colorado Boulder",
    period: "Issued: 2020",
  },
  {
    title: "Leadership and Emotional Intelligence",
    issuer: "Indian School of Business",
    period: "Issued: 2020",
  },
  {
    title: "TimeSeries with R/Python",
    issuer: "DataCamp",
    period: "Issued: 2020",
  },
];

export default function Education() {
  return (
    <div className="min-h-[600px] py-12">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Education & Certifications
      </h2>

      <div className="space-y-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <GraduationCap className="w-7 h-7 text-blue-600" />
          Education
        </h3>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{edu.title}</h4>
                  <p className="text-lg text-blue-600 font-semibold">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{edu.period}</span>
              </div>
            </div>
            <p className="text-gray-700 ml-16">{edu.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Award className="w-7 h-7 text-blue-600" />
          Certifications
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
