"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CreativeCodingPage() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Particle System",
      description: "Interactive particle system with physics simulation using Canvas API.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
      tags: ["JavaScript", "Canvas API", "Physics"],
    },
    {
      title: "Audio Visualizer",
      description: "Real-time audio visualization using Web Audio API and Three.js.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
      tags: ["JavaScript", "Web Audio API", "Three.js"],
    },
    {
      title: "Generative Art",
      description: "Procedurally generated artwork using algorithms and randomness.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
      tags: ["JavaScript", "Canvas API", "Algorithms"],
    },
    {
      title: "Interactive Typography",
      description: "Typography experiments with interactive elements and animations.",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://example.com",
      tags: ["JavaScript", "CSS", "GSAP"],
    },
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("coding.title")}</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Exploring the intersection of code and creativity through interactive experiments, generative art, and visual
        programming.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-8 bg-card rounded-lg border shadow-md">
        <h2 className="text-2xl font-bold mb-4">Creative Coding Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Libraries & Frameworks</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>p5.js - JavaScript library for creative coding</li>
              <li>Three.js - 3D graphics library for the web</li>
              <li>D3.js - Data visualization library</li>
              <li>GSAP - Animation library</li>
              <li>Paper.js - Vector graphics scripting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The Coding Train - YouTube channel</li>
              <li>Nature of Code - Book by Daniel Shiffman</li>
              <li>Generative Design - Book by Benedikt Gross</li>
              <li>Creative Coding with Canvas & WebGL - Online course</li>
              <li>CodePen - Platform for creative code experiments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
