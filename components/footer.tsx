"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur-sm py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 w-8 relative">
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
          </div>
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500">
            Himanshu Jha
          </span>
        </motion.div>

        <motion.div
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          &copy; {currentYear} Himanshu Jha. {t("footer.rights")}.
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="https://github.com/Himanshu2615"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-indigo-500 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/himanshujha2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-indigo-500 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:himanshujha2615@gmail.com"
            className="text-muted-foreground hover:text-indigo-500 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}
