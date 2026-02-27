import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-xl">Project not found.</p>
        <Link to="/" className="inline-flex items-center text-primary mt-4">
          <ArrowLeft className="mr-2" /> Back home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-primary mb-8 hover:underline"
        >
          <ArrowLeft className="mr-2" /> All projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>

          {typeof project.progress === 'number' && (
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span>Completion</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} />
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl mb-4">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.screenshots.map((src, idx) => (
                  <Card key={idx} className="overflow-hidden">
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                ))}
              </div>
            </div>
          )}

          {project.video && (
            <div className="mb-8">
              <h2 className="text-2xl mb-4">Demo Video</h2>
              <div className="aspect-video">
                <video
                  src={project.video}
                  controls
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 flex-wrap">
            {project.codeLink && (
              <Button
                variant="outline"
                size="md"
                asChild
                className="flex-1"
              >
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" /> View code
                </a>
              </Button>
            )}
            {project.demoLink && (
              <Button size="md" asChild className="flex-1 bg-primary hover:bg-primary/90">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2" /> View demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
