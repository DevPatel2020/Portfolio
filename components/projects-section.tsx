"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Zap } from "lucide-react"
import { portfolioContent } from "@/lib/content"
import Image from "next/image"
import { useState } from "react"

export function ProjectsSection() {
  const { projects, ui } = portfolioContent
  const featuredProjects = projects.list
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            <div
              className={`w-6 h-6 rounded-full opacity-20 ${
                i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-secondary" : "bg-accent"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative">
          <div
            className="inline-flex items-center px-8 py-4 bg-card border-4 border-foreground rounded-[2rem] text-card-foreground font-black mb-8"
            style={{ boxShadow: "var(--shadow-md)" }}
          >
            <Star className="w-6 h-6 mr-3 text-primary animate-spin" />
            {projects.title}
            <Zap className="w-6 h-6 ml-3 text-accent" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {projects.subtitle}
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">{projects.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group rounded-[3rem] overflow-hidden border-4 border-foreground bg-card hover:-translate-y-4 hover:rotate-1 transition-all duration-700 relative"
              style={{ boxShadow: "var(--shadow-xl)" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="absolute top-6 left-6 z-20 w-12 h-12 bg-primary rounded-[1.5rem] flex items-center justify-center border-4 border-foreground"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <span className="text-primary-foreground font-black text-lg">0{index + 1}</span>
              </div>

              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-wrap gap-3 max-w-xs">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-card border-2 border-foreground text-card-foreground rounded-[1rem] text-sm font-bold animate-bounce"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          boxShadow: "var(--shadow-sm)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-8 h-8 bg-accent rounded-bl-[1.5rem] border-l-4 border-b-4 border-foreground" />
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary rounded-tr-[1rem] border-t-4 border-r-4 border-foreground" />

                <h3 className="text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-[1.5rem] text-sm font-bold border-2 border-foreground transition-all duration-300 hover:scale-110 ${
                        i % 3 === 0
                          ? "bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                          : i % 3 === 1
                            ? "bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                            : "bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
                      }`}
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-[2rem] border-4 border-foreground text-foreground hover:bg-foreground hover:text-background font-black transition-all duration-300 hover:scale-110 hover:rotate-2 bg-card px-8"
                    style={{ boxShadow: "var(--shadow-lg)" }}
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      {ui.buttons.code}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  )
}
