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
    title: "Odini Mobile application (front-end)",
    description:
      "the perfect travel Platform, recommending the perfect stays, events and luxurious services for your next trip. im working on the application's main user front end..",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzEwNzI0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "postgreSQL", "SUPABASE"],
    category: "mobile app Development",
    screenshots: [
      "https://via.placeholder.com/800x400?text=E-Commerce+Screenshot+1",
      "https://via.placeholder.com/800x400?text=E-Commerce+Screenshot+2",
    ],
    video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    codeLink: "https://github.com/username/e-commerce",
    demoLink: "https://ecommerce.example.com",
    progress: 80,
  },
  {
    id: "ranker",
    title: "RANKER",
    description:
      "an online web group game to rank members on silly attributes/awards in a FIFA style BALON'DOR event, creating FIFA player cards and best part the best part is its groups, awards and rank attributes are fully customisable",
    image:
      "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzExMjMzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Supabase", "Charts"],
    category: "Mobile Development",
    screenshots: [
      "https://via.placeholder.com/800x400?text=Fitness+Screenshot+1",
      "https://via.placeholder.com/800x400?text=Fitness+Screenshot+2",
    ],
    codeLink: "https://github.com/username/fitness-tracker",
    demoLink: "https://fitness.example.com",
    progress: 80,
  },
  {
    id: "moneyside",
    title: "money-side",
    description:
      "an ML Budgetting application that,learns users spending habbits and prices to suggest how user should spend their money ",
    image:
      "https://images.unsplash.com/photo-1766203551890-2664b619042b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2lyY3VpdCUyMGJvYXJkJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxMDc5NzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Python", "Pandas", "react native", "node"],
    category: "Data Analysis",
    screenshots: [
      "https://via.placeholder.com/800x400?text=Dashboard+Screenshot+1",
      "https://via.placeholder.com/800x400?text=Dashboard+Screenshot+2",
    ],
    codeLink: "https://github.com/username/data-dashboard",
    progress: 60,
  },
  {
    id: "simple plane game",
    title: "simple plane game",
    description:
      "a simple but fun plane game.",
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
    progress: 20,
  },
  {
    id: "EK-health-app",
    title: "EK-health-app",
    description:
      "a mobile application used to shorten lines at local health facilities by lating users feel in their details and symptoms doctors can then give a diagnosis if one is found.",
    image:
      "https://images.unsplash.com/photo-1588504225021-7f3c3273896d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cCUyMG1pbmltYWx8ZW58MXx8fHwxNzcxMTUwOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["react native", "python", "iots", "node.js"],
    category: "mobile app developmet, IOT",
    screenshots: [
      "https://via.placeholder.com/800x400?text=Game+Screenshot+1",
      "https://via.placeholder.com/800x400?text=Game+Screenshot+2",
    ],
    video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    codeLink: "https://github.com/username/game-platform",
    progress: 85,
  },
];
