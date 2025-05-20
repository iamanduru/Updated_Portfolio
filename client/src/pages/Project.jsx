
import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Project() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-6 bg-teal-950"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Heart on Sleeve"
            description="A responsive, boho-inspired blogging platform designed to empower writers and foster community. The project focuses on creating an intuitive and visually appealing interface that encourages content creation and user engagement."
            imageUrl="/src/img/case1.png"
            tags={["UI Design", "User Research", "Prototyping", "Figma"]}
            demoUrl="https://www.figma.com/design/7R2qCrxWDCuVBWSh9pkOKT/Heart-on-a-sleeve?node-id=394-961&t=BufrAxTz2bKhD8xz-1"
            codeUrl="https://iamanduru.github.io/Portfolio1/comingsoon.html"
          />

          <ProjectCard
            title="MPesa Authentication API Integration"
            description="This is a secure and robust M-Pesa authentication system designed for a film streaming platform, ensuring only verified paying users can access content while preventing unauthorized link sharing. The system integrates M-Pesa's STK Push and Paybill/Till Number functionalities for seamless payment processing and access control."
            tags={["HTML", "CSS", "Javascript", "MongoDB", "Node.js", "Express.js", "M-Pesa API"]}
            imageUrl="/src/img/mpesa.png"
            demoUrl="https://iamanduru.github.io/Portfolio1/comingsoon.html"
            codeUrl="https://github.com/iamanduru/MPesa-Auth"
          />

          <ProjectCard
            title="Uber New Features"
            description="This project reimagines the Uber experience by introducing innovative features designed to address pain points for both riders and drivers in the Kenyan market."
            tags={["UI Design", "User Research", "Prototyping"]}
            imageUrl="/src/img/uber.png"
            demoUrl="https://www.figma.com/design/lt2Hr9RQbTlIV17AEEmURk/Uber-Case-study?node-id=2-3&t=s0r991z9Pfz7BBlk-0"
            
          />

          <ProjectCard
            title="Artisan Cafe Menu"
            description="A responsive, interactive café menu built with modern web technologies."
            tags={["HTML", "CSS", "Javascript", "ES6+"]}
            imageUrl="/src/img/coffee.png"
            demoUrl=""
            codeUrl="https://github.com/iamanduru/coffee-menu"
          />

        <ProjectCard
        title="Python Project"
        description="This repository is a showcase of various Python applications and scripts that demonstrate problem-solving skills, data analysis capabilities, and automation techniques."
        tags={["Next.js", "GraphQL", "AWS S3", "Tailwind CSS"]}
        imageUrl=""
        codeUrl="https://github.com/iamanduru/PythonProjects/tree/main"
        />

        <ProjectCard
        title="Cursor Ripples"
        description="This is a lightweight and interactive cursor trail effect built using HTML5, CSS, and JavaScript. With its visually appealing particle system, this project offers both creativity and inspiration for those interested in UI/UX design and web animation."
        tags={["HTML", "CSS", "Javascript"]}
        imageUrl="/src/img/cursor.png"
        demoUrl="https://github.com/iamanduru/cursor-ripple"
        codeUrl=""
        />
        <ProjectCard
        title="Animated Sample Site"
        description="This is a lightweight and interactive cursor trail effect built using HTML5, CSS, and JavaScript. With its visually appealing particle system, this project offers both creativity and inspiration for those interested in UI/UX design and web animation."
        tags={["HTML", "CSS", "Javascript", "Animated CSS"]}
        imageUrl="/src/img/animated.png"
        demoUrl="https://github.com/iamanduru/cursor-ripple"
        codeUrl=""
        />
        </div>
      </div>
    </section>
  )
}
