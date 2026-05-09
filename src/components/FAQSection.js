"use client"
import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { HiPlus, HiMinus } from "react-icons/hi"

const FAQS = [
  { q:"What technologies do you use?",          a:"I primarily work with Next.js, React, TypeScript, Node.js, Tailwind CSS, MongoDB, and PostgreSQL. I also integrate third-party APIs and use tools like Git, Vercel, and Figma." },
  { q:"How long does it take to complete a project?", a:"It depends on project complexity. Small projects take 3–7 days, medium projects 1–3 weeks, and large applications may take 1–3 months. I always deliver on time." },
  { q:"What is your development process like?",  a:"My process: Discovery → Planning → Design → Development → Testing → Launch → Support. I keep you updated at every stage with clear communication." },
  { q:"Do you work with clients remotely?",      a:"Yes! I work with clients worldwide. I use Slack, Zoom, and Notion to ensure smooth communication and transparency throughout the project." },
  { q:"Can you redesign an existing website?",  a:"Absolutely! I love redesigning websites to make them faster, modern, and more user-friendly. Share your current site and goals — let's discuss." },
]

function FAQItem({ item, open, toggle }) {
  return (
    <div className={`rounded-xl overflow-hidden border transition-all duration-300 ${open ? "border-p4/30 bg-p1/60" : "border-p4/10 bg-p1/20"}`}>
      <button onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 bg-transparent border-none">
        <span className="font-mono text-[.8rem] tracking-wider text-[#e8e0d4] flex-1">{item.q}</span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-p4" : "bg-p4/10 border border-p4/20"}`}>
          {open ? <HiMinus className="text-darker text-sm"/> : <HiPlus className="text-p4 text-sm"/>}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}
            transition={{duration:.35,ease:[.23,1,.32,1]}}>
            <div className="px-6 pb-6">
              <div className="h-px bg-p4/12 mb-4"/>
              <p className="text-p3/85 text-sm leading-[1.85]">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin:"-80px" })
  const [open, setOpen] = useState(1)
  return (
    <section id="faq" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost">FAQ</div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.p initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.5}} className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2">
          Got Questions?
        </motion.p>
        <motion.h2 initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
          transition={{duration:.6,delay:.1}} className="font-display tracking-[.2em] uppercase text-p4 text-center mb-16"
          style={{fontSize:"clamp(1.8rem,4.5vw,3.8rem)",textShadow:"0 0 60px rgba(214,189,152,.12)"}}>
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <div className="flex flex-col gap-3">
          {FAQS.map((item,i)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.5,delay:.2+i*.07}}>
              <FAQItem item={item} open={open===i} toggle={()=>setOpen(open===i?null:i)}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}