export const bio = {
  name: "Amine",
  title: "Cognitive Sciences & CS Student",
  titleFR: "Étudiant en Sciences Cognitives & Informatique",
  school: "IDMC — Université de Lorraine",
  tagline: "Building at the intersection of mind & machine.",
  taglineFR: "À l'intersection de l'esprit et de la machine.",
  description: `Master 1 in Cognitive Sciences at IDMC, Université de Lorraine.
I design systems that think — compilers, databases, UX interfaces — and explore how humans and computers model the world.`,
  descriptionFR: `Master 1 en Sciences Cognitives à l'IDMC, Université de Lorraine.
Je conçois des systèmes qui pensent — compilateurs, bases de données, interfaces UX — et j'explore comment les humains et les machines modélisent le monde.`,
  location: "Nancy, France",
  github: "https://github.com/amine",
  linkedin: "#",
  email: "amine@etud.univ-lorraine.fr",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "SQL / PL/pgSQL", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "Python", level: 75 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "Vite", level: 78 },
      { name: "Figma", level: 72 },
      { name: "Bun", level: 70 },
    ],
  },
  {
    category: "Backend & DB",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "PL/pgSQL", level: 85 },
      { name: "Maven", level: 70 },
      { name: "JFlex / CUP", level: 75 },
    ],
  },
  {
    category: "Tools & Methods",
    items: [
      { name: "Git / GitHub", level: 80 },
      { name: "UX Research", level: 78 },
      { name: "Heuristic Eval.", level: 82 },
      { name: "Technical Analysis", level: 85 },
    ],
  },
];

export const projects = [
  {
    id: "compiler",
    title: "Custom Language Compiler",
    titleFR: "Compilateur de Langage Impératif",
    year: "2024",
    tags: ["Java", "JFlex", "CUP", "Maven", "BETA ASM"],
    color: "#58e5a0",
    description:
      "End-to-end compiler for a custom imperative language targeting BETA assembly. Includes lexer, parser, AST generation, semantic analysis, and code emission.",
    descriptionFR:
      "Compilateur complet pour un langage impératif custom ciblant l'assembleur BETA. Inclut lexer, parseur, AST, analyse sémantique et génération de code.",
    highlights: ["JFlex lexer + CUP LALR parser", "AST-based code generation", "Maven build pipeline", "BETA assembly output"],
    course: "UE 602 — IDMC",
    github: "#",
  },
  {
    id: "database",
    title: "Com'Art Agency DB",
    titleFR: "BDD Agence Com'Art",
    year: "2024",
    tags: ["PostgreSQL", "PL/pgSQL", "SQL", "RBAC"],
    color: "#6bcbff",
    description:
      "Full PostgreSQL schema for a fictional creative agency. 10 business queries, a view, stored procedures, triggers, and role-based access control.",
    descriptionFR:
      "Schéma PostgreSQL complet pour une agence fictive Com'Art. 10 requêtes métier, une vue, procédures stockées, triggers et contrôle d'accès par rôles.",
    highlights: ["Partitioning strategy", "trig1 & trig2 triggers", "Role-based access (RBAC)", "Full PL/pgSQL functions"],
    course: "L3 MIASHS/MIAGE — DB",
    github: "#",
  },
  {
    id: "ux",
    title: "Arngren.net UX Redesign",
    titleFR: "Refonte UX Arngren.net",
    year: "2024",
    tags: ["Figma", "UX Research", "Heuristics", "Card Sorting"],
    color: "#ffd93d",
    description:
      "Complete UX evaluation and redesign of one of the web's most chaotic e-commerce sites. Applied Bastien & Scapin heuristics, 5-second tests, card sorting, and Figma prototyping.",
    descriptionFR:
      "Évaluation UX et refonte complète d'un des sites e-commerce les plus chaotiques du web. Heuristiques Bastien & Scapin, tests 5 secondes, tri par cartes, prototypage Figma.",
    highlights: ["Bastien & Scapin evaluation", "5-second tests", "Card sorting methodology", "Figma high-fi mockup"],
    course: "Évaluation IHM — G09",
    github: "#",
  },
  {
    id: "cles",
    title: "Crypto vs Gold — CLES Dossier",
    titleFR: "Crypto vs Or — Dossier CLES",
    year: "2025",
    tags: ["Research", "B2 English", "Bitcoin", "Economics"],
    color: "#ff6b6b",
    description:
      "Bilingual academic dossier debating Bitcoin vs Gold as investment assets. Structured research with real source documents, transcriptions, and oral production scenario.",
    descriptionFR:
      "Dossier académique bilingue mettant en débat Bitcoin vs Or comme actifs d'investissement. Recherche structurée avec documents réels, transcriptions et scénario oral.",
    highlights: ["Bitcoin technical analysis", "Multi-source research", "B2-level English production", "Structured debate format"],
    course: "CLES — Université de Lorraine",
    github: "#",
  },
];

export const timeline = [
  { year: "2022", event: "Started L3 MIASHS/MIAGE", eventFR: "Début L3 MIASHS/MIAGE" },
  { year: "2023", event: "UX/IHM Research & Figma", eventFR: "Recherche UX/IHM & Figma" },
  { year: "2024", event: "Compiler Dev + PostgreSQL", eventFR: "Dev Compilateur + PostgreSQL" },
  { year: "2025", event: "Master 1 — Sciences Cognitives", eventFR: "Master 1 — Sciences Cognitives" },
];
