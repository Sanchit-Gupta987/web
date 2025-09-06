"use client"

import { useState, useEffect } from "react"
import Link from "next/link" // Added Next.js Link import for proper navigation
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Mail,
  Phone,
  Code,
  Trophy,
  Car,
  BookOpen,
  Gamepad2,
  ChefHat,
  Github,
  Linkedin,
  Download,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "skills", "interests"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

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

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "C++", "Embedded C (Arduino)", "HTML", "CSS", "SQL"],
    "Frameworks & Technologies": ["React", "Django", "Langchain", "Full-Stack Development"],
    Specializations: [
      "Machine Learning",
      "Data Analysis",
      "Computer Security",
      "Software Engineering",
      "AI Development",
    ],
  }

  const interests = [
    {
      icon: Car,
      title: "Formula 1",
      description:
        'Passionate about F1 racing, following the technical innovations and strategic elements of the sport. It\'s Hammertime!',
      color: "text-red-500",
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Avid reader of mystery, action and sci-fi novels, which keeps me guessing on what's going to happen next and lets me create my own movies in my head.",
      color: "text-blue-500",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Enjoy fast paced team games that requires thinking on the spot, promotes teamwork and challenges creativity.",
      color: "text-green-500",
    },
    {
      icon: ChefHat,
      title: "Baking",
      description: "Love experimenting and perfecting my recipes, and devouring the final product ofcourse!",
      color: "text-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">Sanchit Gupta</h1>
            <div className="hidden md:flex space-x-6">
              {["hero", "about", "education", "skills", "interests"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${activeSection === section ? "text-primary font-medium" : "text-muted-foreground"
                    }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
              <Link
                href="/experience"
                className="capitalize transition-colors hover:text-primary text-muted-foreground"
              >
                Experience
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden code-background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <div className="relative inline-block">
              <img
                src="/images/profile.png"
                alt="Sanchit Gupta Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto animate-pulse-glow border-4 border-primary/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
          </div>

          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sanchit Gupta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science student with strong mathematical foundation and proven analytical problem-solving skills.
              Experienced in Python and Java development with demonstrated ability to automate complex data analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Cleveland, OH 44106</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>sanchit.private@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (216) 301-4334</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="/Sanchit_Gupta_Resume.pdf" download>
              <Button size="lg" className="animate-glow">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
            <a href="https://github.com/Sanchit-Gupta987" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/sanchit-gupta-722146272/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30 code-background">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Computer Science student at Case Western Reserve University with a strong foundation
                  in mathematics and analytical problem-solving. My experience spans across various domains including
                  software development, data analysis, AI implementation, and business development.
                </p>
                <p className="text-lg leading-relaxed">
                  With a current GPA of 3.78 and Dean's High Honors recognition, I've demonstrated excellence in both
                  theoretical knowledge and practical application. My internship experiences have allowed me to work
                  with cutting-edge technologies and contribute to meaningful projects that drive real business impact.
                </p>
                <p className="text-lg leading-relaxed">
                 I also love drinking coffee and listening to pop music.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">AI Engineer</Badge>
                  <Badge variant="secondary">Full-Stack Developer</Badge>
                  <Badge variant="secondary">Data Analyst</Badge>
                  <Badge variant="secondary">Software Engineer</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Highlights Section */}
      <section id="experience" className="py-20 code-background">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Experience Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">Recent Positions</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Software Developer Intern</p>
                        <p className="text-sm text-muted-foreground">GRAYLINX • 2025</p>
                      </div>
                      <div>
                        <p className="font-medium">Real Estate Investment Intern</p>
                        <p className="text-sm text-muted-foreground">REHABIT HOMES • 2024</p>
                      </div>
                      <div>
                        <p className="font-medium">Implementation Intern</p>
                        <p className="text-sm text-muted-foreground">ELTROPY • 2023</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">Key Achievements</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Automation of report generation.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Fine-Tuning and Training of AI chatbot.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Analyzed business viability of properties and investments.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">Cleaned up and Optimized Credit-Union database</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Link href="/experience">
                    <Button size="lg" className="animate-glow">
                      View Detailed Experience
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-muted/30 code-background">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-primary">Case Western Reserve University</CardTitle>
                    <CardDescription className="text-lg">
                      Bachelor of Science, Major in Computer Science; Minor in Economics
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    September 2022 - May 2026
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="font-medium">Current GPA: 3.78</span>
                  </div>
                  <Badge variant="secondary">Dean's High Honors Certificate</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Quantitative Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Linear Algebra",
                      "Discrete Mathematics",
                      "Calculus",
                      "Data Visualization",
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Programming Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Full-Stack Development", "Computer Security", "Software Engineering", "Algorithms", "Data Structures", "Artificial Intelligence", "Machine Learning"].map((course) => (
                        <Badge key={course} variant="outline">
                          {course}
                        </Badge>
                      ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Economics Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Microeconomics", "Macroeconomics", "Topics in Monetary Policy", "Data Visualization", "Computational Economics"].map(
                      (course) => (
                        <Badge key={course} variant="outline">
                          {course}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Other Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Reading and Writing across disciplines",
                      "Intro to chemistry",
                      "Intermediate Physics",
                      "Indoor Soccer"
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 code-background">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Technical Skills</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Additional Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Forage / JP Morgan Course on Quant Research</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    HousePlacer School project with a marketplace dashboard for students to view near-campus properties
                    and agents to add them
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Python ML projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20 bg-muted/30 code-background">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Personal Interests</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-full bg-muted ${interest.color}`}>
                    <interest.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{interest.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">Let's Connect</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow
            tech enthusiasts.
          </p>
          <div className="flex gap-4 justify-center">
            <div className="flex gap-4">
              {/* Primary mailto */}
              <a href="mailto:sanchit.private@gmail.com">
                <Button>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </a>

              {/* Gmail fallback */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchit.private@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Gmail me
                </Button>
              </a>
            </div>

            <a href="https://github.com/Sanchit-Gupta987" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/sanchit-gupta-722146272/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">© 2025 Sanchit Gupta</p>
            <p className="text-xs text-muted-foreground/70 self-end">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
