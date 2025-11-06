"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Heart, Zap, Coffee } from "lucide-react"
import { portfolioContent } from "@/lib/content"
import { useState } from "react"

export function Footer() {
  const { hero, ui } = portfolioContent
  const [isHovered, setIsHovered] = useState(false)

  return (
    <footer className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-12 left-12 w-48 h-48 bg-primary/20 rounded-[2rem] opacity-60 rotate-12 animate-float shadow-brutal" />
        <div className="absolute bottom-12 right-12 w-56 h-56 bg-secondary/20 rounded-[2rem] opacity-50 animate-pulse shadow-brutal" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent/20 rounded-[2rem] rotate-45 animate-morphing shadow-brutal" />

        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-[1rem] shadow-brutal" />
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Card
          className="p-16 md:p-20 rounded-[2rem] shadow-brutal border-4 border-foreground bg-card relative overflow-hidden group hover:shadow-xl transition-all duration-500 neo-hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute top-0 left-0 w-36 h-36 bg-primary rounded-br-[2rem] group-hover:scale-110 transition-transform duration-500 shadow-brutal" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-tl-[2rem] group-hover:scale-110 transition-transform duration-500 shadow-brutal" />

          <div className="absolute inset-0 bg-muted/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

          <div className="relative z-10">
            <div className="mb-12">
              <div className="inline-flex items-center px-8 py-4 bg-muted rounded-[2rem] text-muted-foreground font-black mb-8 border-4 border-foreground shadow-brutal">
                <Zap className="w-6 h-6 mr-3 animate-bounce text-accent" />
                {ui.footer.title}
                <Heart className="w-6 h-6 ml-3 text-destructive animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                {ui.footer.cta}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                {ui.footer.description}
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-[2rem] bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-8 font-black text-xl shadow-brutal hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-rotate-2 mb-16 border-4 border-foreground"
            >
              <a href={`mailto:${hero.email}`}>
                <Mail className="w-7 h-7 mr-4 animate-bounce" />
                {ui.buttons.startConversation}
                <Zap className="w-7 h-7 ml-4" />
              </a>
            </Button>

            <div className="flex gap-8 justify-center mb-16">
              <a
                href={hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-8 bg-card rounded-[2rem] hover:bg-muted transition-all duration-500 hover:scale-110 hover:-rotate-2 border-4 border-foreground hover:border-primary shadow-brutal hover:shadow-xl"
              >
                <Github className="w-10 h-10 text-foreground group-hover/social:text-primary transition-colors duration-500" />
              </a>
              <a
                href={hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social p-8 bg-card rounded-[2rem] hover:bg-muted transition-all duration-500 hover:scale-110 hover:rotate-2 border-4 border-foreground hover:border-primary shadow-brutal hover:shadow-xl"
              >
                <Linkedin className="w-10 h-10 text-foreground group-hover/social:text-primary transition-colors duration-500" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-10">
              {ui.footer.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-black text-primary mb-2 flex items-center justify-center">
                    {stat.value === "☕" ? (
                      <Coffee className="w-8 h-8" />
                    ) : stat.value === "❤️" ? (
                      <Heart className="w-8 h-8 animate-pulse" />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground font-bold bg-muted px-3 py-1 rounded-[2rem] border-4 border-foreground shadow-brutal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`absolute top-1/4 right-10 w-6 h-6 bg-accent rounded-[2rem] transition-all duration-500 shadow-brutal border-4 border-foreground ${
              isHovered ? "animate-ping" : "animate-pulse"
            }`}
          />
          <div
            className={`absolute bottom-1/3 left-10 w-4 h-4 bg-chart-2 rounded-[2rem] transition-all duration-500 shadow-brutal border-4 border-foreground ${
              isHovered ? "animate-ping" : "animate-pulse"
            }`}
            style={{ animationDelay: "0.5s" }}
          />
        </Card>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-medium flex items-center justify-center gap-3 text-lg">
            © 2024 {hero.name}. {ui.footer.copyright}
            <Heart className="w-5 h-5 text-destructive animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}
