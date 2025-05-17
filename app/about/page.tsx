"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, CastleIcon as ChessKnight, BirdIcon as Cricket, Music, BookOpen, Camera } from "lucide-react"
import { useState, useEffect } from "react"
import TechArsenal from "@/components/tech-arsenal"

export default function AboutPage() {
  const { t } = useLanguage()
  const [flipped, setFlipped] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const interests = [
    { name: "Chess", icon: ChessKnight, description: "Strategic board game enthusiast" },
    { name: "Cricket", icon: Cricket, description: "Fan and occasional player" },
    { name: "Reading", icon: BookOpen, description: "Technical books and sci-fi novels" },
    { name: "Photography", icon: Camera, description: "Capturing moments and landscapes" },
    { name: "Music", icon: Music, description: "Listening to various genres" },
  ]

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "VIT Bhopal University",
      year: "2022 - 2026",
      description: "Currently pursuing Bachelor of Technology in Computer Science.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "CBSE",
      year: "2020 - 2022",
      description: "Completed with 79.4% marks in Science stream.",
    },
    {
      degree: "Senior Secondary Education",
      institution: "CBSE",
      year: "2019 - 2020",
      description: "Completed with 81.6% marks.",
    },
  ]

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
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500">
          {t("about.title")}
        </span>
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="md:col-span-1">
          <motion.div
            className="relative w-full aspect-square perspective-1000"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-full h-full relative preserve-3d transition-all duration-500"
              animate={{ rotateY: flipped ? 180 : 0 }}
            >
              {/* Front of card */}
              <div
                className="absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.45)] cursor-pointer"
                onClick={() => setFlipped(!flipped)}
              >
                <Image src="/profile-1.jpeg" alt="Himanshu Jha" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium">Click to flip</p>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div
                className="absolute w-full h-full backface-hidden rounded-full overflow-hidden border-4 border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.45)] [transform:rotateY(180deg)] cursor-pointer"
                onClick={() => setFlipped(!flipped)}
              >
                <Image src="/profile-2.jpeg" alt="Himanshu Jha" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium">Click to flip</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-indigo-500/50 rounded-tl-lg"
              animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-indigo-500/50 rounded-br-lg"
              animate={{ rotate: [0, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
          </motion.div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <motion.p className="text-lg" variants={item} initial="hidden" animate="show">
            I am a passionate Computer Science student with a strong foundation in programming and problem-solving. My
            journey in the world of technology began when I was in high school, and since then, I have been constantly
            learning and exploring new technologies.
          </motion.p>
          <motion.p className="text-lg" variants={item} initial="hidden" animate="show" transition={{ delay: 0.1 }}>
            My primary areas of interest include web development, artificial intelligence, and cloud computing. I enjoy
            building applications that solve real-world problems and provide value to users.
          </motion.p>
          <motion.p className="text-lg" variants={item} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
            When I'm not coding, you can find me playing chess, watching cricket matches, reading tech blogs,
            participating in hackathons, or contributing to open-source projects. I believe in continuous learning and
            staying updated with the latest trends in technology.
          </motion.p>

          <motion.div className="flex flex-wrap gap-2 pt-4" variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0">
                Web Development
              </Badge>
            </motion.div>
            <motion.div variants={item}>
              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0">
                Problem Solving
              </Badge>
            </motion.div>
            <motion.div variants={item}>
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                UI/UX Design
              </Badge>
            </motion.div>
            <motion.div variants={item}>
              <Badge className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white border-0">
                Cloud Computing
              </Badge>
            </motion.div>
            <motion.div variants={item}>
              <Badge className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white border-0">
                Machine Learning
              </Badge>
            </motion.div>
            <motion.div variants={item}>
              <Badge className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white border-0">
                Open Source
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <Tabs defaultValue="tech" className="w-full mb-16">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger
            value="tech"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Tech Arsenal
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="interests"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
          >
            Interests
          </TabsTrigger>
          <TabsTrigger
            value="location"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Location
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tech">
          <TechArsenal />
        </TabsContent>

        <TabsContent value="education">
          <motion.div className="space-y-6" variants={container} initial="hidden" animate="show">
            {education.map((item, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-md transition-all group">
                  <CardHeader className="bg-gradient-to-r from-transparent to-transparent group-hover:from-violet-500/10 group-hover:to-indigo-500/10 transition-all duration-300">
                    <CardTitle className="flex justify-between items-start">
                      <span className="group-hover:text-indigo-500 transition-colors">{item.degree}</span>
                      <Badge variant="outline" className="border-indigo-500/50 text-indigo-500">
                        {item.year}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-base">{item.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="interests">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-indigo-500/30 transition-all flex-shrink-0">
                      <interest.icon
                        size={32}
                        className="text-indigo-500 group-hover:text-indigo-400 transition-colors"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg group-hover:text-indigo-500 transition-colors">
                        {interest.name}
                      </h3>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="location">
          <motion.div variants={item}>
            <Card className="overflow-hidden border border-border/50 backdrop-blur-sm bg-card/50 group hover:shadow-md transition-all">
              <CardHeader className="bg-gradient-to-r from-transparent to-transparent group-hover:from-violet-500/10 group-hover:to-indigo-500/10 transition-all duration-300">
                <CardTitle className="group-hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {t("about.location")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-1 text-indigo-500" />
                  <span>
                    A-24/5, SaiNagar, CIDCO Mahanagar-1, Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra - 431136
                  </span>
                </p>
                <div className="aspect-video w-full rounded-md overflow-hidden border border-indigo-500/20 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2380269342513!2d75.3559!3d19.8761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98f7a6b3b0f7%3A0x9f1b3f7c8d3e2f1a!2sA-24%2F5%2C%20SaiNagar%2C%20CIDCO%20Mahanagar-1%2C%20Chhatrapati%20Sambhaji%20Nagar%2C%20Maharashtra%20431136!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>

      <motion.div
        className="bg-card rounded-lg p-8 border border-border/50 backdrop-blur-sm bg-card/50 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

        <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500">
          {t("about.journey")}
        </h2>
        <div className="relative border-l-2 border-indigo-500/50 pl-8 ml-4 space-y-10">
          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
            <h3 className="text-xl font-bold text-indigo-500">Started Learning Programming</h3>
            <p className="text-muted-foreground">Began my journey with HTML, CSS, and JavaScript</p>
            <span className="text-sm text-muted-foreground">2020</span>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
            <h3 className="text-xl font-bold text-indigo-500">Joined VIT Bhopal University</h3>
            <p className="text-muted-foreground">Started B.Tech in Computer Science</p>
            <span className="text-sm text-muted-foreground">2022</span>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
            <h3 className="text-xl font-bold text-indigo-500">First Web Development Project</h3>
            <p className="text-muted-foreground">Built my first full-stack web application</p>
            <span className="text-sm text-muted-foreground">2023</span>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
            <h3 className="text-xl font-bold text-indigo-500">Internship Experience</h3>
            <p className="text-muted-foreground">Worked as a frontend developer intern</p>
            <span className="text-sm text-muted-foreground">2024</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
