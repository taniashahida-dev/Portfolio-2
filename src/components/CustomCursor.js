"use client"
import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const trails   = useRef([])
  const mouse    = useRef({ x:-100, y:-100 })
  const ringPos  = useRef({ x:-100, y:-100 })
  const hist     = useRef(Array(14).fill({ x:-100, y:-100 }))
  const isPtr    = useRef(false)
  const rafId    = useRef(null)

  useEffect(() => {
    const dot=dotRef.current, ring=ringRef.current
    if(!dot||!ring) return
    const dotEl=dot.firstChild, ringEl=ring.firstChild

    const move = e => {
      mouse.current = { x:e.clientX, y:e.clientY }
      dot.style.transform = `translate(${e.clientX-3}px,${e.clientY-3}px)`
    }
    const over = e => {
      const el = e.target
      const ptr = !!(el.tagName==="A"||el.tagName==="BUTTON"||el.closest("a")||el.closest("button"))
      if(ptr===isPtr.current) return
      isPtr.current = ptr
      if(ptr) {
        ringEl.style.width="52px"; ringEl.style.height="52px"
        ringEl.style.borderRadius="10px"
        ringEl.style.borderColor="rgba(214,189,152,0.9)"
        ringEl.style.background="rgba(214,189,152,0.07)"
        dotEl.style.width="4px"; dotEl.style.height="4px"
      } else {
        ringEl.style.width="36px"; ringEl.style.height="36px"
        ringEl.style.borderRadius="50%"
        ringEl.style.borderColor="rgba(214,189,152,0.45)"
        ringEl.style.background="rgba(214,189,152,0.03)"
        dotEl.style.width="6px"; dotEl.style.height="6px"
      }
    }
    const down = () => { ringEl.style.width="18px"; ringEl.style.height="18px" }
    const up   = () => { ringEl.style.width=isPtr.current?"52px":"36px"; ringEl.style.height=isPtr.current?"52px":"36px" }
    const leave = () => { dot.style.opacity="0"; ring.style.opacity="0"; trails.current.forEach(t=>{if(t)t.style.opacity="0"}) }
    const enter = () => { dot.style.opacity="1"; ring.style.opacity="1" }

    const animate = () => {
      const {x,y}=mouse.current
      ringPos.current.x += (x-ringPos.current.x)*0.12
      ringPos.current.y += (y-ringPos.current.y)*0.12
      ring.style.transform=`translate(${ringPos.current.x-18}px,${ringPos.current.y-18}px)`
      hist.current = [{x,y},...hist.current.slice(0,-1)]
      trails.current.forEach((el,i)=>{
        if(!el) return
        const h=hist.current[Math.min(i*2+2,hist.current.length-1)]
        el.style.transform=`translate(${h.x-2}px,${h.y-2}px)`
        el.style.opacity=((6-i)/6*0.3).toFixed(2)
        const s=(4-i*0.5).toFixed(1)
        el.style.width=s+"px"; el.style.height=s+"px"
      })
      rafId.current=requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove",move,{passive:true})
    window.addEventListener("mouseover",over,{passive:true})
    window.addEventListener("mousedown",down)
    window.addEventListener("mouseup",up)
    document.documentElement.addEventListener("mouseleave",leave)
    document.documentElement.addEventListener("mouseenter",enter)
    rafId.current=requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("mousemove",move)
      window.removeEventListener("mouseover",over)
      window.removeEventListener("mousedown",down)
      window.removeEventListener("mouseup",up)
      document.documentElement.removeEventListener("mouseleave",leave)
      document.documentElement.removeEventListener("mouseenter",enter)
      cancelAnimationFrame(rafId.current)
    }
  },[])

  const S = { position:"fixed",top:0,left:0,pointerEvents:"none",willChange:"transform" }
  return (
    <>
      <div ref={dotRef} style={{...S,zIndex:999999}}>
        <div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#D6BD98",transition:"width .2s,height .2s"}}/>
      </div>
      <div ref={ringRef} style={{...S,zIndex:999998}}>
        <div style={{width:"36px",height:"36px",borderRadius:"50%",border:"1.5px solid rgba(214,189,152,0.45)",background:"rgba(214,189,152,0.03)",transition:"width .35s cubic-bezier(.23,1,.32,1),height .35s cubic-bezier(.23,1,.32,1),border-radius .35s cubic-bezier(.23,1,.32,1),border-color .25s,background .25s"}}/>
      </div>
      {Array.from({length:6}).map((_,i)=>(
        <div key={i} ref={el=>trails.current[i]=el} style={{...S,zIndex:999997-i}}>
          <div style={{width:"4px",height:"4px",borderRadius:"50%",background:"#D6BD98"}}/>
        </div>
      ))}
    </>
  )
}