"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const COURSES = [
  "Data Structures",
  "Web Technologies",
  "Database Management",
  "Software Engineering",
  "OOP",
];

const SOFT_SKILLS = [
  "Problem-Solving",
  "Fast Learner",
  "Team Collaboration",
  "Attention to Detail",
  "Time Management",
  "Adaptability",
];

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Ghost background text */}
      <div className="ghost">EDUCATION</div>

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-p2 opacity-20 -top-44 -right-28 z-0" />
      <div className="orb w-[350px] h-[350px] bg-p2 opacity-10 -bottom-24 -left-20 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2 opacity-55"
        >
          MY BACKGROUND
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display tracking-[.18em] uppercase text-p4 text-center mb-14"
          style={{
            fontSize: "clamp(2rem,5vw,4.5rem)",
            textShadow: "0 0 60px rgba(214,189,152,.12)",
          }}
        >
          EDUCATION & SOFT SKILLS
        </motion.h2>

        {/* Top 2-col grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">

          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-2xl p-8 border border-p4/10 bg-p1/25 hover:border-p4/25 transition-all duration-300 overflow-hidden"
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-7 right-7 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(214,189,152,0.4), transparent)",
              }}
            />

            <p className="font-mono text-[.58rem] tracking-[.28em] uppercase text-p3/40 mb-5 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-p4/30" />
              DEGREE
            </p>

            <h3
              className="font-display text-[#e8e0d4] uppercase leading-tight mb-1"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", letterSpacing: "0.05em" }}
            >
              DIPLOMA IN<br />COMPUTER SCIENCE
            </h3>
            <p className="text-p3/50 text-xs tracking-wide mb-6">
              Chittagong Polytechnic Institute
            </p>

            {/* 3 stat boxes */}
            <div className="flex gap-3 mb-6">
              {[
                { num: "~3.5", label: "CGPA / 4.0" },
                { num: "7TH", label: "Semester" },
                { num: "2026", label: "Expected Completion" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-1 px-4 py-3 rounded-xl border border-p2/20"
                  style={{ background: "rgba(64,83,76,0.25)" }}
                >
                  <div
                    className="font-display text-p4 leading-none mb-1"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)", letterSpacing: "0.04em" }}
                  >
                    {s.num}
                  </div>
                  <div className="font-mono text-[.58rem] tracking-[.18em] uppercase text-p3/40">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="font-mono text-[.58rem] tracking-[.18em] uppercase text-p3/40">
                  Academic Progress
                </span>
                <span className="font-mono text-[.58rem] text-p3/50">87.5%</span>
              </div>
              <div className="h-[3px] rounded-full bg-p4/8 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "87.5%",
                    background: "linear-gradient(90deg, #40534C, #D6BD98)",
                  }}
                />
              </div>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Final Year",  "Computer Science"].map((p) => (
                <span
                  key={p}
                  className="font-mono text-[.58rem] tracking-[.14em] uppercase px-3 py-1 rounded-full border border-p2/28 text-p3/70"
                  style={{ background: "rgba(64,83,76,0.18)" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Coursework Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className="relative rounded-2xl p-8 border border-p4/10 bg-p1/25 hover:border-p4/25 transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute top-0 left-7 right-7 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(214,189,152,0.4), transparent)",
              }}
            />

            <p className="font-mono text-[.58rem] tracking-[.28em] uppercase text-p3/40 mb-5 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-p4/30" />
              COURSEWORK
            </p>

            <h3
              className="font-display text-[#e8e0d4] uppercase leading-tight mb-5"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", letterSpacing: "0.05em" }}
            >
              RELEVANT<br />COURSES TAKEN
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {COURSES.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-p2/16 hover:border-p2/32 transition-all duration-200 cursor-default"
                  style={{ background: "rgba(64,83,76,0.2)" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#677D6A" }}
                  />
                  <span className="text-[11.5px] text-p3/78 tracking-wide">{course}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills — full width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.44, ease: [0.23, 1, 0.32, 1] }}
          className="relative rounded-2xl px-8 py-7 border border-p4/10 bg-p1/25 hover:border-p4/25 transition-all duration-300 overflow-hidden"
        >
          <div
            className="absolute top-0 left-7 right-7 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(214,189,152,0.4), transparent)",
            }}
          />

          <p className="font-mono text-[.58rem] tracking-[.28em] uppercase text-p3/40 mb-5 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-p4/30" />
            PROFESSIONAL STRENGTHS
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
            {SOFT_SKILLS.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-p4/8 bg-p4/3 hover:bg-p4/7 hover:border-p4/18 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#677D6A" }}
                />
                <span className="text-[11.5px] text-p3/72 tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}