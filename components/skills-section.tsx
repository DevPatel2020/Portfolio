"use client"

import { Card } from "@/components/ui/card"
import { portfolioContent } from "@/lib/content"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Zap, Star, Code, Palette, Cpu, Wrench } from "lucide-react"

export function SkillsSection() {
  const { skills } = portfolioContent
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    const elements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2000,
    }))
    setFloatingElements(elements)
  }, [])

  const nextCategory = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveCategory((prev) => (prev + 1) % skills.categories.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevCategory = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveCategory((prev) => (prev - 1 + skills.categories.length) % skills.categories.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const currentCategory = skills.categories[activeCategory]

  const getExpertiseStyle = (expertise: string) => {
    const level = skills.expertiseLevels[expertise as keyof typeof skills.expertiseLevels]
    if (!level) return { bg: "bg-card", text: "text-card-foreground", icon: "⚡" }

    switch (expertise) {
      case "Expert":
        return { bg: "bg-primary", text: "text-primary-foreground", icon: level.icon }
      case "Advanced":
        return { bg: "bg-secondary", text: "text-secondary-foreground", icon: level.icon }
      case "Proficient":
        return { bg: "bg-accent", text: "text-accent-foreground", icon: level.icon }
      case "Learning":
        return { bg: "bg-muted", text: "text-muted-foreground", icon: level.icon }
      default:
        return { bg: "bg-card", text: "text-card-foreground", icon: level.icon }
    }
  }

  const getCategoryIcon = (index: number) => {
    const icons = [Palette, Zap, Cpu, Wrench]
    const Icon = icons[index] || Code
    return <Icon className="w-8 h-8" />
  }

  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-6 h-6 bg-primary/20 rounded-[1rem] animate-bounce"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}ms`,
              animationDuration: `${3000 + element.id * 200}ms`,
            }}
          />
        ))}

        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[3rem] rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-[2.5rem] -rotate-12 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div
              className="bg-card border-4 border-foreground px-12 py-6 rounded-[2.5rem] transform hover:rotate-1 transition-transform duration-300"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex items-center gap-4">
                {getCategoryIcon(activeCategory)}
                <span className="text-card-foreground font-black text-2xl tracking-wider">
                  {currentCategory.name.toUpperCase()}
                </span>
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-none">
            {skills.subtitle}
            <span className="text-primary"> {skills.showcase}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">{currentCategory.description}</p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-16">
          <button
            onClick={prevCategory}
            className="p-4 bg-card border-4 border-foreground rounded-[1.5rem] hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 group"
            style={{ boxShadow: "var(--shadow-md)" }}
          >
            <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
          </button>

          <div className="flex gap-3">
            {skills.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-[1rem] border-2 border-foreground transition-all duration-300 font-bold text-sm ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-card text-card-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name.split(" ")[0]}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className="p-4 bg-card border-4 border-foreground rounded-[1.5rem] hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 group"
            style={{ boxShadow: "var(--shadow-md)" }}
          >
            <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
          </button>
        </div>

        <div
          className={`transition-all duration-600 ${isAnimating ? "opacity-0 scale-95 rotate-1" : "opacity-100 scale-100 rotate-0"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentCategory.skills.map((skill, index) => {
              const expertiseStyle = getExpertiseStyle(skill.expertise)
              return (
                <Card
                  key={skill.name}
                  className="p-8 border-4 border-foreground bg-card hover:bg-primary/5 transition-all duration-500 cursor-pointer group rounded-[2.5rem] relative overflow-hidden hover:scale-105 hover:-rotate-1"
                  style={{
                    boxShadow: "var(--shadow-lg)",
                    animationDelay: `${index * 150}ms`,
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{skill.icon}</div>
                      <h3 className="text-2xl font-black text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <div
                      className={`px-3 py-1 ${expertiseStyle.bg} ${expertiseStyle.text} rounded-[1rem] border-2 border-foreground text-xs font-bold flex items-center gap-1`}
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      <span>{expertiseStyle.icon}</span>
                      {skill.expertise}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{skill.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span className="text-sm font-bold text-muted-foreground">{skill.expertise} Level</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Zap className="w-4 h-4 text-primary animate-pulse" />
                      <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
                    style={{ pointerEvents: "none" }}
                  />

                  <div
                    className={`absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full border-4 border-foreground flex items-center justify-center text-xl transform transition-all duration-500 ${
                      hoveredSkill === skill.name ? "scale-100 rotate-12" : "scale-0 rotate-0"
                    }`}
                    style={{ boxShadow: "var(--shadow-md)" }}
                  >
                    {skill.icon}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {skills.stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center border-4 border-foreground bg-card hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer group rounded-[2.5rem] relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce">
                {index === 0 ? "🚀" : index === 1 ? "⏰" : index === 2 ? "💼" : "🤖"}
              </div>
              <div className="text-xl font-black mb-2 group-hover:text-primary transition-colors duration-300">
                {stat.title}
              </div>
              <div className="text-sm text-muted-foreground mb-4">{stat.description}</div>
              <div
                className={`w-16 h-2 bg-${index === 0 ? "primary" : index === 1 ? "secondary" : index === 2 ? "accent" : "chart-3"} rounded-full mx-auto group-hover:w-20 transition-all duration-300`}
                style={{ boxShadow: "var(--shadow-sm)" }}
              />

              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
                style={{ pointerEvents: "none" }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
