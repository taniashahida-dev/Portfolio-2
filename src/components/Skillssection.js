"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const SKILLS_1 = [
  { label:"HTML5",       color:"#e34f26" },
  { label:"CSS3",        color:"#1572b6" },
  { label:"JavaScript",  color:"#f7df1e" },
  { label:"Express.js",  color:"#3178c6" },
  { label:"Next.js",     color:"#D6BD98" },
  { label:"React",       color:"#61dafb" },
  { label:"Tailwind CSS",color:"#38bdf8" },
  { label:"Node.js",     color:"#339933" },
]
const SKILLS_2 = [
  { label:"MongoDB",       color:"#47a248" },
  { label:"Firebase",    color:"#336791" },
  { label:"Git & GitHub",  color:"#f05032" },
  { label:"REST API",      color:"#677D6A" },
  { label:"Vercel",        color:"#D6BD98" },
  { label:"Figma",         color:"#f24e1e" },
  { label:"Redux",         color:"#764abc" },
  { label:"Framer Motion", color:"#D6BD98" },
]

function Chip({ label, color }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 mx-2.5 rounded-xl border border-p4/12 bg-p1/50 flex-shrink-0 min-w-[160px]">
      <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background:color, boxShadow:`0 0 8px ${color}90` }}/>
      <span className="font-mono text-[.75rem] tracking-wider text-[#e8e0d4]/80 whitespace-nowrap">{label}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden w-full">
      <div className={reverse ? "mq-rev" : "mq-fwd"}>
        {doubled.map((s,i) => <Chip key={i} label={s.label} color={s.color}/>)}
      </div>
    </div>
  )
}

// Grid of skill boxes (same as reference design top section)
const SKILL_BOXES = [
  { label:"HTML5",  color:"#e34f26", abbr:"H5" },
  { label:"CSS3",   color:"#1572b6", abbr:"C3" },
  { label:"JS",     color:"#f7df1e", abbr:"JS" },
  { label:"ES",     color:"#3178c6", abbr:"ES" },
  { label:"Next",   color:"#D6BD98", abbr:"NX" },
  { label:"React",  color:"#61dafb", abbr:"RJ" },
  { label:"TW",     color:"#38bdf8", abbr:"TW" },
  { label:"Node",   color:"#339933", abbr:"ND" },
]

export default function Skillssection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:"-80px" })

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost">SKILLS</div>
      <div className="orb w-[400px] h-[400px] bg-p2 opacity-20 top-1/2 right-0 z-0"/>

      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-16">
        <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2">
          What I work with
        </motion.p>
        <motion.h2 initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.1}} className="font-display tracking-[.2em] uppercase text-p4 text-center mb-12"
          style={{fontSize:"clamp(2.5rem,6vw,5rem)",textShadow:"0 0 60px rgba(214,189,152,.12)"}}>
          MY EXPERTISE
        </motion.h2>

        {/* Icon grid — same as reference */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-16">
          {SKILL_BOXES.map(({label,color,abbr},i)=>(
            <motion.div key={label}
              initial={{opacity:0,scale:.8}} animate={inView?{opacity:1,scale:1}:{}}
              transition={{duration:.4,delay:.1+i*.05}}
              className="flex flex-col items-center gap-2 py-5 px-2 rounded-xl border border-p4/10 bg-p1/30 hover:border-p4/35 hover:bg-p1/60 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display text-base tracking-wider"
                style={{background:`${color}18`,color,border:`1px solid ${color}30`}}>
                {abbr}
              </div>
              <span className="font-mono text-[.6rem] tracking-wider text-p3 group-hover:text-p4 transition-colors text-center">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-4">
        <MarqueeRow items={SKILLS_1} reverse={false}/>
        <MarqueeRow items={SKILLS_2} reverse={true}/>
      </div>
    </section>
  )
}