"use client"
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi"
import MagneticButton from "./MagneticButton"
import Link from "next/link"

const LINKS   = [{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Contact",href:"#contact"}]
const SOCIALS = [{Icon:FiGithub,href:"https://github.com/taniashahida-dev",label:"GitHub"},{Icon:FiLinkedin,href:"https://www.linkedin.com/in/tania9",label:"LinkedIn"},{Icon:FiTwitter,href:"#",label:"Twitter"},{Icon:FiInstagram,href:"#",label:"Instagram"}]

export default function FooterSection() {
  return (
    <footer className="border-t border-p4/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#home" className="font-display text-p4 tracking-[.2em] text-lg no-underline">
           TA<span className="text-p3">NIA</span>
          </a>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {LINKS.map(l=>(
              <a key={l.label} href={l.href}
                className="font-mono text-[.62rem] tracking-[.18em] uppercase text-p3 hover:text-p4 transition-colors duration-300 no-underline">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            {SOCIALS.map(({Icon,href,label})=>(
              <MagneticButton key={label}>
                <Link href={href}  target="_blank" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-p3 hover:text-p4 border border-p4/15 hover:border-p4/35 transition-all duration-300 no-underline">
                  <Icon size={14}/>
                </Link>
              </MagneticButton>
            ))}
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-p4/25 to-transparent mb-6"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[.62rem] tracking-wider text-p3">© 2026 Tania. All rights reserved.</p>
          <p className="font-mono text-[.62rem] tracking-wider text-p3">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}