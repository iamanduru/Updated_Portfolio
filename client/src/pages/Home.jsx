// src/pages/Home.jsx
import React, { useState, useEffect } from 'react'
import AnimatedText from '../components/AnimatedText'
import Button from '../components/Button'
import {
  ArrowRight,
  Github,
  Mail,
  Code,
  Layout,
  Terminal,
  Database,
} from 'lucide-react'
import FooterNav from '../components/FooterNav'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    {
      name: 'Frontend',
      icon: <Layout className="h-6 w-6" />,
      desc: 'React, Next.js, Tailwind CSS',
    },
    {
      name: 'Backend',
      icon: <Terminal className="h-6 w-6" />,
      desc: 'Node.js, Express, Django',
    },
    {
      name: 'Development',
      icon: <Code className="h-6 w-6" />,
      desc: 'TypeScript, JavaScript, Python',
    },
    {
      name: 'Database',
      icon: <Database className="h-6 w-6" />,
      desc: 'MongoDB, PostgreSQL, Firebase',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-teal-950 overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col justify-center items-center h-screen px-6 text-center overflow-hidden">
        {/* Grid + radial overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(0,128,128,0.3), transparent 70%)',
          }}
        />

        <div className="z-10 max-w-3xl space-y-8">
          <div className="overflow-hidden pb-2">
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-100">
              <AnimatedText>Mitchelle Anduru</AnimatedText>
            </h1>
          </div>

          <div className="overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-medium text-amber-400">
              <AnimatedText delay={0.5}>
                Full-Stack Engineer & UI/UX Designer
              </AnimatedText>
            </h2>
          </div>

          <div
            className={`transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-lg md:text-xl font-light text-blue-100 max-w-xl mx-auto leading-relaxed">
              I design and build intuitive, pixel-perfect, and user-centered
              digital experiences for the web with a focus on performance and
              accessibility.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Primary */}
            <Button size="lg" variant="default" className="group relative overflow-hidden">
              <a href="/about" className="inline-flex items-center">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="absolute inset-0 bg-white/10 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Button>
            {/* Outline */}
            <Button size="lg" variant="outline" className="group relative">
              <a href="/contact" className="inline-flex items-center text-blue-100">
                Say Hello
                <span className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-md border border-blue-100/50 transition-opacity duration-300" />
              </a>
            </Button>
          </div>

          <div
            className={`flex justify-center gap-8 mt-10 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            {[Github, Mail].map((Icon, i) => {
              const href =
                Icon === Github
                  ? 'https://github.com/iamanduru'
                  : 'mailto:andurumitchelleanyango@gmail.com'
              return (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    Icon === Github
                      ? 'GitHub'
                      : 'Email'
                  }
                  className="text-teal-600 hover:text-amber-400 transform transition-all duration-300 hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>

        <a
          href="#skills"
          className={`absolute bottom-8 flex text-teal-500 hover:text-blue-200 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Scroll to Skills"
        >
          <div className="animate-bounce p-2 bg-teal-900/50 rounded-full border border-teal-500/30">
            <ArrowRight className="rotate-90" size={24} />
          </div>
        </a>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-teal-900/90">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">
              My Toolkit
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto">
              I specialize in these technologies to create seamless digital
              experiences. Just the tip of the iceberg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-teal-800/50 rounded-lg p-6 border border-teal-700/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-800/30"
              >
                <div className="bg-teal-700/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-amber-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium text-blue-100 mb-2">
                  {skill.name}
                </h3>
                <p className="text-blue-100/70">{skill.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="group">
              <a href="/about" className="inline-flex items-center text-blue-100">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      
    </main>

  )
}


