import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";
import Education from "@/components/education/education";
import Skill from "@/components/skills/skills";
import Introduction from "@/components/introduction/introduction";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import SocialMedia from "@/components/socialSideBar/sidebar";
import { CursorEffect } from "@/components/cursor/cursor-effect";
import { BackgroundPattern } from "@/components/background/background-patter";
import Experience from "@/components/experience/experience";
import Testimonials from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Special Effects */}
      <CursorEffect />
      <BackgroundPattern />

      {/* Header */}
      <Header />

      <div className="relative flex flex-col md:flex-row pt-16 items-center md:pt-0">
        {/* Social Media Sidebar */}
        <SocialMedia />

        {/* Main Content */}
        <main className="mt-4 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Introduction />
          <Education />
          <Skill />
          <Experience />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}
