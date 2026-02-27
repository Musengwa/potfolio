import { Card } from './ui/card';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section id="about" className="py-20 bg-card">
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
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl mb-4">
              Building Digital <span className="text-primary">Experiences</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer with a strong foundation in computer science and hands-on experience 
              in modern web and mobile development technologies.
            </p>
          </motion.div>

          {/* Profile Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>

            {/* Right Content - Four Overlapping Circular Images */}
            <motion.div 
              className="relative aspect-square w-full max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {/* Image 1 - Largest, bottom left */}
              <motion.div 
                className="absolute w-2/3 h-2/3 bottom-0 left-0 z-10 rounded-full overflow-hidden shadow-xl border-4 border-card dark:border-card"
                initial={{ opacity: 0, x: -40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img 
                  src="/images/Pics/heroIntro.jpg"
                  alt="Professional workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 2 - Medium, top right */}
              <motion.div 
                className="absolute w-1/2 h-1/2 top-0 right-0 z-20 rounded-full overflow-hidden shadow-xl border-4 border-card dark:border-card"
                initial={{ opacity: 0, x: 40, y: -40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <img 
                  src="/images/Pics/laptop.jpg"
                  alt="Coding setup"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 3 - Small, centered */}
              <motion.div 
                className="absolute w-1/3 h-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-full overflow-hidden shadow-xl border-4 border-card dark:border-card"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
              >
                <img 
                  src="/images/Pics/ai.PNG"
                  alt="Detail shot"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 4 - Extra small, bottom right */}
              <motion.div 
                className="absolute w-1/4 h-1/4 bottom-[15%] right-[15%] z-40 rounded-full overflow-hidden shadow-xl border-4 border-card dark:border-card rotate-12"
                initial={{ opacity: 0, rotate: -15, scale: 0.6 }}
                whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <img 
                  src="/images/Pics/unza.png"
                  alt="Profile detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-border">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <highlight.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}