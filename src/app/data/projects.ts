export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  screenshots?: string[];
  video?: string; // could be a url to mp4 or youtube embed
  codeLink?: string;
  demoLink?: string;
  progress?: number; // 0-100
}

export const projects: Project[] = [
  {
    id: "Odini mobile app",
    title: "travel Platform",
    description:
      "Full-stack e-commerce solution built with React and Node.js, featuring user authentication, product management, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzEwNzI0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "MySQL", "Stripe"],
    category: "Web Development",
    screenshots: [
      "https://via.placeholder.com/800x400?text=E-Commerce+Screenshot+1",
      "https://via.placeholder.com/800x400?text=E-Commerce+Screenshot+2",
    ],
    video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    codeLink: "https://github.com/username/e-commerce",
    demoLink: "https://ecommerce.example.com",
    progress: 85,
  },
  {
    id: "fitness-tracker",
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform mobile app for tracking workouts and nutrition, with real-time data sync and progress visualization.",
    image:
      "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzExMjMzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "Supabase", "Charts"],
    category: "Mobile Development",
    screenshots: [
      "https://via.placeholder.com/800x400?text=Fitness+Screenshot+1",
      "https://via.placeholder.com/800x400?text=Fitness+Screenshot+2",
    ],
    codeLink: "https://github.com/username/fitness-tracker",
    demoLink: "https://fitness.example.com",
    progress: 60,
  },
  {
    id: "data-dashboard",
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing complex datasets with Python and pandas, featuring automated reporting and insights.",
    image:
      "https://images.unsplash.com/photo-1766203551890-2664b619042b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxMDc5NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Pandas", "Data Viz"],
    category: "Data Analysis",
    screenshots: [
      "https://via.placeholder.com/800x400?text=Dashboard+Screenshot+1",
      "https://via.placeholder.com/800x400?text=Dashboard+Screenshot+2",
    ],
    codeLink: "https://github.com/username/data-dashboard",
    progress: 90,
  },
  {
    id: "game-platform",
    title: "Educational Game Platform",
    description:
      "Interactive learning platform built with Unity for teaching programming concepts through gamification.",
    image:
      "https://images.unsplash.com/photo-1588504225021-7f3c3273896d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cCUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTUwOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Unity", "C++", "Game Design"],
    category: "Game Development",
    screenshots: [
      "https://via.placeholder.com/800x400?text=Game+Screenshot+1",
      "https://via.placeholder.com/800x400?text=Game+Screenshot+2",
    ],
    video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    codeLink: "https://github.com/username/game-platform",
    progress: 70,
  },
];
