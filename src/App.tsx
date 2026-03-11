/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Database, 
  Layout, 
  Server,
  Download,
  Menu,
  X
} from 'lucide-react';
import { cn } from './lib/utils';
import TechStack from './components/TechStack';

const projects = [
  {
    id: '01',
    title: 'Solid Starters',
    category: 'Full Stack SaaS',
    description: 'A comprehensive boilerplate for modern web applications with built-in auth and payments.',
    tech: ['Next.js', 'Prisma', 'Stripe'],
    image: 'https://picsum.photos/seed/solid/800/600'
  },
  {
    id: '02',
    title: 'AI Content Engine',
    category: 'AI / ML',
    description: 'Automated content generation platform using Gemini Pro for marketing teams.',
    tech: ['React', 'Gemini API', 'Node.js'],
    image: 'https://picsum.photos/seed/ai/800/600'
  },
  {
    id: '03',
    title: 'Bond Cancellation',
    category: 'Fintech',
    description: 'Streamlined process for property bond cancellations with automated legal document generation.',
    tech: ['Angular', 'NestJS', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/bond/800/600'
  }
];

const experiences = [
  {
    year: '2020',
    role: 'Full Stack Developer',
    company: 'Itishas',
    description: 'Developed scalable web applications using React and Node.js.'
  },
  {
    year: '2021',
    role: 'Senior Full Stack Developer',
    company: 'Monster Max Life Insurance',
    description: 'Led the development of core insurance platforms and microservices.'
  },
  {
    year: 'NOW',
    role: 'Full Stack Developer',
    company: 'Logic Loop',
    description: 'Building next-gen enterprise solutions and AI-integrated tools.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-medium tracking-widest uppercase text-white/60"
        >
          rajeshchityal@gmail.com
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Work', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['About', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-bold uppercase tracking-tighter"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <motion.div 
            style={{ opacity, scale }}
            className="relative z-10 text-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase glass rounded-full"
            >
              👋 Welcome
            </motion.span>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-left"
              >
                <p className="text-xs font-medium text-white/40 mb-2">Hello! I'm</p>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                  Rajesh <br /> Chityal
                </h1>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                className="relative w-48 h-48 md:w-64 md:h-64"
              >
                <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full" />
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh&backgroundColor=b6e3f4&style=circle" 
                  alt="Rajesh Chityal"
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-right"
              >
                <p className="text-xs font-medium text-white/40 mb-2">A Full Stack</p>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none text-emerald-500">
                  Dev <br /> Engineer
                </h2>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-6"
            >
              <button className="px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300">
                Resume <Download className="inline-block ml-2 w-4 h-4" />
              </button>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              </div>
            </motion.div>
          </motion.div>

          {/* Background Text */}
          <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.03]">
            <motion.p 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="text-[15vw] font-black uppercase"
            >
              Full Stack Developer • Software Engineer • UI Designer • Problem Solver • 
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-6">About Me</h3>
              <p className="text-2xl md:text-3xl font-medium leading-tight text-white/80">
                Full Stack Developer with 4+ years of experience building scalable web applications. 
                Skilled in React, Next.js, Node.js, and cloud architecture. Passionate about creating 
                high-performance, production-ready solutions from concept to deployment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-3xl">
                <Layout className="w-8 h-8 text-emerald-500 mb-4" />
                <h4 className="text-sm font-bold uppercase mb-2">Frontend</h4>
                <p className="text-xs text-white/40">Crafting pixel-perfect, responsive user interfaces.</p>
              </div>
              <div className="glass p-6 rounded-3xl">
                <Server className="w-8 h-8 text-emerald-500 mb-4" />
                <h4 className="text-sm font-bold uppercase mb-2">Backend</h4>
                <p className="text-xs text-white/40">Building robust APIs and scalable microservices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-12">Career & Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center group"
                >
                  <div className="text-4xl md:text-6xl font-black text-white/10 group-hover:text-emerald-500/20 transition-colors">
                    {exp.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold uppercase">{exp.role}</h4>
                    <p className="text-emerald-500 text-sm font-medium mb-2">{exp.company}</p>
                    <p className="text-white/40 text-sm max-w-2xl">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-12">My Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-black rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="p-3 bg-white text-black rounded-full hover:bg-emerald-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{project.id} — {project.category}</span>
                <h4 className="text-xl font-bold uppercase mt-2 group-hover:text-emerald-500 transition-colors">{project.title}</h4>
                <p className="text-sm text-white/40 mt-2">{project.description}</p>
                <div className="flex gap-2 mt-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 glass rounded-md text-white/60">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 overflow-hidden">
          <TechStack />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-24 rounded-[4rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="w-32 h-32 bg-emerald-500/20 blur-[60px] rounded-full" />
            </div>
            
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-8">Get in touch</h3>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-12">
              Let's build something <br /> <span className="text-emerald-500">extraordinary</span> together.
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="mailto:rajeshchityal@gmail.com" className="flex items-center gap-4 text-xl font-bold hover:text-emerald-500 transition-colors">
                <Mail className="text-emerald-500" /> rajeshchityal@gmail.com
              </a>
              <div className="h-px w-12 bg-white/10 hidden md:block" />
              <div className="flex gap-6">
                <Github className="w-8 h-8 text-white/40 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-8 h-8 text-white/40 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-8 h-8 text-white/40 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-white/20 uppercase tracking-widest">
        <p>© 2024 Rajesh Chityal. All rights reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </footer>
    </div>
  );
}
