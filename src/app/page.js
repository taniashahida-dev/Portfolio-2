"use client"
import Navbar            from "@/components/Navbar"
import HeroSection       from "@/components/HeroSection"
import AboutSection      from "@/components/AboutSection"

import ProjectsSection   from "@/components/ProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection        from "@/components/FAQSection"
import ContactSection    from "@/components/ContactSection"
import FooterSection     from "@/components/FooterSection"
import SkillsSection from "@/components/Skillssection"


export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
     <SkillsSection></SkillsSection>
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}