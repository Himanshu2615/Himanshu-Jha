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
      title: "Presensee",
      description:
        "A Face Recognition System that detects and recognizes faces in images using Harcascade models also has multilingual and speaking modules like pyttsx3 UI is based on tkinter techniques.",
      image: "/img4.png",
      tags: ["Python", "OpenCV", "Harcascade", "Tkinter", "Pyttsx3"],
      github: "https://github.com/Himanshu2615/Presensee",
      demo: "https://github.com/Himanshu2615/Presensee",
      category: "software",
    },
    {
      title: "Expense-Tracker",
      description:
        "A web application for tracking personal expenses with features like adding, editing, and deleting expenses, and generating reports.",
      image: "/img8.png",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com/Himanshu2615",
      demo: "https://example.com",
      category: "web",
    },
    {
      title: "Weather Forecast App",
      description: "A weather forecast application that provides real-time weather information based on location.",
      image: "/image.png",
      tags: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
      github: "https://github.com/Himanshu2615/JalVani",
      demo: "https://jalvani.netlify.app",
      category: "web",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills with multi-language support.",
      image: "/img2.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Himanshu2615/Himanshu-Jha",
      demo: "https://himanshu-jha.vercel.app/",
      category: "web",
    },
    {
      title: "Company Website",
      description: "A company website built with Next.js and Tailwind CSS, featuring a modern design and responsive layout.",
      image: "/img5.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Himanshu2615/Megha-Engineering",
      demo: "https://megha-engineering.vercel.app/",
      category: "web",
    },
    {
      title: "Club Website",
      description: "A club website built with Next.js and Tailwind CSS, and backend in python featuring a modern design and responsive layout.",
      image: "/img6.png",
      tags: ["Next.js", "Tailwind CSS", "TypeScript", "Python"],
      github: "https://github.com/LinpackClub/club-website",
      demo: "https://linpack.vercel.app/",
      category: "web",
    },
    {
      title: "Machine Learning Model",
      description: "A machine learning model for image classification using convolutional neural networks.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
      github: "https://github.com/Himanshu2615",
      demo: "",
      category: "ml",
    },
    {
      title: "ResuCraft - Resume Builder",
      description: "A web application for creating professional resumes with customizable templates and export options.",
      image: "/img3.png",
      tags: ["JavaScript", "Latex", "HTML", "CSS"],
      github: "https://github.com/Himanshu2615",
      demo: "https://resucraft-make.vercel.app/",
      category: "data",
    },
    {
      title: "MindFlow - mindmap Builder",
      description: "A web application for creating mind maps with features like adding nodes, links, and exporting to various formats.",
      image: "/img7.png",
      tags: ["TypeScript", "React", "Tailwind CSS", "Node.js"],
      github: "https://github.com/Himanshu2615/MindFlow",
      demo: "https://mind-flow-inky.vercel.app/",
      category: "ml",
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
