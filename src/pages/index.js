import MainLayout from "../components/personal_website/mainLayout";
import AboutMe from "../components/personal_website/content/aboutMe";
import Experience from "../components/personal_website/content/experience";
import Projects from "../components/personal_website/content/projects";
import Contact from "../components/personal_website/content/contact";
import Landing from "../components/personal_website/content/landing";
import Skills from "../components/personal_website/content/skills";
import TableOfContent from "../components/personal_website/tableOfContent";


export default function Index() {
  return (
      <MainLayout>
          <TableOfContent/>
          <Landing/>
          <div className="pl-[10vw] pr-[10vw] xl:ml-[5vw] xl:mr-[5vw] xl:pt-[8vh] bg-background-main">
              <AboutMe/>
              <Skills/>
              <Projects/>
              <Experience/>
              <Contact/>
          </div>
      </MainLayout>
  )
}

