import { Code2, Database, LineChart, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "R", "SQL"],
    color: "from-portfolio-primary to-portfolio-primary/70",
  },
  {
    title: "Data Science",
    icon: LineChart,
    skills: ["Machine Learning", "Statistical Analysis", "Data Visualization", "TensorFlow", "PyTorch"],
    color: "from-portfolio-secondary to-portfolio-secondary/70",
  },
  {
    title: "Web Development",
    icon: Database,
    skills: ["React", "Node.js", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-portfolio-accent to-portfolio-accent/70",
  },
  {
    title: "Tools & Technologies",
    icon: Cpu,
    skills: ["Docker", "Git", "AWS", "Linux", "CI/CD"],
    color: "from-portfolio-primary to-portfolio-secondary",
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-border group hover:border-portfolio-primary/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-portfolio-primary/10 hover:text-portfolio-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
