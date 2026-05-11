"use client"
import Navbar            from "@/components/Navbar"
import HeroSection       from "@/components/HeroSection"
import AboutSection      from "@/components/AboutSection"

import ProjectsSection   from "@/components/ProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection        from "@/components/FAQSection"
import ContactSection    from "@/components/ContactSection"
import FooterSection     from "@/components/FooterSection"
import Skillssection from "@/components/Skillssection"





export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    <Skillssection></Skillssection>
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}