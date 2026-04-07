"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GitBranch, ExternalLink, Hash } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const skills = [
  "Networking",
  "Web Development",
  "Linux",
  "Design",
  "CCTV",
  "Next.js",
]

const socialLinks = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: Hash, href: "#", label: "Twitter" },
]

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Spotlight className="-top-40 -left-40" fill="blue" />
        <Spotlight className="-bottom-40 -right-40" fill="cyan" />
        <Spotlight className="top-1/4 right-1/4" fill="white" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl ml-8 lg:ml-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="border-green-600/30 bg-green-500/10">
                <span className="relative flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for work
                </span>
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Trevor
                </span>
              </h1>
            </motion.div>

            {/* Skills Flip */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 text-lg sm:text-xl font-medium">
                <span>I build</span>
                <ContainerTextFlip words={skills} />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed max-w-lg"
            >
              I&apos;m a passionate developer and designer crafting beautiful,
              functional digital experiences. With expertise in modern web
              technologies and a keen eye for design, I transform ideas into
              reality.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture Placeholder */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl" />

              {/* Placeholder */}
              <div className="relative w-80 h-80 rounded-full ring-2 ring-primary/20 bg-muted/20 flex items-center justify-center">
                <div className="text-muted-foreground text-sm font-medium">
                  Profile Picture
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
