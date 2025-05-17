"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SparklesCore } from "@/components/ui/sparkles"

type TechCategory = "frontend" | "backend" | "devops" | "testing" | "hosting" | "all"

interface TechItem {
  name: string
  logo: string
  category: TechCategory
  color: string
}

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("all")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const techStack: TechItem[] = [
    // Frontend
    { name: "TypeScript", logo: "/tech/typescript.svg", category: "frontend", color: "#3178C6" },
    { name: "JavaScript", logo: "/tech/javascript.svg", category: "frontend", color: "#F7DF1E" },
    { name: "React.js", logo: "/tech/react.svg", category: "frontend", color: "#61DAFB" },
    { name: "Next.js", logo: "/tech/nextjs.svg", category: "frontend", color: "#000000" },
    { name: "Vue.js", logo: "/tech/vue.svg", category: "frontend", color: "#4FC08D" },
    { name: "HTML5", logo: "/tech/html5.svg", category: "frontend", color: "#E34F26" },
    { name: "CSS3", logo: "/tech/css3.svg", category: "frontend", color: "#1572B6" },
    { name: "Tailwind CSS", logo: "/tech/tailwindcss.svg", category: "frontend", color: "#06B6D4" },
    { name: "Redux", logo: "/tech/redux.svg", category: "frontend", color: "#764ABC" },
    { name: "React Query", logo: "/tech/react-query.svg", category: "frontend", color: "#FF4154" },
    { name: "Framer Motion", logo: "/tech/framer-motion.svg", category: "frontend", color: "#0055FF" },

    // Backend
    { name: "Node.js", logo: "/tech/nodejs.svg", category: "backend", color: "#339933" },
    { name: "Express.js", logo: "/tech/expressjs.svg", category: "backend", color: "#000000" },
    { name: "MongoDB", logo: "/tech/mongodb.svg", category: "backend", color: "#47A248" },
    { name: "PostgreSQL", logo: "/tech/postgresql.svg", category: "backend", color: "#336791" },
    { name: "MySQL", logo: "/tech/mysql.svg", category: "backend", color: "#4479A1" },
    { name: "Redis", logo: "/tech/redis.svg", category: "backend", color: "#DC382D" },
    { name: "GraphQL", logo: "/tech/graphql.svg", category: "backend", color: "#E10098" },
    { name: "Prisma", logo: "/tech/prisma.svg", category: "backend", color: "#2D3748" },
    { name: "Sequelize", logo: "/tech/sequelize.svg", category: "backend", color: "#52B0E7" },

    // DevOps
    { name: "Docker", logo: "/tech/docker.svg", category: "devops", color: "#2496ED" },
    { name: "Git", logo: "/tech/git.svg", category: "devops", color: "#F05032" },
    { name: "GitHub Actions", logo: "/tech/github-actions.svg", category: "devops", color: "#2088FF" },
    { name: "AWS", logo: "/tech/aws.svg", category: "devops", color: "#FF9900" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg", category: "devops", color: "#326CE5" },

    // Testing
    { name: "Jest", logo: "/tech/jest.svg", category: "testing", color: "#C21325" },
    { name: "Testing Library", logo: "/tech/testing-library.svg", category: "testing", color: "#E33332" },
    { name: "Cypress", logo: "/tech/cypress.svg", category: "testing", color: "#17202C" },
    { name: "Playwright", logo: "/tech/playwright.svg", category: "testing", color: "#2EAD33" },

    // Hosting
    { name: "Vercel", logo: "/tech/vercel.svg", category: "hosting", color: "#000000" },
    { name: "Netlify", logo: "/tech/netlify.svg", category: "hosting", color: "#00C7B7" },
    { name: "Firebase", logo: "/tech/firebase.svg", category: "hosting", color: "#FFCA28" },
    { name: "Heroku", logo: "/tech/heroku.svg", category: "hosting", color: "#430098" },
  ]

  const filteredTech =
    activeCategory === "all" ? techStack : techStack.filter((tech) => tech.category === activeCategory)

  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "devops", name: "DevOps" },
    { id: "testing", name: "Testing" },
    { id: "hosting", name: "Hosting" },
  ]

  return (
    <div className="space-y-8 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      {/* Code blocks background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Sparkles effect */}
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="tech-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleColor="#4f46e5"
          particleDensity={30}
          speed={0.5}
        />
      </div>

      <motion.h2
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
          My Tech Arsenal
        </span>
      </motion.h2>

      <motion.p
        className="text-center text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the cutting-edge technologies I leverage to craft powerful, efficient, and scalable solutions. From
        concept to deployment, I bring expertise in every aspect of the development lifecycle.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as TechCategory)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                : "bg-card hover:bg-card/80 border border-border"
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredTech.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="relative"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div
              className={`tech-card relative overflow-hidden rounded-lg border border-border/50 bg-black p-4 flex flex-col items-center justify-center transition-all duration-300 h-32`}
              style={{
                boxShadow: hoveredTech === tech.name ? `0 0 20px ${tech.color}40` : "none",
                borderColor: hoveredTech === tech.name ? tech.color : "rgba(255,255,255,0.1)",
              }}
            >
              {/* Background glow effect */}
              <div
                className="absolute inset-0 opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}80 0%, transparent 70%)`,
                  opacity: hoveredTech === tech.name ? 0.3 : 0.1,
                }}
              ></div>

              {/* Code background for tech cards */}
              {hoveredTech === tech.name && (
                <motion.div
                  className="absolute inset-0 opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-[0.4rem] text-white/50 overflow-hidden h-full p-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="whitespace-nowrap">
                        {`import { ${tech.name} } from '${tech.category}';`}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Logo */}
              <div className="relative w-12 h-12 mb-3 z-10">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  fill
                  className="object-contain transition-all duration-300"
                  style={{
                    transform: hoveredTech === tech.name ? "scale(1.1)" : "scale(1)",
                  }}
                />
              </div>

              {/* Name */}
              <p className="text-sm font-medium text-center text-white z-10">{tech.name}</p>

              {/* Hover effect - pulsing ring */}
              {hoveredTech === tech.name && (
                <motion.div
                  className="absolute inset-0 rounded-lg z-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.8, 1.05, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    border: `1px solid ${tech.color}`,
                    boxShadow: `0 0 15px ${tech.color}40`,
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech categories explanation */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 relative overflow-hidden group">
          {/* Decorative code block background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
              </svg>
            </span>
            Frontend Development
          </h3>
          <p className="text-muted-foreground">
            Creating responsive, interactive, and visually appealing user interfaces with modern frameworks and
            libraries.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 relative overflow-hidden group">
          {/* Decorative code block background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-indigo-500"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </span>
            Backend Development
          </h3>
          <p className="text-muted-foreground">
            Building robust server-side applications, APIs, and database systems that power modern web applications.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 relative overflow-hidden group">
          {/* Decorative code block background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M12 3a9 9 0 1 0 9 9"></path>
                <path d="M12 3v9l9 9"></path>
              </svg>
            </span>
            DevOps & Deployment
          </h3>
          <p className="text-muted-foreground">
            Implementing CI/CD pipelines, containerization, and cloud infrastructure for seamless deployment and
            scaling.
          </p>
        </div>
      </motion.div>

      {/* Analytics section */}
      <motion.div
        className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-500"
            >
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
            Site Analytics
          </h3>
          <p className="text-muted-foreground mb-4">
            This portfolio is equipped with Google Analytics to track visitor engagement and improve user experience.
            All data is collected anonymously and used solely for website optimization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-card/50 p-4 rounded-lg border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Page Views</div>
                <div className="text-xl font-bold">Analytics</div>
              </div>
            </div>

            <div className="bg-card/50 p-4 rounded-lg border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Avg. Time</div>
                <div className="text-xl font-bold">Tracked</div>
              </div>
            </div>

            <div className="bg-card/50 p-4 rounded-lg border border-border/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-500"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Visitors</div>
                <div className="text-xl font-bold">Monitored</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
