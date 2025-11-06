"use client"

import { Card } from "@/components/ui/card"
import { portfolioContent } from "@/lib/content"
import { Building, Calendar, Briefcase } from "lucide-react"
import { useState } from "react"

export function ExperienceSection() {
  const { experience } = portfolioContent
  const [hoveredExp, setHoveredExp] = useState<number | null>(null)

  return (
    <section className="py-32 px-4 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/15 rounded-[2rem] translate-x-36 -translate-y-36 animate-morphing shadow-brutal" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-secondary/20 rounded-[2rem] -translate-x-28 translate-y-28 rotate-45 animate-float shadow-brutal" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent/25 rounded-[2rem] rotate-12 animate-pulse shadow-brutal" />

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-[1rem] shadow-brutal" />
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 bg-background rounded-[2rem] text-foreground font-black mb-8 border-4 border-foreground shadow-brutal">
            <Briefcase className="w-6 h-6 mr-3 animate-bounce text-primary" />
            Professional Journey
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
            {experience.title}
          </h2>
          <p className="text-2xl text-muted-foreground font-medium">{experience.subtitle}</p>
        </div>

        <div className="relative">
          <div className="absolute left-10 top-0 bottom-0 w-2 bg-gradient-to-b from-primary via-accent to-secondary rounded-full shadow-brutal border border-foreground" />

          <div className="space-y-16">
            {experience.list.map((exp, index) => (
              <Card
                key={index}
                className="ml-24 p-10 rounded-[2rem] shadow-brutal border-4 border-foreground bg-card hover:bg-background transition-all duration-500 relative overflow-hidden group hover:-translate-y-2 neo-hover"
                onMouseEnter={() => setHoveredExp(index)}
                onMouseLeave={() => setHoveredExp(null)}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="absolute -left-[6.5rem] top-12 w-8 h-8 bg-primary rounded-[2rem] border-4 border-foreground shadow-brutal group-hover:scale-125 transition-transform duration-500" />

                <div className="absolute inset-0 bg-muted/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                <div className="absolute top-8 right-8 w-16 h-16 bg-secondary rounded-[2rem] flex items-center justify-center shadow-brutal group-hover:rotate-12 transition-transform duration-500 border-4 border-foreground">
                  <Building className="w-8 h-8 text-secondary-foreground" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-4xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                        {exp.position}
                      </h3>
                      <h4 className="text-2xl font-bold text-primary mb-6 flex items-center">
                        <Building className="w-6 h-6 mr-3" />
                        {exp.company}
                      </h4>
                    </div>
                    <div className="lg:ml-8">
                      <div className="inline-flex items-center px-6 py-3 bg-accent rounded-[2rem] text-accent-foreground font-bold border-4 border-foreground shadow-brutal">
                        <Calendar className="w-5 h-5 mr-3" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg font-medium pr-20">{exp.description}</p>

                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <div
                      className={`w-4 h-4 rounded-[1rem] transition-all duration-500 shadow-brutal border border-foreground ${
                        hoveredExp === index ? "bg-primary scale-125" : "bg-primary/50"
                      }`}
                    />
                    <div
                      className={`w-3 h-3 rounded-[1rem] transition-all duration-500 shadow-brutal border border-foreground ${
                        hoveredExp === index ? "bg-secondary scale-125" : "bg-secondary/50"
                      }`}
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className={`w-2 h-2 rounded-[1rem] transition-all duration-500 shadow-brutal border border-foreground ${
                        hoveredExp === index ? "bg-accent scale-125" : "bg-accent/50"
                      }`}
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
