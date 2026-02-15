import { Card } from './ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science: Computer Science",
      institution: "University of Zambia",
      location: "Lusaka",
      period: "2022 – 2025",
      type: "Undergraduate",
      description: "Comprehensive study of computer science fundamentals including programming, algorithms, data structures, system architecture, and software engineering principles.",
      icon: "🎓"
    },
    {
      degree: "Senior Secondary Certificate",
      institution: "Parklands Secondary School",
      location: "Chilanga",
      period: "Completed",
      type: "Secondary Education",
      description: "Strong foundation in sciences and mathematics, laying the groundwork for advanced computer science studies.",
      icon: "📚"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Academic <span className="text-primary">Background</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a strong foundation through quality education and continuous learning
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background"></div>
                  </div>

                  {/* Content Card */}
                  <Card className={`p-8 bg-white border-border hover:shadow-xl transition-all ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-4 rounded-xl text-4xl">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs mb-2">
                          {edu.type}
                        </span>
                        <h3 className="text-xl mb-1">{edu.degree}</h3>
                        <p className="text-primary mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="size-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="size-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </Card>

                  {/* Empty Space for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Learning */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-white border-border max-w-3xl mx-auto">
              <h3 className="text-2xl mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6">
                Beyond formal education, I actively pursue knowledge through online courses, technical documentation, 
                and hands-on projects. My Cisco certifications in Networking and IT Essentials demonstrate my 
                commitment to expanding my technical expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Self-Directed Learning</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Technical Documentation</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Online Courses</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Practical Projects</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
