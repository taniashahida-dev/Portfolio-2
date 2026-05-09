"use client"
import { useRef } from "react"
export default function MagneticButton({ children, strength=35, className="" }) {
  const ref = useRef(null)
  const onMove = e => {
    const el=ref.current; if(!el) return
    const r=el.getBoundingClientRect()
    const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2
    const f=Math.max(0,1-Math.sqrt(x*x+y*y)/Math.max(r.width,r.height))
    el.style.transform=`translate(${x*f*(strength/35)}px,${y*f*(strength/35)}px)`
  }
  const onLeave = () => {
    const el=ref.current; if(!el) return
    el.style.transition="transform 0.5s cubic-bezier(0.23,1,0.32,1)"
    el.style.transform="translate(0,0)"
    setTimeout(()=>{ if(el) el.style.transition="" },500)
  }
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`inline-block ${className}`}>{children}</div>
}