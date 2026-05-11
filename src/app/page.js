"use client"
import Navbar            from "@/components/Navbar"
import HeroSection       from "@/components/HeroSection"
import AboutSection      from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection   from "@/components/ProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection        from "@/components/FAQSection"
import ContactSection    from "@/components/ContactSection"
import FooterSection     from "@/components/FooterSection"




export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    <SkillsSection/>
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}