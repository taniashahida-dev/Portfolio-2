


"use client"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi"
import { HiArrowRight } from "react-icons/hi2"
import emailjs from "@emailjs/browser"
import MagneticButton from "./MagneticButton"


const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const INFO = [
  { Icon: HiOutlineMail,           label: "Email",    value: "taniia.webdev@gmail.com"  },
  { Icon: HiOutlinePhone,          label: "Phone",    value: "0123448902" },
  { Icon: HiOutlineLocationMarker, label: "Location", value: "Bangladesh"          },
]

const STATUS = { idle: "idle", sending: "sending", success: "success", error: "error" }

export default function ContactSection() {
  const ref    = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const [form,   setForm]   = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState(STATUS.idle)

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(STATUS.sending)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus(STATUS.success)
      setForm({ name: "", email: "", subject: "", message: "" })
     
      setTimeout(() => setStatus(STATUS.idle), 4000)
    } catch (err) {
      console.error("EmailJS error:", err)
      setStatus(STATUS.error)
      setTimeout(() => setStatus(STATUS.idle), 4000)
    }
  }

  const btnLabel = () => {
    if (status === STATUS.sending) return "Sending..."
    if (status === STATUS.success) return "✓ Message Sent!"
    if (status === STATUS.error)   return "✗ Failed. Try again"
    return "Send Message"
  }

  const btnStyle = () => {
    if (status === STATUS.success) return { background: "#40534C" }
    if (status === STATUS.error)   return { background: "#7c2d2d" }
    if (status === STATUS.sending) return { background: "#40534C", opacity: 0.7 }
    return { background: "linear-gradient(135deg,#677D6A,#D6BD98)", boxShadow: "0 4px 28px rgba(214,189,152,.28)" }
  }

  const inputClass = "w-full px-4 py-3.5 rounded-xl font-mono text-sm text-[#e8e0d4] placeholder-p3/60 bg-p1/40 border border-p4/15 focus:outline-none focus:border-p4/45 transition-colors duration-300"

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="ghost">CONTACT</div>
      <div className="orb w-[500px] h-[500px] bg-p2 opacity-20 -bottom-20 -left-20 z-0" />
      <div className="orb w-[300px] h-[300px] bg-p1 opacity-25 top-10 right-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .5 }}
          className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 text-center mb-2">
          Let's Build Together
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .6, delay: .1 }}
          className="font-display tracking-[.2em] uppercase text-p4 text-center mb-3"
          style={{ fontSize: "clamp(2rem,5vw,4.5rem)", textShadow: "0 0 60px rgba(214,189,152,.12)" }}>
          SEND ME EMAIL
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: .3 }}
          className="text-p3/75 text-sm text-center mb-14">
          Have a project in mind? Let's discuss it.
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* ── Form ── */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8, delay: .2, ease: [.23, 1, .32, 1] }}
            className="flex flex-col gap-4">

            <div className="grid sm:grid-cols-2 gap-4">
              {/* name attr must match EmailJS template variable */}
              <input
                type="text" name="from_name" placeholder="Your Name"
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                required className={inputClass} />
              <input
                type="email" name="from_email" placeholder="Your Email"
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                required className={inputClass} />
            </div>

            <input
              type="text" name="subject" placeholder="Subject"
              value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
              className={inputClass} />

            <textarea
              name="message" rows={6} placeholder="Your Message"
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              required className={`${inputClass} resize-none`} />

            <MagneticButton className="self-start">
              <button
                type="submit"
                disabled={status === STATUS.sending}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-[.68rem] tracking-[.2em] uppercase font-bold text-darker transition-all duration-300 disabled:opacity-60"
                style={btnStyle()}>
                {status === STATUS.sending
                  ? <><span className="w-3.5 h-3.5 border-2 border-darker/40 border-t-darker rounded-full animate-spin" /> Sending...</>
                  : <>{btnLabel()} {status === STATUS.idle && <HiArrowRight />}</>
                }
              </button>
            </MagneticButton>
          </motion.form>

          {/* ── Info Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: .8, delay: .35, ease: [.23, 1, .32, 1] }}
            className="rounded-2xl p-7 border border-p4/12 bg-p1/30 backdrop-blur-xl">
            <p className="font-mono text-[.65rem] tracking-[.3em] uppercase text-p4 mb-4">GET IN TOUCH</p>
            <p className="text-p3/80 text-sm leading-[1.85] mb-8">
              Have a project in mind or want to say hi? Feel free to reach out.
              I usually respond within 24 hours.
            </p>
            <div className="flex flex-col gap-6">
              {INFO.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-p4/8 border border-p4/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-p4 text-lg" />
                  </div>
                  <div>
                    <p className="font-mono text-[.58rem] tracking-[.2em] uppercase text-p3 mb-0.5">{label}</p>
                    <p className="text-[#e8e0d4] text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}