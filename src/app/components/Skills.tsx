import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Boxes, Database, Wrench, Target, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["JavaScript", "Python", "C++", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Boxes,
      skills: ["React", "React Native", "Node.js", "Unity"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQLite", "MySQL", "Supabase"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Pandas", "Microsoft Office"]
    },
    {
      title: "Soft Skills",
      icon: Target,
      skills: ["Problem Solving", "Team Collaboration", "Critical Thinking", "Adaptability", "Fast Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Technical <span className="text-primary">Proficiency</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set covering modern development technologies and methodologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all border-border bg-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <category.icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-2xl">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl text-center mb-8">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">CNA: Introduction to Networking</h4>
                    <p className="text-sm text-muted-foreground">Cisco Networking Academy</p>
                    <p className="text-xs text-muted-foreground mt-1">2024</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="size-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">IT Essentials</h4>
                    <p className="text-sm text-muted-foreground">Cisco Networking Academy</p>
                    <p className="text-xs text-muted-foreground mt-1">2023</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
