"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin,FiInstagram ,FiFacebook} from "react-icons/fi";
import { HiArrowRight, HiArrowDown } from "react-icons/hi";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const SOCIALS = [
  {
    Icon: FiGithub,
    href: "https://github.com/taniashahida-dev",
    label: "GitHub",
  },
  {
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/tania9",
    label: "LinkedIn",
  },
  { Icon: FaTelegramPlane , href: "https://www.facebook.com/tania.shahida.2024", label: "Telegram" },
  { Icon: FaWhatsapp, href: "#", label: "Whatsapp" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background gradient ── */}
      <div className="absolute inset-0 bg-hero-gradient z-0" />

      {/* ── Glow orbs ── */}
      <div className="orb w-[700px] h-[700px] bg-p1 opacity-50 -top-40 -right-40 z-0" />
      <div className="orb w-[400px] h-[400px] bg-p2 opacity-25  bottom-0 -left-32 z-0" />
      <div className="orb w-[180px] h-[180px] bg-p4 opacity-[.07] top-1/3 right-1/4 z-0" />

      {/* ── Socials sidebar (fixed left) ── */}
      <motion.aside
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="fixed left-40 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4"
      >
        {SOCIALS.map(({ Icon, href, label }) => (
          <MagneticButton key={label}>
            <Link
              href={href}
              target="_blank"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-p3 hover:text-p4 border border-p4/15 hover:border-p4/40 transition-all duration-300 no-underline"
            >
              <Icon size={15} />
            </Link>
          </MagneticButton>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-p4/25 to-transparent" />
      </motion.aside>

      {/* ── Main content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT — text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4  mb-4"
            >
              Hi, I'AM
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35,
                  duration: 0.9,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="font-display leading-none tracking-wide"
                style={{
                  fontSize: "clamp(5rem,14vw,11rem)",
                  color: "#D6BD98",
                  textShadow: "0 0 100px rgba(214,189,152,0.18)",
                }}
              >
                TA
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.9,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="font-display leading-none tracking-wide text-p3"
                style={{ fontSize: "clamp(4rem,12vw,9rem)" }}
              >
                NIA
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="font-mono text-[.7rem] tracking-[.25em] uppercase text-p3 mb-3"
            >
              Full Stack Web Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="text-p3/80 text-sm leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
            >
              I build modern, scalable and high-performance web applications
              using Next.js, React & Node.js. Turning ideas into real world
              solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start flex-wrap"
            >
              <MagneticButton>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[.65rem] tracking-[.18em] uppercase text-p4 border border-p4/30 bg-p4/5 hover:bg-p4/10 transition-all duration-300 no-underline group"
                >
                  <HiArrowRight className="text-p4 group-hover:translate-x-1 transition-transform" />
                  View Resume
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-mono text-[.65rem] tracking-[.18em] uppercase font-bold text-darker no-underline transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg,#677D6A,#D6BD98)",
                    boxShadow: "0 4px 28px rgba(214,189,152,.3)",
                  }}
                >
                  Get in Touch <HiArrowRight />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT — photo placeholder (same shape as reference design) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,rgba(214,189,152,.12),transparent 70%)",
                transform: "scale(1.3)",
              }}
            />

            <div
              className="relative w-72 h-96 lg:w-80 lg:h-[440px] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] overflow-hidden border border-p4/20"
              style={{
                background:
                  "linear-gradient(180deg,rgba(64,83,76,.5) 0%,rgba(26,54,54,.8) 50%,rgba(9,21,21,1) 100%)",
              }}
            >
              
              <div className="absolute inset-0 flex items-end justify-center pb-0 overflow-hidden">
               

                 <Image
    src="/heroProfile.png"
    alt="Tania"
    fill
    quality={100}
    className="object-cover
      object-top
      scale-105
      opacity-95
      contrast-105
      brightness-95"
  />
    {/* cinematic overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#091515] via-transparent to-transparent opacity-70" />
              </div>

              {/* Bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background: "linear-gradient(to top,#091515,transparent)",
                }}
              />

              {/* Name tag at bottom */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="font-display tracking-[.15em] text-p4 text-xl">
                  TANIA
                </p>
                <p className="font-mono text-[.6rem] tracking-[.25em] uppercase text-p3">
                  Web Developer
                </p>
              </div>
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-3 -right-14 bg-p1/90 border border-p4/20 rounded-xl px-4 py-3 backdrop-blur-lg text-center"
            >
              <p className="font-display text-p4 text-3xl leading-none my-2">
                10+
              </p>
              <p className="font-mono text-p3 text-[.58rem] tracking-[.18em] uppercase">
                Completed Projects.
              </p>
            </motion.div>

            {/* Floating projects badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-1 -left-9 bg-p1/90 border border-p4/20 rounded-xl px-4 py-3 backdrop-blur-lg text-center"
            >
              <p className="font-display text-p4 text-3xl leading-none my-2">
                1+
              </p>
              <p className="font-mono text-p3 text-[.58rem] tracking-[.18em] uppercase">
                {" "}
               YEARS LEARNING
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col items-center mt-16 gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-8 h-12 rounded-full border border-p4/25 flex justify-center pt-2"
          >
            <div className="w-1 h-2.5 rounded-full bg-p4 opacity-60" />
          </motion.div>
          <span className="font-mono text-[.6rem] tracking-[.3em] uppercase text-p3">
            scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
