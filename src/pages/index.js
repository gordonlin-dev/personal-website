import MainLayout from "../components/personal_website/mainLayout";
import AboutMe from "../components/personal_website/content/aboutMe";
import Experience from "../components/personal_website/content/experience";
import Projects from "../components/personal_website/content/projects";
import Contact from "../components/personal_website/content/contact";
import Landing from "../components/personal_website/content/landing";


export default function Index() {
  return (
      <MainLayout>
          <Landing/>
          <div className="pl-[12vw] pr-[12vw] lg:pt-[8vh]">
              <AboutMe/>
          </div>
      </MainLayout>
  )
}

