

"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { HiArrowUpRight } from "react-icons/hi2"
import { HiExternalLink, HiX } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import MagneticButton from "./MagneticButton"
import Link from "next/link"
import Image from "next/image"
import { ALL_PROJECTS } from "@/lib/projects"

const TABS = ["All", "Full Stack", "Frontend", "Backend"]

// ── Modal ────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = project.images?.length ? project.images : [project.thumbnail]

  // ESC key to close
  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", fn)
    return () => window.removeEventListener("keydown", fn)
  }, [onClose])

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const prev = () => setImgIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setImgIndex(i => (i + 1) % images.length)

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-[9998]"
        style={{ background: "rgba(6,15,15,0.88)", backdropFilter: "blur(14px)" }}
      />

      {/* Modal panel */}
      <motion.div
       key="modal"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
       className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto overscroll-contain"
      >
        <div
         onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-p4/20 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
  style={{ background: "#0d1f1f" }}
        >
          {/* ── Close button ── */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-p3 hover:text-p4 border border-p4/20 hover:border-p4/40 bg-darker/80 backdrop-blur-sm transition-all duration-200 hover:rotate-90"
          >
            <HiX size={16} />
          </button>

          {/* ── Image carousel ── */}
          <div
            className="relative w-full overflow-hidden rounded-t-2xl"
            style={{
              aspectRatio: "16/9",
              background: `linear-gradient(135deg,${project.color},rgba(9,21,21,.95))`
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imgIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[imgIndex]}
                  alt={`${project.title} ${imgIndex + 1}`}
                  fill
                  className="object-contain p-4 rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows — only if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-darker/80 border border-p4/20 flex items-center justify-center text-p4 hover:bg-p1 transition-all"
                >
                  <BsArrowLeft size={14} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-darker/80 border border-p4/20 flex items-center justify-center text-p4 hover:bg-p1 transition-all"
                >
                  <BsArrowRight size={14} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIndex(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === imgIndex ? "18px" : "6px",
                        height: "6px",
                        background: i === imgIndex ? "#D6BD98" : "rgba(214,189,152,0.3)"
                      }}
                    />
                  ))}
                </div>

                {/* Counter */}
                <div className="absolute top-3 right-12 px-2.5 py-1 rounded-full bg-darker/70 border border-p4/15">
                  <span className="font-mono text-[.58rem] text-p4">{imgIndex + 1}/{images.length}</span>
                </div>
              </>
            )}

            {/* Category badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-darker/70 backdrop-blur-sm border border-p4/15">
              <span className="font-mono text-[.55rem] tracking-wider text-p4 uppercase">{project.category}</span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="p-6">
            {/* Title + buttons row */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="font-display text-3xl tracking-wider text-p4 leading-tight">{project.title}</h2>
              <div className="flex gap-2 flex-shrink-0 pt-1">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-[.6rem] tracking-wider uppercase font-bold text-darker no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(214,189,152,0.25)]"
                  style={{ background: "linear-gradient(135deg,#677D6A,#D6BD98)" }}
                >
                  <HiExternalLink size={13} /> Live
                </Link>
                <Link
                  href={project.gh}
                  target="_blank"
                  rel="noopener noreferrer"
                 className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-[.6rem] tracking-wider uppercase text-p4 border border-p4/25 bg-p4/5 hover:bg-p4/12 hover:border-p4/60 no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_30px_rgba(214,189,152,0.15)]"
                >
                  <FiGithub size={13} /> GitHub
                </Link>
              </div>
            </div>

            {/* Description */}
            <p className="text-p3/80 text-sm leading-[1.85] mb-5">{project.fullDesc}</p>

            {/* Tech stack */}
            <div className="mb-5">
              <p className="font-mono text-[.58rem] tracking-[.25em] uppercase text-p4 mb-2.5">🛠 Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t,i) => (
                  <span  key={`${t}-${i}`} className="px-3 py-1 rounded-full font-mono text-[.62rem] tracking-wider text-p4 border border-p4/20 bg-p4/6 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-p4/60 hover:bg-p4/10 hover:shadow-[0_8px_25px_rgba(214,189,152,0.15)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges + Future plans */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-p4/12 bg-p1/25">
                <p className="font-mono text-[.58rem] tracking-[.22em] uppercase text-p4 mb-2">⚡ Challenges</p>
                <p className="text-p3/75 text-xs leading-relaxed">{project.challenges}</p>
              </div>
              <div className="p-4 rounded-xl border border-p4/12 bg-p1/25">
                <p className="font-mono text-[.58rem] tracking-[.22em] uppercase text-p4 mb-2">🚀 Future Plans</p>
                <p className="text-p3/75 text-xs leading-relaxed">{project.improvements}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// ── Project Card ─────────────────────────────────────────────────
function ProjectCard({ item, index, inView, onClick }) {
  return (
    <motion.div
    
    initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  whileHover={{ y: -10, scale: 1.02 }}
  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
  onClick={onClick}
  className="group rounded-2xl border border-p4/10 bg-p1/20 hover:border-p4/30 overflow-hidden cursor-pointer hover:shadow-[0_30px_80px_rgba(214,189,152,0.12)]"
  >
      {/* Thumbnail */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: `linear-gradient(135deg,${item.color},rgba(9,21,21,.95))` }}
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-contain p-3 rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-darker/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-p4/40 bg-p4/10 backdrop-blur-sm">
            <span className="font-mono text-[.62rem] tracking-wider text-p4 uppercase">View Details</span>
            <HiArrowUpRight className="text-p4" size={12} />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-darker/60 backdrop-blur-sm border border-p4/15">
          <span className="font-mono text-[.55rem] tracking-wider text-p4 uppercase">{item.category}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display tracking-wider text-lg text-[#e8e0d4] leading-tight">{item.title}</h3>
          <HiArrowUpRight className="text-p3 group-hover:text-p4 transition-colors flex-shrink-0 mt-0.5" size={13} />
        </div>
        <p className="text-p3/75 text-xs leading-relaxed line-clamp-1">{item.desc}</p>
      </div>
    </motion.div>
  )
}

// ── Main Section ─────────────────────────────────────────────────
export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTab, setActiveTab] = useState("All")
  const [selected, setSelected] = useState(null)

  const filtered = activeTab === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeTab)

  return (
    <>
      <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
        <div className="ghost">WORK</div>
        <div className="orb w-[350px] h-[350px] bg-p1 opacity-25 top-20 right-0 z-0" />
        <div className="orb w-[250px] h-[250px] bg-p2 opacity-15 bottom-20 left-0 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Heading */}
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
              <span style={{ WebkitTextStroke: "1px rgba(214,189,152,0.5)", color: "transparent" }}>
                PORTFOLIO
              </span>
            </h2>
            <p className="text-p3/70 text-sm mt-4 max-w-md mx-auto leading-relaxed">
              A collection of projects I've built — from full-stack web apps to sleek frontends.
            </p>
          </motion.div>

          {/* Filter Tabs */}
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

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  item={p}
                  index={i}
                  inView={inView}
                  onClick={() => setSelected(p)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-12">
            <MagneticButton>
              <Link
                href="https://github.com/taniashahida-dev"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono text-[.65rem] tracking-[.2em] uppercase text-p4 border border-p4/25 bg-p4/5 hover:bg-p4/10 transition-all duration-300 no-underline group">
                View All on GitHub
                <HiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}