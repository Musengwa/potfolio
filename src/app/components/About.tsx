import { Card } from './ui/card';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical approach to complex technical challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Building Digital <span className="text-primary">Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer with a strong foundation in computer science and hands-on experience 
              in modern web and mobile development technologies.
            </p>
          </div>

          {/* Profile Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                As a Computer Science graduand from the University of Zambia, I've developed a comprehensive 
                skill set spanning full-stack web development, mobile applications, and system design. 
                My academic journey has been complemented by practical experience, including my role as 
                an intern at the Zambia National STEM Foundation.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about leveraging technology to create meaningful solutions. Whether it's 
                mentoring young developers, building robust applications, or exploring new frameworks, 
                I approach every project with dedication and attention to detail.
              </p>
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-4xl text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588504225021-7f3c3273896d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cCUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTUwOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coding setup"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <highlight.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
