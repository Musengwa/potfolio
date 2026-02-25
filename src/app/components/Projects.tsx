import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/projects';
import { projects as projectList } from '../data/projects';

export function Projects() {
  const navigate = useNavigate();
  const projects: Project[] = projectList;

  return (
    <section id="projects" className="py-20 bg-card">
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
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my technical skills and problem-solving abilities
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="cursor-pointer overflow-hidden border-border hover:shadow-xl transition-all group"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons (keep for quick links) */}
                    <div className="flex gap-3">
                      {project.codeLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 size-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demoLink && (
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 size-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Musengwa" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                Visit My GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}