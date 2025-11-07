"use client"

import { Card } from "@/components/ui/card"
import { portfolioContent } from "@/lib/content"
import Image from "next/image"

export function CertificatesSection() {
  const { certificates } = portfolioContent

  if (!certificates?.list?.length) return null

  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-16 w-44 h-44 bg-primary/15 rounded-[2rem] rotate-12 animate-morphing shadow-brutal" />
        <div className="absolute bottom-16 right-16 w-40 h-40 bg-secondary/20 rounded-[2rem] -rotate-12 animate-float shadow-brutal" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/15 rounded-[2rem] animate-pulse shadow-brutal" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-card border-4 border-foreground rounded-[2rem] text-card-foreground font-black mb-8 shadow-brutal">
            {certificates.subtitle}
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-foreground mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {certificates.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            {certificates.description}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {certificates.list.map((certificate) => (
            <Card
              key={certificate.id}
              className="group rounded-[3rem] overflow-hidden border-4 border-foreground bg-card hover:-translate-y-4 hover:rotate-1 transition-all duration-700 relative"
            >
              <div className="relative h-[24rem] bg-muted overflow-hidden flex items-center justify-center">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  fill
                  className="object-contain"
                  quality={95}
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-8 h-8 bg-accent rounded-bl-[1.5rem] border-l-4 border-b-4 border-foreground" />
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary rounded-tr-[1rem] border-t-4 border-r-4 border-foreground" />

                <h3 className="text-3xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300 text-center">
                  {certificate.title}
                </h3>
                <p className="text-sm font-bold text-primary mb-4 text-center">
                  {certificate.issuer}
                  {certificate.date ? ` • ${certificate.date}` : ""}
                </p>

                <p className="text-muted-foreground leading-relaxed text-lg text-center mb-6">
                  {certificate.description}
                </p>

                {certificate.link ? (
                  <div className="flex justify-center">
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-[1.5rem] text-sm font-bold border-2 border-foreground transition-all duration-300 hover:scale-110 bg-primary/10 text-primary"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      View credential
                    </a>
                  </div>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

