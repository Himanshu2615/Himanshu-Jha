"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"

export default function HomePage() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background dark:from-background dark:via-indigo-950/20 dark:to-background animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("home.hello")}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 animate-gradient-x">
                HIMANSHU JHA
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TypeAnimation
                sequence={[
                  "Creative Developer",
                  2000,
                  "CS Student",
                  2000,
                  "Problem Solver",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-indigo-500 dark:text-indigo-400"
              />
            </motion.h2>

            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm border-indigo-500/50 text-indigo-500 dark:text-indigo-400"
              >
                React
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm border-indigo-500/50 text-indigo-500 dark:text-indigo-400"
              >
                JavaScript
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm border-indigo-500/50 text-indigo-500 dark:text-indigo-400"
              >
                TypeScript
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm border-indigo-500/50 text-indigo-500 dark:text-indigo-400"
              >
                Next.js
              </Badge>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm border-indigo-500/50 text-indigo-500 dark:text-indigo-400"
              >
                Node.js
              </Badge>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("home.getintouch")}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-indigo-500/50 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/10"
              >
                <Link href="/contact">
                  <Download className="mr-2 h-4 w-4" />
                  {t("home.download")}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-indigo-500/10 hover:text-indigo-500"
              >
                <Link href="https://github.com/Himanshu2615" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-indigo-500/10 hover:text-indigo-500"
              >
                <Link href="https://www.linkedin.com/in/himanshujha2026" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[400px] md:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Code background effect */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20 dark:opacity-30">
              <pre className="text-xs md:text-sm text-indigo-800 dark:text-indigo-400 rotate-12 scale-125">
                <code>
                  {`
function Portfolio() {
  const skills = ["React", "Next.js", "TypeScript"];
  const projects = [];
  
  const createProject = (name, tech) => {
    return { name, tech, completed: true };
  };
  
  projects.push(createProject("Portfolio", "Next.js"));
  projects.push(createProject("E-Commerce", "MERN Stack"));
  projects.push(createProject("AI Dashboard", "React + Python"));
  
  return {
    name: "Himanshu Jha",
    title: "Creative Developer",
    skills,
    projects,
    contact: "himanshujha2615@gmail.com"
  };
}

const developer = Portfolio();
console.log(\`Hello, I'm \${developer.name}\`);
                  `}
                </code>
              </pre>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY },
                  scale: { duration: 3, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Himanshu Jha Logo"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                />
              </motion.div>

              {/* Orbiting dots */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-indigo-500"
                  style={{
                    top: "50%",
                    left: "50%",
                    margin: "-4px",
                  }}
                  animate={{
                    x: Math.cos(i * (Math.PI / 6)) * 150,
                    y: Math.sin(i * (Math.PI / 6)) * 150,
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500">
            {t("home.things")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-border/50 backdrop-blur-sm bg-opacity-50 group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-indigo-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">Web Development</h3>
              <p className="text-muted-foreground">
                Building responsive and interactive web applications using modern frameworks and technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-border/50 backdrop-blur-sm bg-opacity-50 group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">Algorithms</h3>
              <p className="text-muted-foreground">
                Solving complex problems with efficient algorithms and data structures.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-border/50 backdrop-blur-sm bg-opacity-50 group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">Cloud Computing</h3>
              <p className="text-muted-foreground">
                Deploying and managing applications in cloud environments for scalability and reliability.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
