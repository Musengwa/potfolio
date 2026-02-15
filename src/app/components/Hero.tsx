import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #B8967D 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary">Computer Science Graduate</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Musengwa<br />
              <span className="text-primary">Himoonga</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Full-stack developer passionate about creating elegant solutions to complex problems. 
              Experienced in modern web and mobile technologies with a strong foundation in system architecture.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
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
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
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
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1622295023825-6e319464b810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTE1MDk5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-3xl -z-10"></div>
          </div>
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
