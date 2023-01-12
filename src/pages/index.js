import MainLayout from "../components/personal_website/mainLayout";
import AboutMe from "../components/personal_website/content/aboutMe";
import Experience from "../components/personal_website/content/experience";
import Projects from "../components/personal_website/content/projects";
import Contact from "../components/personal_website/content/contact";


export default function Index() {
  return (
      <>
        <MainLayout>
            <div id="body" className="pt-20 pl-10 pr-10 pb-10">
                <AboutMe/>
                <Experience/>
                <Projects/>
                <Contact/>
            </div>
        </MainLayout>
      </>
  )
}

