import { Card } from './ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      role: "IT Support & Developer Mentor",
      company: "Zambia National STEM Foundation",
      location: "Lusaka, Zambia",
      period: "November 2024 – April 2025",
      type: "Internship",
      image: "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGNvZGluZ3xlbnwxfHx8fDE3NzExNTA5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      responsibilities: [
        "Mentored young developers in foundational programming concepts and best practices",
        "Provided technical support for robotics and STEM-focused training programs",
        "Assisted students with hands-on tech projects and troubleshooting",
        "Contributed to curriculum development for programming workshops",
        "Supported the integration of modern development tools in education"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card">
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
              Work Experience
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience supporting STEM education and mentoring the next generation of developers
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-border hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-1 h-64 md:h-auto">
                      <img 
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:col-span-2 p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                            {exp.type}
                          </div>
                          <h3 className="text-2xl mb-2">{exp.role}</h3>
                          <p className="text-xl text-primary">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="size-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex gap-3">
                            <div className="bg-primary/20 rounded-full p-1 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="bg-primary rounded-full h-2 w-2"></div>
                            </div>
                            <p className="text-muted-foreground">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}