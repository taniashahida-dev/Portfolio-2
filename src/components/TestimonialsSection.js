"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

const REVIEWS = [
  {
    name: "Pixel Perfect UI",
    role: "Modern & Responsive Design",
    av: "UI",
    color: "#40534C",
    text: "Clean layouts with balanced spacing, responsive structure, and modern visual aesthetics focused on user experience.",
  },

  {
    name: "Smooth User Experience",
    role: "Frontend Development",
    av: "UX",
    color: "#677D6A",
    text: "Interactive and performance-focused frontend development using modern technologies and smooth animations.",
  },

  {
    name: "Continuous Improvement",
    role: "Growth Mindset",
    av: "GM",
    color: "#D6BD98",
    text: "Always learning new technologies, improving problem-solving skills, and building better digital experiences.",
  },
];
export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      <div className="ghost">STRENGTHS</div>
      <div className="orb w-[400px] h-[400px] bg-p2 opacity-20 top-10 right-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2"
        >
         MY STRENGTHS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display tracking-[.2em] uppercase text-p4 text-center mb-16"
          style={{
            fontSize: "clamp(2rem,5vw,4.5rem)",
            textShadow: "0 0 60px rgba(214,189,152,.12)",
          }}
        >
         WHAT I BRING TO THE TABLE?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="rounded-2xl p-7 border border-p4/10 bg-p1/25 hover:border-p4/25 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(5)
                  .fill(0)
                  .map((_, j) => (
                    <AiFillStar key={j} className="text-p4 text-sm" />
                  ))}
              </div>
              <p className="text-p3/85 text-sm leading-[1.85] mb-6 italic flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-p4/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-darker text-xs font-bold flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.av}
                </div>
                <div>
                  <p className="text-[#e8e0d4] text-sm font-semibold">
                    {r.name}
                  </p>
                  <p className="text-p3 text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <MagneticButton>
          <Link href={"#contact"}>  <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-mono text-[.65rem] tracking-[.2em] uppercase text-p4 border border-p4/25 bg-p4/5 hover:bg-p4/10 transition-all duration-300">
              <FiMessageSquare className="text-p4" /> LET'S BUILD SOMETHING GREAT
            </button>
          </Link>
          </MagneticButton>
        </motion.div>
      </div>
      
    </section>
  );
}
