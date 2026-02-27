import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          color: 'var(--primary)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-primary/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-primary">Computer Science Graduate</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Musengwa<br />
              <span className="text-primary">Himoonga</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full-stack developer passionate about creating elegant solutions to complex problems. 
              Experienced in modern web and mobile technologies with a strong foundation in system architecture.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-5 text-primary" />
                <span>Lusaka, Zambia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="size-5 text-primary" />
                <span>0779780108</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="size-5 text-primary" />
                <span>himoonga888@gmail.com</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 size-4" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/Musengwa" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 size-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Linkedin className="mr-2 size-4" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Overlapping Images */}
          <motion.div 
            className="relative aspect-square"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Image 1 - Largest, bottom left */}
            <motion.div 
              className="absolute w-3/4 h-3/4 bottom-0 left-0 z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-card dark:border-card"
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img 
                src="/images/Pics/work.jpg"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 - Medium, top right */}
            <motion.div 
              className="absolute w-1/2 h-1/2 top-0 right-0 z-20 rounded-2xl overflow-hidden shadow-xl border-4 border-card dark:border-card"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <img 
                src="/images/Pics/intro2.jpg"  // Replace with actual image
                alt="Coding setup"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3 - Small, center */}
            <motion.div 
              className="absolute w-1/3 h-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-2xl overflow-hidden shadow-xl border-4 border-card dark:border-card"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 20 }}
            >
              <img 
                src="/images/Pics/intro3.jpg"  // Replace with actual image
                alt="Detail shot"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl -z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            ></motion.div>
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-3xl -z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, type: "spring" }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}