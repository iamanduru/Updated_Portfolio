import React from 'react';

// Create SkillBadge component inline since it's commented out in original
const SkillBadge = ({ name, icon }) => {
  return (
    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-red-900 to-red-800 text-white font-medium text-sm flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      {icon && <span>{icon}</span>}
      {name}
    </div>
  );
};

export default function AboutPage() {
  
  const skills = {
    fullstack: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js"],
    languages: ["Java", "Python", "JavaScript", "PL/SQL"],
    database: ["MySQL", "MongoDB", "Oracle", "Prisma"],
    cloudDevOps: ["AWS"],
    uiUx: ["Figma", "Shadcn UI"],
    testing: ["Manual Testing", "Test Case Design", "Bug Tracking"]
  };

  return (
    <section
      id="about"
      className="py-20 px-4 md:px-6 bg-gradient-to-br from-teal-950 to-teal-900 text-white"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white relative">
          <span className="relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-amber-400 transform translate-y-2"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-400 opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-amber-400 opacity-70"></div>
            
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-700 to-teal-800 transform rotate-3" />
            <img
              src="/src/img/blank.png"
              alt="Anduru - Fullstack Engineer"
              className=" w-full h-auto
        object-contain
        rounded-xl
        transform -rotate-3
        transition-transform duration-500 ease-in-out
        hover:rotate-0"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">
              <span className="border-b-2 border-amber-400 pb-1">Who I Am</span>
            </h3>
            <p className="text-gray-200 mb-6">
            I’m a Full-Stack Engineer and a UI/UX Designer passionate about building intuitive, user-first digital experiences. With skills in Figma, React, Tailwind CSS, and Node.js, I blend clean design with efficient code to create products that just make sense.
            </p>
            <p className="text-gray-200 mb-6">
            I also mentor aspiring techies—guiding beginners and upskillers alike in problem-solving and critical thinking. Outside of work, I host a podcast on mental health and self-awareness, lift heavy things at the gym, and constantly experiment with time management (still a work in progress).
            </p>
            <p className="text-gray-200 mb-8">
            Looking to collaborate with someone who’s user-obsessed, design-driven, and refreshingly real?
            </p>
            
            <h3 className="text-2xl font-semibold mb-6 text-amber-400">
              <span className="border-b-2 border-amber-400 pb-1">My Skills</span>
            </h3>
            
            {/* Full-Stack Development */}
            <div className="mb-6">
              <h4 className="text-lg text-teal-200 mb-3">Full-Stack Development</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.fullstack.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-lg text-teal-200 mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.languages.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
            
            {/* Database */}
            <div className="mb-6">
              <h4 className="text-lg text-teal-200 mb-3">Database</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.database.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
            
            {/* Cloud & DevOps */}
            <div className="mb-6">
              <h4 className="text-lg text-teal-200 mb-3">Cloud & DevOps</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.cloudDevOps.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
            
            {/* UI/UX Design */}
            <div className="mb-6">
              <h4 className="text-lg text-teal-200 mb-3">UI/UX Design</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.uiUx.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
            
            {/* Quality Assurance & Testing */}
            <div>
              <h4 className="text-lg text-teal-200 mb-3">Quality Assurance & Testing</h4>
              <div className="flex flex-wrap gap-2">
                {skills.testing.map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Journey Timeline - Creative Addition */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-amber-400">
            <span className="border-b-2 border-amber-400 pb-1">My Journey</span>
          </h3>
          <p className="text-sm md:text-xl font-light text-blue-100 max-w-xl mx-auto leading-relaxed text-center mb-6">
          A raw and simple story—not polished for perfection, but a reflection of someone imperfect who keeps striving.
            </p>
          
          <div className="relative">
           
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-700 to-red-800"></div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item 1 */}
              <div className="md:col-start-1 md:text-right relative pb-10">
                <div className="absolute right-0 md:right-[-10px] top-0 w-5 h-5 rounded-full bg-amber-400 transform md:translate-x-1/2 z-10"></div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">2020</h4>
                <p className="text-gray-200">I began my tech journey with an online bootcamp by PwaniTeknowgalz, where I was introduced to Flutter and MIT App Inventor.</p>
              </div>
              <div className="md:col-start-2 invisible md:visible"></div>
              
              {/* Item 2 */}
              <div className="md:col-start-1 invisible md:visible"></div>
              <div className="md:col-start-2 relative pb-10">
                <div className="absolute left-0 md:left-[-10px] top-0 w-5 h-5 rounded-full bg-amber-400 transform md:translate-x-[-50%] z-10"></div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">2021</h4>
                <p className="text-gray-200">I started learning HTML, CSS, and JavaScript seriously. I practiced a lot and became comfortable with front-end development. In January, I joined Adventist University of Central Africa (AUCA) to pursue my degree in Software Engineering</p>
              </div>
              
              {/* Item 3 */}
              <div className="md:col-start-1 md:text-right relative pb-10">
                <div className="absolute right-0 md:right-[-10px] top-0 w-5 h-5 rounded-full bg-amber-400 transform md:translate-x-1/2 z-10"></div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">2022</h4>
                <p className="text-gray-200">I focused on mastering React and Tailwind CSS. At the same time, I struggled with imposter syndrome and depression. Life hit hard, and it showed.</p>
              </div>
              <div className="md:col-start-2 invisible md:visible"></div>
              
              {/* Item 4 */}
              <div className="md:col-start-1 invisible md:visible"></div>
              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:left-[-10px] top-0 w-5 h-5 rounded-full bg-amber-400 transform md:translate-x-[-50%] z-10"></div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">2023</h4>
                <p className="text-gray-200">In June, I volunteered with SOMTO, a Norway-based organization with projects in Kenya. I:
                • Organized and facilitated a free eye check-up camp in Kisumu by working with medical professionals and managing logistics.
                • Trained young girls in Kibra on HTML, CSS, and JavaScript to help them gain tech skills.
                I still volunteer with SOMTO whenever they need me to train the girls.

                Later that year, I began regaining confidence in tech—not just as a developer writing code but as an engineer solving problems.</p>
                              </div>

              <div className="md:col-start-1 md:text-right relative pb-10">
                <div className="absolute right-0 md:right-[-10px] top-0 w-5 h-5 rounded-full bg-amber-400 transform md:translate-x-1/2 z-10"></div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">2024</h4>
                <p className="text-gray-200">Built several minor projects (see Projects section).
                  Interned at SpiderBit Rwanda as a Web Developer, creating responsive websites.
                  Started a Product Design course at Moringa School, focusing on user-centered design.
                  Also completed a Cisco networking course and worked on:
                  • MPesa API integration
                  • Blogging platform
                  • Uber-like app (team project)
                  • Construction platform
                  • Animated sample site</p>
              </div>
              <div className="md:col-start-2 invisible md:visible"></div>

              <div className="md:col-start-1 invisible md:visible"></div>
              <div className="md:col-start-2 relative">
                <div className="absolute left-0 md:left-[-10px] top-0 w-5 h-5 rounded-full bg-amber-400 transform md:translate-x-[-50%] z-10"></div>
                <h4 className="text-lg font-semibold text-amber-300 mb-2">2025</h4>
                <p className="text-gray-200">I built multiple authentication systems and hands-on projects—some forgotten in the hustle, but all meaningful.
                  At VisionFund Rwanda, I interned as a developer, where I:
                  • Migrated a suggestion box from MongoDB to MySQL (Prisma)
                  • Set up authentication with Node and Express
                  • Integrated React and Tailwind on the frontend
                  • Learned IT support by configuring laptops for internal use

                  I'm currently developing an inventory system.
                  I also launched a mentorship program to guide young techies into various fields—one of my most fulfilling efforts yet.</p>
                              </div>
              
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-amber-400">Let's Build Something Amazing Together</h3>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-teal-900 font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <a href="/contact" className="inline-flex items-center text-blue-100">
          Get In Touch</a>
          </button>
        </div>
      </div>
    </section>
  );
}