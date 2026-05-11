"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { HiOutlineFolder, HiOutlineClock, HiOutlineUsers, HiOutlineSupport } from "react-icons/hi"

const STATS = [
  { Icon:HiOutlineFolder, value:"15+", label:"PRACTICE PROJECTS",     sub:"Building responsive and modern web applications." },
  { Icon:HiOutlineUsers,  value:"MODERN", label:"TECH STACK",     sub:"Using React, Next.js, Tailwind and modern tools." },
   { Icon:HiOutlineClock,  value:"1+",   label:"YEARS LEARNING",  sub:"Learning and improving my skill every day." },
  { Icon:HiOutlineSupport,value:"OPEN", label:"TO WORK",  sub:"Available for internships and freelance opportunities." },
]

const v = (delay=0) => ({ initial:{opacity:0,y:40}, whileInView:{opacity:1,y:0}, viewport:{once:true,margin:"-80px"}, transition:{duration:.7,delay,ease:[.23,1,.32,1]} })

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="ghost">ABOUT</div>

      {/* orbs */}
      <div className="orb w-[500px] h-[500px] bg-p1 opacity-30 top-0 -left-40 z-0"/>
      <div className="orb w-[300px] h-[300px] bg-p2 opacity-15 bottom-0 right-0 z-0"/>

      {/* top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-p4/30 to-transparent mb-24"/>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.p {...v(0)} className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2">
          Get to know me
        </motion.p>
        <motion.h2 {...v(.1)} className="font-display text-center tracking-[.2em] uppercase text-p4 mb-16"
          style={{fontSize:"clamp(2.5rem,6vw,5rem)",textShadow:"0 0 60px rgba(214,189,152,.12)"}}>
          WHO AM I?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo col */}
          <motion.div {...v(.2)} className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-p4/15"
              style={{background:"linear-gradient(135deg,rgba(64,83,76,.4),rgba(26,54,54,.9))"}}>
              {/* Replace this div with <Image src="your-photo.jpg" fill alt="Asad" className="object-cover"/> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 340" className="w-3/4 h-3/4 opacity-40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="100" cy="72" rx="34" ry="38" fill="#677D6A"/>
                  <rect x="91" y="108" width="18" height="22" rx="6" fill="#677D6A"/>
                  <path d="M38 148 Q50 128 100 126 Q150 128 162 148 L168 300 L32 300 Z" fill="#40534C"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-darker to-transparent"/>
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-3xl text-p4 tracking-wider">TANIA</p>
                <p className="font-mono text-[.6rem] tracking-[.25em] uppercase text-p3">Full Stack Web Developer</p>
              </div>
            </div>
            {/* floating badge */}
            <motion.div animate={{y:[0,-10,0]}} transition={{repeat:Infinity,duration:3,ease:"easeInOut"}}
              className="absolute -top-4 -right-4 bg-p1/90 border border-p4/20 rounded-xl px-4 py-3 backdrop-blur-lg text-center">
              <p className="font-display text-p4 text-2xl leading-none">1+</p>
              <p className="font-mono text-p3 text-[.58rem] tracking-[.15em] uppercase">YEARS LEARNING.</p>
            </motion.div>
          </motion.div>

          {/* Text col */}
          <motion.div {...v(.3)}>
            <p className="text-p3/85 text-sm leading-[1.9] mb-4">
              Hello, I'm Tania, a dedicated Full Stack Web Developer with 1+ years of experience building
              scalable, high-performance web applications. I specialize in Next.js, React, Node.js, Express.js and Firebase.
            </p>
            <p className="text-p3/85 text-sm leading-[1.9] mb-4">
              My passion for development drives me to continuously push boundaries and deliver impactful solutions.
              I love turning complex ideas into clean, user-friendly digital experiences.
            </p>
            <p className="text-p3/85 text-sm leading-[1.9] mb-8">
              I take pride in writing clean, maintainable code and always follow best practices.
              Let's collaborate and bring your vision to life together.
            </p>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {["Next.js","React","Node.js","Express.js","Tailwind CSS","MongoDB","Firebase","REST API"].map(t=>(
                <span key={t} className="px-3 py-1.5 rounded-full font-mono text-[.62rem] tracking-wider text-p4 border border-p4/20 bg-p4/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(({Icon,value,label,sub},i)=>(
            <motion.div key={label} {...v(.4+i*.08)}
              className="text-center p-6 rounded-2xl border border-p4/10 bg-p1/20 hover:border-p4/25 transition-all duration-300 group">
              <Icon className="text-p4 mx-auto mb-3 text-xl opacity-70 group-hover:opacity-100 transition-opacity"/>
              <p className="font-display text-4xl text-p4 mb-1">{value}</p>
              <p className="font-mono text-[.62rem] tracking-[.15em] uppercase text-p3 mb-2">{label}</p>
              <p className="text-p3/60 text-[.72rem] leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-p4/30 to-transparent mt-24"/>
    </section>
  )
}