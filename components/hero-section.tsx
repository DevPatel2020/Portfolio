"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Twitter, Sparkles, ExternalLink } from "lucide-react"
import { portfolioContent } from "@/lib/content"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { hero } = portfolioContent
  const [nameAnimation, setNameAnimation] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let index = 0
    const fullName = hero.name
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setNameAnimation(fullName.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [hero.name])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute w-40 h-40 bg-primary rounded-[2rem] opacity-80 transition-all duration-500 ease-out shadow-brutal"
          style={{
            top: `${15 + mousePosition.y * 0.02}%`,
            left: `${8 + mousePosition.x * 0.01}%`,
            transform: `rotate(${mousePosition.x * 0.1}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.3})`,
          }}
        />
        <div
          className="absolute w-32 h-32 bg-secondary rounded-[2rem] opacity-70 transition-all duration-500 shadow-brutal"
          style={{
            top: `${35 - mousePosition.y * 0.01}%`,
            right: `${15 - mousePosition.x * 0.01}%`,
            transform: `rotate(${-mousePosition.x * 0.05}deg)`,
          }}
        />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-accent rounded-[2rem] opacity-50 animate-morphing shadow-brutal" />
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-chart-2 rounded-[2rem] rotate-45 opacity-60 hover:scale-110 transition-transform duration-500 shadow-brutal" />

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary rounded-full animate-ping shadow-brutal"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <Card className="max-w-6xl w-full p-8 md:p-20 rounded-[2rem] shadow-brutal border-4 border-foreground bg-card relative overflow-hidden group hover:shadow-xl transition-all duration-500 neo-hover">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-[2rem] group-hover:scale-110 transition-transform duration-500 shadow-brutal" />
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-secondary rounded-tr-[2rem] group-hover:scale-110 transition-transform duration-500 shadow-brutal" />
        <div className="absolute top-1/2 right-8 w-6 h-6 bg-accent rounded-[1rem] animate-pulse shadow-brutal" />
        <div
          className="absolute bottom-1/3 left-8 w-4 h-4 bg-chart-3 rounded-[1rem] animate-pulse shadow-brutal"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-8 py-4 bg-muted rounded-[2rem] text-muted-foreground font-bold mb-8 border-4 border-foreground hover:scale-105 transition-transform duration-500 shadow-brutal">
                <MapPin className="w-6 h-6 mr-3 animate-bounce" />
                {hero.location}
                <Sparkles className="w-5 h-5 ml-3 text-accent" />
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  {nameAnimation}
                </span>
                <span className="animate-pulse text-accent">|</span>
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {hero.title}
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-2xl">
                {hero.description}
              </p>

              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mb-12">
                <Button
                  asChild
                  size="lg"
                  className="rounded-[2rem] bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 font-black shadow-brutal hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-rotate-2 border-4 border-foreground text-lg"
                >
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hero.email}`} target="_blank" rel="noopener noreferrer">
                    <Mail className="w-6 h-6 mr-3 animate-bounce" />
                    {portfolioContent.ui.buttons.getInTouch}
                  </a>
                </Button>

                <Button
                  onClick={scrollToProjects}
                  variant="outline"
                  size="lg"
                  className="rounded-[2rem] border-4 border-foreground text-foreground hover:bg-foreground hover:text-background px-12 py-6 font-black transition-all duration-500 hover:scale-110 hover:rotate-2 bg-background shadow-brutal hover:shadow-xl text-lg"
                >
                  {portfolioContent.ui.buttons.viewProjects}
                </Button>

                {/* Main portfolio button removed as requested */}
              </div>

              <div className="flex gap-8 justify-center lg:justify-start">
                <a
                  href={hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-card rounded-[2rem] hover:bg-muted transition-all duration-500 hover:scale-110 hover:-rotate-2 group shadow-brutal hover:shadow-xl border-4 border-foreground hover:border-primary"
                >
                  <Github className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                </a>
                <a
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-card rounded-[2rem] hover:bg-muted transition-all duration-500 hover:scale-110 hover:rotate-2 group shadow-brutal hover:shadow-xl border-4 border-foreground hover:border-primary"
                >
                  <Linkedin className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-500" />
                </a>
                {/* Twitter button removed as requested */}
              </div>
            </div>

            <div className="relative group">
              <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] relative">
                <div className="absolute inset-0 bg-primary rounded-[2rem] shadow-brutal group-hover:scale-105 transition-transform duration-500 rotate-3" />
                <div className="absolute inset-3 bg-secondary rounded-[2rem] group-hover:scale-105 transition-transform duration-500 -rotate-2 shadow-brutal" />
                <div className="absolute inset-6 bg-card rounded-[2rem] flex items-center justify-center shadow-brutal group-hover:scale-105 transition-transform duration-500 border-4 border-foreground">
                  <div className="text-8xl md:text-9xl font-black bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                    {hero.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                <div className="absolute -top-8 -right-8 w-20 h-20 bg-accent rounded-[2rem] rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-brutal border-4 border-foreground" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-chart-2 rounded-[2rem] -rotate-12 group-hover:-rotate-45 transition-transform duration-500 shadow-brutal border-4 border-foreground" />
                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-chart-3 rounded-[2rem] group-hover:scale-150 transition-transform duration-500 animate-pulse shadow-brutal" />
                <div
                  className="absolute bottom-1/4 -right-6 w-10 h-10 bg-chart-4 rounded-[2rem] group-hover:scale-150 transition-transform duration-500 animate-pulse shadow-brutal"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
