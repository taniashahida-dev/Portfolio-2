"use client"
import { useEffect, useState } from "react"
export default function ScrollProgressBar() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener("scroll", fn, { passive:true })
    return () => window.removeEventListener("scroll", fn)
  },[])
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[999999] pointer-events-none">
      <div className="h-full transition-none shadow-[0_0_10px_rgba(214,189,152,0.7)]"
        style={{ width:`${pct}%`, background:"linear-gradient(90deg,#40534C,#677D6A,#D6BD98)" }} />
    </div>
  )
}