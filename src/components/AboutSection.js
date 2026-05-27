"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiOutlineFolder,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineSupport,
} from "react-icons/hi";
import Image from "next/image";

const STATS = [
  {
    Icon: HiOutlineFolder,
    value: "15+",
    label: "PRACTICE PROJECTS",
    sub: "Building responsive and modern web applications.",
  },
  {
    Icon: HiOutlineUsers,
    value: "MODERN",
    label: "TECH STACK",
    sub: "Using React, Next.js, Tailwind and modern tools.",
  },
  {
    Icon: HiOutlineClock,
    value: "1+",
    label: "YEARS LEARNING",
    sub: "Learning and improving my skill every day.",
  },
  {
    Icon: HiOutlineSupport,
    value: "OPEN",
    label: "TO WORK",
    sub: "Available for internships and freelance opportunities.",
  },
];

const v = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] },
});

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="ghost">ABOUT</div>

      {/* orbs */}
      <div className="orb w-[500px] h-[500px] bg-p1 opacity-30 top-0 -left-40 z-0" />
      <div className="orb w-[300px] h-[300px] bg-p2 opacity-15 bottom-0 right-0 z-0" />

      {/* top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-p4/30 to-transparent mb-24" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.p
          {...v(0)}
          className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2"
        >
          Get to know me
        </motion.p>
        <motion.h2
          {...v(0.1)}
          className="font-display text-center tracking-[.2em] uppercase text-p4 mb-16"
          style={{
            fontSize: "clamp(2.5rem,6vw,5rem)",
            textShadow: "0 0 60px rgba(214,189,152,.12)",
          }}
        >
          WHO AM I?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photo col */}
          <motion.div {...v(0.2)} className="relative">
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-p4/15"
              style={{
                background:
                  "linear-gradient(135deg,rgba(64,83,76,.4),rgba(26,54,54,.9))",
              }}
            >
              <Image
                src="/aboute.png"
                fill
                alt="Tania"
                quality={100}
                priority
                className="object-contain scale-105 drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)]"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-darker to-transparent" />

              {/* text */}
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-3xl text-p4 tracking-wider">
                  TANIA
                </p>
                <p className="font-mono text-[.6rem] tracking-[.25em] uppercase text-p3">
                  Full Stack Web Developer
                </p>
              </div>
            </div>
            {/* floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-p1/90 border border-p4/20 rounded-xl px-4 py-3 backdrop-blur-lg text-center"
            >
              <p className="font-display text-p4 text-2xl leading-none">CSE</p>
              <p className="font-mono text-p3 text-[.58rem] tracking-[.15em] uppercase">
                STUDENT
              </p>
            </motion.div>
          </motion.div>

          {/* Text col */}
          <motion.div {...v(0.3)}>
            <p className="text-p3/85 text-sm leading-[1.9] mb-4">
              I'm Tania — a Full Stack Web Developer who builds fast, scalable,
              and production-ready web applications from the ground up.
            </p>
            <p className="text-p3/85 text-sm leading-[1.9] mb-4">
              With
              hands-on experience in Next.js, React, Node.js, Express.js, and
              Better Auth, I don't just write code — I architect complete
              digital solutions that are clean, performant, and built to last.
            </p>
            <p className="text-p3/85 text-sm leading-[1.9] mb-4">
              What sets me apart? I bridge the gap between great design and
              solid engineering — turning complex requirements into seamless
              user experiences, while keeping every line of code maintainable
              and scalable.
            </p>
            <p className="text-p3/85 text-sm leading-[1.9] mb-8">
              Whether you need a dynamic web app, a custom API, or a full
              product built from scratch — I bring clarity, speed, and technical
              depth to every project. Let's build something impactful together.
            </p>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "MongoDB",
                "Better-Auth",
                "REST API",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full font-mono text-[.62rem] tracking-wider text-p4 border  bg-p4/6 transition-all duration-300 hover:scale-105 -translate-y-0.5 border-p4/60 bg-p4/10 hover:shadow-[0_8px_25px_rgba(214,189,152,0.15)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(({ Icon, value, label, sub }, i) => (
            <motion.div
              key={label}
              {...v(0.4 + i * 0.08)}
              className="text-center p-6 rounded-2xl border border-p4/20 bg-p1/20 transition-all duration-500 group hover:-translate-y-3 hover:scale-[1.03] hover:border-p4/60 hover:shadow-[0_20px_50px_rgba(214,189,152,0.12)]"
            >
              <Icon className="text-p4 mx-auto mb-3 text-xl opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-1" />
              <p className="font-display text-4xl text-p4 mb-1">{value}</p>
              <p className="font-mono text-[.62rem] tracking-[.15em] uppercase text-p3 mb-2">
                {label}
              </p>
              <p className="text-p3/60 text-[.72rem] leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-p4/30 to-transparent mt-24" />
    </section>
  );
}
