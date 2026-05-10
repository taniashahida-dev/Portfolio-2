
"use client"
import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { HiArrowUpRight } from "react-icons/hi2"
import { HiExternalLink } from "react-icons/hi"
import MagneticButton from "./MagneticButton"
import Link from "next/link"
import Image from "next/image"

const ALL_PROJECTS = [
  {
    title: "SkiilsPhere",
    desc: "A modern, full-featured online learning platform. ",
    tags: ["Next.js", "Tailwind", "MongoDB","Batter Auth","Vercel"],
    category: "Full Stack",
    color: "#1a3a5c",
    image: "/projects/skillsphere.png",
    live: "#",
    gh: "#",
  },
  {
    title: "Dragon News",
    desc: "A news platform with authentication",
    tags: ["Next.js", "Tailwind", "MongoDB","Batter Auth","Vercel"],
    category: "Full Stack",
    color: "#1a2a3a",
    image: "/projects/dragonnews.png",
    live: "#",
    gh: "#",
  },
  {
    title: "Ph-App Store",
    desc: " At PH-App Store , we craft innovative apps designed to make everyday life simpler and more exciting " ,
    tags: ["React", "Tailwind", "DaisyUI","Vercel"],
    category: "Frontend",
    color: "#1a3a2a",
   image: "/projects/phappstor.png",
    live: "#",
    gh: "#",
  },
  {
    title: "Keen Keeper",
    desc: "Your personal shelf of meaningful connections. Browse and nurture the relationships that matter most.",
    tags: ["React", "Tailwind", "Context API","Vercel"],
    category: "Frontend",
    color: "#2a2a1a",
   image: "/projects/keenkeeper.png",
    live: "#",
    gh: "#",
  },
  {
    title: "Digitools",
    desc: "Access premium AI tools, design assets, templates, and productivity software",
    tags: ["Raect", "Tailwind","JavaScript (ES6)","Netlify"],
    category: "Frontend",
    color: "#1a2a2a",
    image: "/projects/digitools.png",
    live: "#",
    gh: "#",
  },
  {
    title: "Github Issue Tracker",
    desc: "Track and manage your project issues",
    tags: ["JavaScript", "Frontend"],
    category: "Frontend",
    color: "#1a1a3a",
    image: "/projects/githubIssueTracker.png",
    live: "#",
    gh: "#",
  },
  {
    title: "English Janala",
    desc: "Personal portfolio with premium animations",
    tags: ["JavaScript", "Tailwind"],
    category: "Frontend",
    color: "#2a1a3a",
    image: "/projects/englishjanala.png",
    live: "#",
    gh: "#",
  },
  
]

const TABS = ["All", "Full Stack", "Frontend", "Backend"]

function ProjectCard({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="group rounded-2xl border border-p4/10 bg-p1/20 hover:border-p4/30 hover:-translate-y-2 overflow-hidden transition-all duration-500"
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-[4/3] flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg,${item.color},rgba(9,21,21,.95))` }}
      >
       <div className="relative w-80 h-80">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-contain transition-transform duration-500 group-hover:scale-110"
  />
</div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-darker/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link href={item.live}  target="_blank"
            className="w-10 h-10 rounded-full bg-p4 flex items-center justify-center text-darker hover:scale-110 transition-transform no-underline">
            <HiExternalLink size={16} />
          </Link>
          <Link href={item.gh}  target="_blank"
            className="w-10 h-10 rounded-full border border-p4/50 flex items-center justify-center text-p4 hover:scale-110 transition-transform no-underline">
            <HiArrowUpRight size={16} />
          </Link>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-darker/60 backdrop-blur-sm border border-p4/15">
          <span className="font-mono text-[.58rem] tracking-wider text-p4 uppercase">{item.category}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display tracking-wider text-xl text-[#e8e0d4] leading-tight">{item.title}</h3>
          <HiArrowUpRight className="text-p3 group-hover:text-p4 transition-colors flex-shrink-0 mt-1" size={14} />
        </div>
        <p className="text-p3/80 text-xs leading-relaxed mb-4">{item.desc}</p>
        <div className="flex gap-1.5 flex-wrap">
          {item.tags.map(t => (
            <span key={t}
              className="px-2 py-0.5 rounded font-mono text-[.58rem] tracking-wider text-p4 bg-p4/7 border border-p4/15">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTab, setActiveTab] = useState("All")

  const filtered = activeTab === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeTab)

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost">WORK</div>
      <div className="orb w-[350px] h-[350px] bg-p1 opacity-25 top-20 right-0 z-0" />
      <div className="orb w-[250px] h-[250px] bg-p2 opacity-15 bottom-20 left-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Heading ── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-3">
          Featured work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4">
          <h2
            className="font-display tracking-[.18em] uppercase text-p4 leading-none"
            style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", textShadow: "0 0 80px rgba(214,189,152,.15)" }}>
            MY{" "}
            <span style={{
              WebkitTextStroke: "1px rgba(214,189,152,0.5)",
              color: "transparent",
            }}>
              PORTFOLIO
            </span>
          </h2>
          <p className="text-p3/70 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            A collection of projects I've built — from full-stack web apps to sleek frontends.
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-14 flex-wrap">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-mono text-[.65rem] tracking-[.15em] uppercase transition-all duration-300 ${
                activeTab === tab
                  ? "text-darker font-semibold shadow-[0_4px_20px_rgba(214,189,152,.3)]"
                  : "text-p3 border border-p4/20 bg-p4/5 hover:border-p4/40 hover:text-p4"
              }`}
              style={activeTab === tab ? { background: "linear-gradient(135deg,#677D6A,#D6BD98)" } : {}}>
              {tab}
            </button>
          ))}
        </motion.div>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} item={p} index={i} inView={inView} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center mt-12">
          <MagneticButton>
            <Link href={'https://github.com/taniashahida-dev'}
            target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono text-[.65rem] tracking-[.2em] uppercase text-p4 border border-p4/25 bg-p4/5 hover:bg-p4/10 transition-all duration-300 no-underline group">
              View All on GitHub
              <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}