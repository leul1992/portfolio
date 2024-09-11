import Header from "@/components/header/header";
import Projects from "@/components/projects/projects";
import Skill from "@/components/skills/skills";
import Introduction from "@/components/introduction/introduction";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import SocialMedia from "@/components/socialSideBar/sidebar";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="relative flex flex-col md:flex-row pt-16 items-center md:pt-0">
        {/* Social Media Sidebar */}
        <SocialMedia />
        
        {/* Main Content */}
        <div className="mt-4 lg:ml-20"> {/* Add margin for large screens, top margin for small screens */}
          <Introduction />
          <Skill />
          <Projects />
          <Contact />
        </div>
      </div>
          <Footer />
    </div>
  );
}
