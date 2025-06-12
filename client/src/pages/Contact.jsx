import React from 'react';
import { Mail, Linkedin, Github, Download, ArrowRight, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-6 bg-gradient-to-b from-teal-900 to-teal-950"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-amber-300 text-teal-800">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-teal-100 ">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-teal-100">
            Have a project in mind or want to say hello? Drop me a message and I'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-teal-900 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-100 flex items-center">
                  <span className="bg-teal-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-amber-400" />
                  </span>
                  Contact Information
                </h3>
                <p className="text-gray-200  mb-6 pl-12">
                  Feel free to reach out if you're looking for a developer, have a question, want a mentor, or just want to connect.
                </p>
              </div>

              <div className="space-y-6 pl-4">
                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-teal-700  rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-400  transition-colors">
                    <Mail className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:andurumitchelleanyango@gmail.com"
                      className="text-amber-400  hover:text-amber-600 transition-colors font-medium"
                    >
                      andurumitchelleanyango@gmail.com
                    </a>
                  </div>
                </div>


                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-400 transition-colors">
                    <Github className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a
                      href="https://github.com/iamanduru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-600 transition-colors font-medium"
                    >
                      github.com/iamanduru
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-400 transition-colors">
                    <MapPin className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-amber-400 font-medium">
                      Kigali, Rwanda || Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center mr-4 group-hover:bg-amber-400 transition-colors">
                    <Clock className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Availability</p>
                    <p className="text-amber-400 font-medium">
                      Mon-Fri: Anytime
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-emerald-600 hover:bg-amber-500 text-white hover:text-teal-100 shadow-lg transition-all">
                    <a 
                      href="../img/Anduru.pdf" 
                      download 
                      className="inline-flex items-center"
                    >
                      Download Resume
                      <Download className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-teal-900 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">
              Let's link up!
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Social Proof Section */}
        {/*<div className="mt-24 text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Trusted by Amazing Companies
          </h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
           
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="h-12 w-32 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>*/}

      </div>
    </section>
  );
}