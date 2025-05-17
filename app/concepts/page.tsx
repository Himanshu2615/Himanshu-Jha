"use client"

import { useLanguage } from "@/components/language-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ConceptsPage() {
  const { t } = useLanguage()

  const concepts = {
    webDev: [
      {
        title: "Progressive Web Apps",
        description: "Building web applications that work offline and provide a native app-like experience.",
        icon: "🌐",
        level: "Advanced",
      },
      {
        title: "JAMstack Architecture",
        description: "Creating fast and secure websites with JavaScript, APIs, and Markup.",
        icon: "🏗️",
        level: "Intermediate",
      },
      {
        title: "Serverless Functions",
        description: "Developing applications without managing server infrastructure.",
        icon: "☁️",
        level: "Intermediate",
      },
      {
        title: "Micro Frontends",
        description: "Breaking down frontend monoliths into smaller, more manageable pieces.",
        icon: "🧩",
        level: "Advanced",
      },
    ],
    algorithms: [
      {
        title: "Dynamic Programming",
        description: "Solving complex problems by breaking them down into simpler subproblems.",
        icon: "📊",
        level: "Advanced",
      },
      {
        title: "Graph Algorithms",
        description: "Solving problems related to networks, paths, and connections.",
        icon: "🕸️",
        level: "Intermediate",
      },
      {
        title: "Sorting Algorithms",
        description: "Efficiently arranging elements in a specific order.",
        icon: "🔄",
        level: "Intermediate",
      },
      {
        title: "Search Algorithms",
        description: "Finding specific elements or values within data structures.",
        icon: "🔍",
        level: "Intermediate",
      },
    ],
    ai: [
      {
        title: "Machine Learning",
        description: "Building systems that can learn from data and make predictions.",
        icon: "🤖",
        level: "Intermediate",
      },
      {
        title: "Natural Language Processing",
        description: "Enabling computers to understand and process human language.",
        icon: "💬",
        level: "Intermediate",
      },
      {
        title: "Computer Vision",
        description: "Teaching computers to interpret and understand visual information.",
        icon: "👁️",
        level: "Beginner",
      },
      {
        title: "Reinforcement Learning",
        description: "Training agents to make decisions through trial and error.",
        icon: "🎮",
        level: "Beginner",
      },
    ],
  }

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">{t("concepts.title")}</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Exploring various concepts and technologies in computer science and software development.
      </p>

      <Tabs defaultValue="webDev" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="webDev">Web Development</TabsTrigger>
          <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
          <TabsTrigger value="ai">AI & ML</TabsTrigger>
        </TabsList>

        {Object.entries(concepts).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                      <Badge>{item.level}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: item.level === "Beginner" ? "33%" : item.level === "Intermediate" ? "66%" : "100%",
                        }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 relative rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0"></div>
        <div className="relative z-10 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Learning Journey</h2>
              <p className="text-lg mb-6">
                My approach to learning new concepts involves understanding the fundamentals, building projects, and
                continuously refining my knowledge through practice and exploration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Understand the core principles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Build practical projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Collaborate with others</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Share knowledge through teaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>Stay updated with latest trends</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Learning Journey"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
