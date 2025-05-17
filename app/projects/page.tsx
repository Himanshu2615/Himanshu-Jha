"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "web",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "web",
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application that provides real-time weather information based on location.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "web",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills with multi-language support.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "i18n"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "web",
    },
    {
      title: "Machine Learning Model",
      description: "A machine learning model for image classification using convolutional neural networks.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "ml",
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with filtering and sorting capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["D3.js", "React", "Node.js", "Express"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "data",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("projects.title")}
      </motion.h1>

      <motion.div
        className="flex justify-center mb-8 gap-2 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Button
          variant={activeFilter === "all" ? "default" : "outline"}
          onClick={() => setActiveFilter("all")}
          className={activeFilter === "all" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : ""}
        >
          {t("projects.all")}
        </Button>
        <Button
          variant={activeFilter === "web" ? "default" : "outline"}
          onClick={() => setActiveFilter("web")}
          className={activeFilter === "web" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : ""}
        >
          {t("projects.web")}
        </Button>
        <Button
          variant={activeFilter === "ml" ? "default" : "outline"}
          onClick={() => setActiveFilter("ml")}
          className={activeFilter === "ml" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : ""}
        >
          {t("projects.ml")}
        </Button>
        <Button
          variant={activeFilter === "data" ? "default" : "outline"}
          onClick={() => setActiveFilter("data")}
          className={activeFilter === "data" ? "bg-gradient-to-r from-indigo-500 to-purple-500" : ""}
        >
          {t("projects.data")}
        </Button>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card group"
            variants={item}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative aspect-video">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="project-overlay">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{project.description}</p>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70"
                >
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t("projects.code")}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                >
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t("projects.demo")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
