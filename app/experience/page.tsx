"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  const experiences = [
    {
      company: "GRAYLINX",
      position: "Software Developer Intern (HVAC Project)",
      location: "Bangalore, India",
      period: "May 2025 - August 2025",
      achievements: [
        "Developed Python-based analytics tool processing TB's of live-time HVAC data, automating report generation and reducing manual analysis time by 90%",
        "Implemented LLM-driven query optimization, improving data retrieval speed and enabling real-time insights",
        "Delivered a framework for consistent weekly/monthly reports with 90%+ accuracy, supporting data-driven decision making",
      ],
    },
    {
      company: "REHABIT HOMES",
      position: "Real Estate Investment Intern",
      location: "Seattle, Washington",
      period: "May 2024 - June 2024",
      achievements: [
        "Shadowed many Real Estate Individuals including Leka Devta",
        "Evaluated fixer-upper opportunities for investment with heaton dainard",
        "Worked through underwriting hard money loans from Certain Lending",
        "Assisted in creating an Investor's information document for Spartan Investment Group",
      ],
    },
    {
      company: "ELTROPY",
      position: "Implementation Intern",
      location: "San Jose, California",
      period: "June 2023 - August 2023",
      achievements: [
        "Trained AI chatbot on 1000s of intents, achieving 70% accuracy improvement in customer query resolution",
        "Optimized database operations for 25,000+ users, reducing query time by 50%",
        "Analyzed and categorized 140 potential credit union clients, contributing to 5% pipeline growth",
      ],
    },
    {
      company: "SASKEN TECHNOLOGIES",
      position: "Programmer, Intern, Resource management",
      location: "Bangalore, India",
      period: "June 2022 - August 2022",
      achievements: [
        "Developed UI for a resource management website using HTML, CSS, JavaScript, Django, and Jinja",
        "Integrated front-end UI with existing backend systems",
      ],
    },
    {
      company: "INUIT FOOD SCIENCES",
      position: "Intern, Business Development",
      location: "Bangalore, India",
      period: "May 2021 - July 2021",
      achievements: [
        "Analyzed strawberry business opportunities using the 5 C's of marketing framework and recommended strategic decisions",
        "Developed a framework for evaluating future business opportunities",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Sanchit Gupta
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Experience Section */}
      <section className="py-20 mt-16 code-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A detailed look at my professional journey across various industries and technologies
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-primary">{exp.company}</CardTitle>
                      <CardDescription className="text-lg font-medium mt-1">{exp.position}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
