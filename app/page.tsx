"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Palette, Rocket, GitBranch, ExternalLink, Hash, Mail, Phone } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { ProjectsSection } from "@/components/ProjectsSection"

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
  const rootRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  })

  const commitGlowPosition = useCallback(() => {
    const el = rootRef.current
    if (!el) return
    const { x, y, active } = lastRef.current
    el.style.setProperty("--glow-x", `${x}px`)
    el.style.setProperty("--glow-y", `${y}px`)
    el.style.setProperty("--glow-a", active ? "1" : "0")
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      lastRef.current = { x: e.clientX, y: e.clientY, active: true }
      if (rafRef.current != null) return
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        commitGlowPosition()
      })
    },
    [commitGlowPosition],
  )

  const handleMouseLeave = useCallback(() => {
    lastRef.current = { ...lastRef.current, active: false }
    if (rafRef.current != null) return
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null
      commitGlowPosition()
    })
  }, [commitGlowPosition])

  return (
    <>
      <div ref={rootRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="pointer-events-none fixed inset-0 z-50 [opacity:var(--glow-a)] transition-opacity duration-200 bg-[radial-gradient(230px_circle_at_var(--glow-x)_var(--glow-y),rgba(168,85,247,.13),transparent_68%)]" />

        <main className="relative min-h-screen flex items-start md:items-center justify-center overflow-x-hidden px-4 py-10 md:py-0 sm:px-6 lg:px-8">
          {/* Background */}
          <div className="absolute inset-0 z-0">
          <Spotlight className="-top-40 -left-40" fill="blue" />
          <Spotlight className="-bottom-40 -right-40" fill="cyan" />
          <Spotlight className="top-1/4 right-1/4" fill="white" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Left Column */}
              <motion.div className="space-y-8 md:justify-self-center" variants={itemVariants}>
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
                  <span>I do</span>
                  <ContainerTextFlip
                    words={skills}
                    className="pt-1 pb-1 text-xl sm:text-2xl md:text-2xl"
                    textClassName="leading-none"
                  />
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
              </motion.div>

              {/* Contact Details */}
              <motion.div variants={itemVariants} className="flex flex-col gap-3">
                <a
                  href="mailto:trevordzombo@gmail.com"
                  className="group inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors w-fit"
                >
                  <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-base sm:text-lg">trevordzombo@gmail.com</span>
                </a>

                <a
                  href="tel:+254792267516"
                  className="group inline-flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors w-fit"
                >
                  <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-base sm:text-lg">+254 792 267516</span>
                </a>
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

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full max-w-[550px] aspect-[692/900] mx-auto order-1 lg:order-2"
            >
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-95" />

              {/* Online badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-background/90 text-foreground backdrop-blur-sm border border-border/50 shadow-sm flex items-center gap-1.5 px-2 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium">Online</span>
                </Badge>
              </div>

              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/40 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Profile Photo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 550px, 90vw"
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  style={{ objectPosition: "center -100px" }}
                />
              </div>
              </motion.div>
            </motion.div>
          </div>
        </main>

        <motion.section
          id="about"
          className="py-24 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-2 mb-16 rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div>
                <div className="text-xl font-bold">Trevor</div>
                <div className="text-muted-foreground text-sm">Developer & Designer</div>

                <div className="grid grid-cols-3 gap-2 mt-4">
                  <Card className="text-center p-3 hover:border-primary/50 transition-colors cursor-default">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Projects Done</div>
                  </Card>
                  <Card className="text-center p-3 hover:border-primary/50 transition-colors cursor-default">
                    <div className="text-2xl font-bold text-primary">1+</div>
                    <div className="text-xs text-muted-foreground">Years Learning</div>
                  </Card>
                  <Card className="text-center p-3 hover:border-primary/50 transition-colors cursor-default">
                    <div className="text-2xl font-bold text-primary">∞</div>
                    <div className="text-xs text-muted-foreground">Curiosity</div>
                  </Card>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <Separator className="my-6" />
                <h3 className="text-2xl font-bold mb-4">What I Love</h3>

                <BentoGrid className="max-w-4xl mx-auto">
                  <BentoGridItem
                    header={
                      <div className="p-2 bg-muted/50 rounded-lg w-fit">
                        <Monitor className="text-primary" size={28} />
                      </div>
                    }
                    title="Coding"
                    description="I love writing clean code and solving real problems"
                  />
                  <BentoGridItem
                    header={
                      <div className="p-2 bg-muted/50 rounded-lg w-fit">
                        <Palette className="text-primary" size={28} />
                      </div>
                    }
                    title="Design"
                    description="Creating beautiful visuals with Canva and CSS"
                  />
                  <BentoGridItem
                    header={
                      <div className="p-2 bg-muted/50 rounded-lg w-fit">
                        <Rocket className="text-primary" size={28} />
                      </div>
                    }
                    title="Building Things"
                    description="Bringing ideas to life with technology"
                  />
                </BentoGrid>
              </div>
            </div>
          </div>
        </motion.section>

        <ProjectsSection />
      </div>
    </>
  )
}
