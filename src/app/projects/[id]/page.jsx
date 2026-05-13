"use client"
import { use, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { HiExternalLink, HiArrowLeft } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import Image from "next/image"
import Link from "next/link"
import { ALL_PROJECTS } from "@/lib/projects"

export default function ProjectDetailPage({ params }) {
  const router = useRouter()

  // ✅ Next.js 15+ — params is a Promise, unwrap with React.use()
  const { id } = use(params)

  const project = ALL_PROJECTS.find(p => p.id === id)
  const [imgIndex, setImgIndex] = useState(0)

  if (!project) notFound()

  const images = project.images || [project.thumbnail]
  const prev = () => setImgIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setImgIndex(i => (i + 1) % images.length)

  return (
    <main className="min-h-screen bg-darker pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 font-mono text-[.65rem] tracking-[.2em] uppercase text-p3 hover:text-p4 transition-colors mb-10 group">
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={14} />
          Back to Projects
        </motion.button>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-p4/15"
          style={{ background: `linear-gradient(135deg,${project.color},rgba(9,21,21,.95))` }}>

          <AnimatePresence mode="wait">
            <motion.div key={imgIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0">
              <Image
                src={images[imgIndex]}
                alt={`${project.title} screenshot ${imgIndex + 1}`}
                fill
                className="object-contain p-6"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-darker/80 border border-p4/20 flex items-center justify-center text-p4 hover:bg-p1 hover:border-p4/40 transition-all">
                <BsArrowLeft size={16} />
              </button>
              <button onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-darker/80 border border-p4/20 flex items-center justify-center text-p4 hover:bg-p1 hover:border-p4/40 transition-all">
                <BsArrowRight size={16} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setImgIndex(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === imgIndex ? "20px" : "6px",
                      height: "6px",
                      background: i === imgIndex ? "#D6BD98" : "rgba(214,189,152,0.3)"
                    }} />
                ))}
              </div>

              {/* Counter */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-darker/70 backdrop-blur-sm border border-p4/15">
                <span className="font-mono text-[.6rem] text-p4">{imgIndex + 1} / {images.length}</span>
              </div>
            </>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-darker/70 backdrop-blur-sm border border-p4/15">
            <span className="font-mono text-[.58rem] tracking-wider text-p4 uppercase">{project.category}</span>
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}>

          <h1 className="font-display text-5xl tracking-wider text-p4 mb-3"
            style={{ textShadow: "0 0 60px rgba(214,189,152,.15)" }}>
            {project.title}
          </h1>

          <p className="text-p3/85 text-sm leading-[1.9] mb-8 max-w-2xl">
            {project.fullDesc}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap mb-10">
            <Link href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[.65rem] tracking-[.18em] uppercase font-bold text-darker no-underline transition-all duration-300 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#677D6A,#D6BD98)", boxShadow: "0 4px 24px rgba(214,189,152,.3)" }}>
              <HiExternalLink size={15} /> Live Demo
            </Link>
            <Link href={project.gh} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[.65rem] tracking-[.18em] uppercase text-p4 border border-p4/25 bg-p4/5 hover:bg-p4/12 no-underline transition-all duration-300">
              <FiGithub size={15} /> GitHub Repo
            </Link>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-p4/20 to-transparent mb-10" />

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="font-mono text-[.6rem] tracking-[.3em] uppercase text-p4 mb-4">🛠 Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} className="px-4 py-1.5 rounded-full font-mono text-[.65rem] tracking-wider text-p4 border border-p4/20 bg-p4/6">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges + Future Plans */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-p4/12 bg-p1/25">
              <p className="font-mono text-[.6rem] tracking-[.25em] uppercase text-p4 mb-3">⚡ Challenges</p>
              <p className="text-p3/80 text-sm leading-[1.85]">{project.challenges}</p>
            </div>
            <div className="p-5 rounded-2xl border border-p4/12 bg-p1/25">
              <p className="font-mono text-[.6rem] tracking-[.25em] uppercase text-p4 mb-3">🚀 Future Plans</p>
              <p className="text-p3/80 text-sm leading-[1.85]">{project.improvements}</p>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="h-px bg-gradient-to-r from-transparent via-p4/20 to-transparent mt-12 mb-8" />
          <div className="flex items-center justify-between">
            <Link href="/#projects"
              className="inline-flex items-center gap-2 font-mono text-[.62rem] tracking-[.18em] uppercase text-p3 hover:text-p4 transition-colors no-underline group">
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={13} />
              All Projects
            </Link>
            {(() => {
              const currentIdx = ALL_PROJECTS.findIndex(p => p.id === id)
              const nextProject = ALL_PROJECTS[currentIdx + 1]
              return nextProject ? (
                <Link href={`/projects/${nextProject.id}`}
                  className="inline-flex items-center gap-2 font-mono text-[.62rem] tracking-[.18em] uppercase text-p3 hover:text-p4 transition-colors no-underline group">
                  Next: {nextProject.title}
                  <BsArrowRight className="group-hover:translate-x-1 transition-transform" size={13} />
                </Link>
              ) : null
            })()}
          </div>
        </motion.div>
      </div>
    </main>
  )
}