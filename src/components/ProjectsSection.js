"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { HiArrowUpRight } from "react-icons/hi2"
import { HiExternalLink } from "react-icons/hi"
import MagneticButton from "./MagneticButton"

const WEB_PROJECTS = [
  { title:"DevFlow",    desc:"Developer community & Q&A platform", tags:["Next.js","TypeScript","MongoDB"], color:"#1a3a5c", emoji:"💻", live:"#", gh:"#" },
  { title:"TaskHub",    desc:"Team task management dashboard",      tags:["Next.js","Tailwind","Redux"],    color:"#1a2a3a", emoji:"📋", live:"#", gh:"#" },
  { title:"ShopSphere", desc:"Full-stack e-commerce application",   tags:["Next.js","Stripe","MongoDB"],   color:"#1a3a2a", emoji:"🛒", live:"#", gh:"#" },
  { title:"Portfolio V2",desc:"Personal portfolio website",         tags:["Next.js","Tailwind","Framer"],  color:"#2a1a3a", emoji:"🎨", live:"#", gh:"#" },
]

const API_PROJECTS = [
  { title:"AuthAPI",    desc:"JWT authentication REST API",         tags:["Node.js","Express","MongoDB"],  color:"#2a2a1a", emoji:"🔐", live:"#", gh:"#" },
  { title:"ChatApp",    desc:"Real-time chat with WebSockets",      tags:["Socket.io","Node","React"],     color:"#1a2a2a", emoji:"💬", live:"#", gh:"#" },
  { title:"Blog CMS",   desc:"Headless CMS with REST API",          tags:["Next.js","Sanity","Vercel"],   color:"#1a1a3a", emoji:"📝", live:"#", gh:"#" },
  { title:"Weather App",desc:"Weather dashboard with OpenAPI",      tags:["React","OpenWeather","CSS"],    color:"#1a3a3a", emoji:"🌤️", live:"#", gh:"#" },
]

function ProjectCard({ item, index, inView }) {
  return (
    <motion.div
      initial={{opacity:0,y:60}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:.7,delay:index*.1,ease:[.23,1,.32,1]}}
      className="group rounded-2xl border border-p4/10 bg-p1/20 hover:border-p4/30 hover:-translate-y-2 overflow-hidden transition-all duration-400">

      {/* Thumbnail */}
      <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden"
        style={{background:`linear-gradient(135deg,${item.color},rgba(9,21,21,.9))`}}>
        <span className="text-5xl">{item.emoji}</span>
        {/* hover overlay */}
        <div className="absolute inset-0 bg-darker/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a href={item.live} className="w-10 h-10 rounded-full bg-p4 flex items-center justify-center text-darker hover:scale-110 transition-transform no-underline">
            <HiExternalLink size={16}/>
          </a>
          <a href={item.gh} className="w-10 h-10 rounded-full border border-p4/40 flex items-center justify-center text-p4 hover:scale-110 transition-transform no-underline">
            <HiArrowUpRight size={16}/>
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display tracking-wider text-xl text-[#e8e0d4] mb-1">{item.title}</h3>
        <p className="text-p3 text-xs mb-4 leading-relaxed">{item.desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5 flex-wrap">
            {item.tags.map(t=>(
              <span key={t} className="px-2 py-0.5 rounded font-mono text-[.58rem] tracking-wider text-p4 bg-p4/7 border border-p4/15">
                {t}
              </span>
            ))}
          </div>
          <HiArrowUpRight className="text-p3 group-hover:text-p4 transition-colors flex-shrink-0 ml-2" size={14}/>
        </div>
      </div>
    </motion.div>
  )
}

function CategoryBlock({ heading, ghost, projects, inView, delay }) {
  return (
    <div className="relative mb-24">
      <div className="ghost" style={{top:0}}>{ghost}</div>
      <motion.h2 initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
        transition={{duration:.6,delay}} className="font-display tracking-[.2em] uppercase text-p4 text-center mb-12 relative z-10"
        style={{fontSize:"clamp(2rem,5vw,4rem)",textShadow:"0 0 60px rgba(214,189,152,.1)"}}>
        {heading}
      </motion.h2>
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((p,i)=><ProjectCard key={p.title} item={p} index={i} inView={inView}/>)}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:"-80px" })

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="orb w-[350px] h-[350px] bg-p1 opacity-25 top-20 right-0 z-0"/>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2">
          Featured work
        </motion.p>

        <CategoryBlock heading="WEB DEVELOPMENT" ghost="WEBDEV"  projects={WEB_PROJECTS} inView={inView} delay={.2}/>
        <CategoryBlock heading="BACKEND & API"   ghost="BACKEND" projects={API_PROJECTS}  inView={inView} delay={.3}/>

        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:.8,duration:.5}}
          className="flex justify-center mt-4">
          <MagneticButton>
            <button className="px-8 py-3 rounded-xl font-mono text-[.65rem] tracking-[.2em] uppercase text-p4 border border-p4/25 bg-p4/5 hover:bg-p4/10 transition-all duration-300">
              View All Projects
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}