"use client"
import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration:1.4, easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)), smooth:true })
    document.querySelectorAll("a[href^='#']").forEach(a => {
      a.addEventListener("click", e => {
        const t = document.querySelector(a.getAttribute("href"))
        if(t){ e.preventDefault(); lenis.scrollTo(t,{offset:-80,duration:1.6}) }
      })
    })
    function raf(t){ lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  },[])
  return <>{children}</>
}