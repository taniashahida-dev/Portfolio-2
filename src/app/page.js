"use client"
import Navbar            from "@/components/Navbar"
import HeroSection       from "@/components/HeroSection"
import AboutSection      from "@/components/AboutSection"

import ProjectsSection   from "@/components/ProjectsSection"
import FAQSection        from "@/components/FAQSection"
import ContactSection    from "@/components/ContactSection"
import FooterSection     from "@/components/FooterSection"
import Skillssection from "@/components/Skillssection"
import EducationSection from "@/components/EducationSection"





export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
    <Skillssection></Skillssection>
      <ProjectsSection />
      <EducationSection></EducationSection>
     
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}