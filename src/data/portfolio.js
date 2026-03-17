export const bio = {
  name: "Benzerga Amine",
  title: "Full-Stack Developer & MIAGE Student",
  titleFR: "Étudiant Développeur Full-Stack / MIAGE",
  school: "IDMC — Université de Lorraine",
  tagline: "Building at the intersection of mind & machine.",
  taglineFR: "À l'intersection de l'esprit et de la machine.",
  description: `Applied computer science student (MIAGE) at IDMC, Université de Lorraine. Passionate about cybersecurity, programming and project management. Curious, rigorous and motivated — looking to contribute to innovative projects.`,
  descriptionFR: `Étudiant en informatique appliquée à la gestion (MIAGE) à l'IDMC, Université de Lorraine. Passionné par la cybersécurité, la programmation et la gestion de projet. Curieux, rigoureux et motivé, je souhaite contribuer à des projets innovants.`,
  location: "15 avenue de Metz, Maxéville (Nancy)",
  github: "https://github.com/gnourex339-2",
  linkedin: "#",
  email: "aminebenzerga13@gmail.com",
  phone: "+33 7 45 76 19 65",
  githubHandle: "@gnourex339-2",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 72 },
      { name: "R", level: 60 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React 18+", level: 85 },
      { name: "Vite", level: 82 },
      { name: "React Router", level: 78 },
      { name: "Figma", level: 70 },
    ],
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Hono", level: 78 },
      { name: "TypeORM", level: 75 },
      { name: "MySQL / PostgreSQL", level: 82 },
      { name: "REST API", level: 85 },
    ],
  },
  {
    category: "Tools & Runtime",
    items: [
      { name: "Bun", level: 80 },
      { name: "Git / GitHub", level: 85 },
      { name: "Canvas API", level: 72 },
      { name: "Regex", level: 75 },
    ],
  },
];

export const projects = [
  {
    id: "vlauvegestion",
    title: "VlauveGestion — Bike Sharing App",
    titleFR: "VlauveGestion — Application de gestion de vélos en libre-service",
    year: "2024",
    tags: ["Python", "Tkinter", "MySQL", "POO"],
    color: "#58e5a0",
    description:
      "Desktop application for managing a bike-sharing system. Built with Python and Tkinter, backed by a MySQL database using object-oriented design.",
    descriptionFR:
      "Application de bureau pour la gestion d'un système de vélos en libre-service. Développée en Python avec Tkinter, base de données MySQL et conception orientée objet.",
    highlights: ["POO architecture", "Tkinter GUI", "MySQL persistence", "CRUD complet"],
    course: "Licence Informatique — Alger 1",
    github: "#",
  },
  {
    id: "parking",
    title: "API Parking — REST API",
    titleFR: "API Parking — API REST pour la gestion de parkings",
    year: "2024",
    tags: ["TypeScript", "Hono", "TypeORM", "MySQL", "Bun"],
    color: "#6bcbff",
    description:
      "RESTful API for managing parking lots, cities and countries. Built with Hono on Bun runtime, TypeORM for database modeling, and MySQL as persistence layer.",
    descriptionFR:
      "API REST pour la gestion de parkings, villes et pays. Construite avec Hono sur Bun, TypeORM pour la modélisation, et MySQL comme couche de persistance.",
    highlights: ["Hono framework on Bun", "TypeORM entities", "RESTful routes", "MySQL integration"],
    course: "Licence MIAGE — Lorraine",
    github: "#",
  },
  {
    id: "coupedumondetickets",
    title: "CoupeDuMonde — Ticket Sales SPA",
    titleFR: "CoupeDuMonde — Application SPA de vente de billets",
    year: "2025",
    tags: ["React 18+", "TypeScript", "Vite", "React Router", "REST API"],
    color: "#ffd93d",
    description:
      "Single-page web application for buying and managing World Cup tickets. React 18 with TypeScript, client-side routing with React Router, and external REST API integration.",
    descriptionFR:
      "Application web monopage pour la vente de billets de Coupe du Monde. React 18 avec TypeScript, routing côté client avec React Router et consommation d'API REST externe.",
    highlights: ["React 18 + TypeScript", "React Router SPA", "External API integration", "Vite build"],
    course: "Licence MIAGE — Lorraine",
    github: "#",
  },
  {
    id: "agoraedate",
    title: "AgoraeDate — Event Sync Bot",
    titleFR: "AgoraeDate — Bot de synchronisation d'événements",
    year: "2025",
    tags: ["Python", "Google Calendar API", "Instagram API", "Regex"],
    color: "#ff6b6b",
    description:
      "Automation bot that syncs events between Instagram (via Instaloader) and Google Calendar. Uses Regex for parsing event data from social media posts.",
    descriptionFR:
      "Bot d'automatisation qui synchronise des événements entre Instagram (via Instaloader) et Google Calendar. Utilise des Regex pour parser les données d'événements depuis les posts.",
    highlights: ["Google Calendar API", "Instagram scraping (Instaloader)", "Regex parsing", "Python automation"],
    course: "Projet personnel",
    github: "#",
  },
  {
    id: "snakerot",
    title: "SnakeRot — AI Snake Game",
    titleFR: "SnakeRot — Jeu Snake autonome avec IA",
    year: "2025",
    tags: ["React", "JavaScript", "Canvas API", "Vite", "Bun"],
    color: "#bd34fe",
    description:
      "Autonomous Snake game with an AI player using Canvas API for rendering. Built with React and Vite on Bun, the AI navigates the grid in real-time.",
    descriptionFR:
      "Jeu Snake autonome avec un joueur IA utilisant la Canvas API pour le rendu. Construit avec React et Vite sur Bun, l'IA navigue sur la grille en temps réel.",
    highlights: ["Canvas API rendering", "AI pathfinding", "React + Bun", "Real-time game loop"],
    course: "Projet personnel",
    github: "#",
  },
];

export const timeline = [
  { year: "2022", event: "Bac S Mathématiques — Mention Bien", eventFR: "Bac S Mathématiques — Mention Bien" },
  { year: "2023", event: "Licence Informatique ½ — Université Alger 1", eventFR: "Licence Informatique ½ — Université Alger 1" },
  { year: "2024", event: "Licence MIAGE — Université de Lorraine", eventFR: "Licence MIAGE — Université de Lorraine" },
  { year: "2025", event: "L3 MIAGE (in progress) — IDMC Nancy", eventFR: "L3 MIAGE (en cours) — IDMC Nancy" },
];
