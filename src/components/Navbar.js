"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import MagneticButton from "./MagneticButton"
import Link from "next/link"

const LINKS = [
  { label:"Home",    href:"#home"         },
  { label:"About Me",href:"#about"        },
  { label:"Portfolio",href:"#projects"    },
  { label:"Contact", href:"#contact"      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menu,     setMenu]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn, { passive:true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <>
      <motion.nav initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}}
        transition={{duration:.9,ease:[.23,1,.32,1]}}
        className="fixed top-0 left-0 right-0 z-[1000] px-4 pt-3">
        <div className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 ${scrolled ? "bg-darker/90 backdrop-blur-2xl border border-p4/10" : "bg-darker/40 backdrop-blur-md border border-p4/5"}`}>

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded-lg bg-p1 border border-p4/20 flex items-center justify-center">
              <span className="font-display text-p4 text-sm leading-none">T</span>
            </div>
            <span className="font-display text-p4 tracking-[.2em] text-sm">TA<span className="text-p3">NIA</span></span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(l => (
              <Link key={l.label} href={l.href}
                className="font-mono text-[.68rem] tracking-[.2em] uppercase text-p3 hover:text-p4 transition-colors duration-300 relative group no-underline">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-p4 group-hover:w-full transition-all duration-300"/>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <MagneticButton>
              <Link href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-[.65rem] tracking-[.18em] uppercase font-semibold text-darker no-underline transition-all duration-300"
                style={{background:"linear-gradient(135deg,#677D6A,#D6BD98)",boxShadow:"0 4px 20px rgba(214,189,152,.25)"}}>
                Hire Me
              </Link>
            </MagneticButton>
            <button onClick={()=>setMenu(!menu)} className="md:hidden text-p4 p-1">
              {menu ? <FiX size={20}/> : <FiMenu size={20}/>}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}}
            className="fixed top-20 left-4 right-4 z-[999] rounded-2xl p-6 flex flex-col gap-4 bg-darker/98 border border-p4/15 backdrop-blur-2xl">
            {LINKS.map((l,i)=>(
              <motion.a key={l.label} href={l.href}
                initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:i*.06}}
                onClick={()=>setMenu(false)}
                className="font-mono text-sm tracking-[.18em] uppercase text-p3 hover:text-p4 border-b border-p4/8 pb-3 no-underline transition-colors">
                {l.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={()=>setMenu(false)}
              className="text-center py-3 rounded-xl font-mono text-[.7rem] tracking-[.18em] uppercase text-darker font-bold no-underline"
              style={{background:"linear-gradient(135deg,#677D6A,#D6BD98)"}}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}