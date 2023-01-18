import ImageContainer from "../imageContainer";

export default function Projects() {
    const websiteDescription = () =>{
        return(
            <div>
                <p>
                    This website is made with Next.js and Tailwind CSS.
                </p>
                <p>
                    Deployed from Github, hosted on Azure using Azure App Service
                </p>
            </div>
        )
    }
    const timeCourseDescription = () =>{
        return(
            <div>
                <p>
                    TimeCourse is an online appointments system for professors to host office hours.
                    Professors can create organizations and invite students via invitation code
                </p>
                <br/>
                <p>
                    Users have the option of syncing the appointment bookings with their Outlook calendar.
                </p>
            </div>
        )
    }

    const meetUTDescription = () =>{
        return(
            <div>
                <div>
                    MeetUT is a mobile social networking application for students in the same school to connect with
                    each other based on their profile.
                </div>
                <br/>
                <div>
                    Connections can chat with each other through instant messaging.
                </div>
            </div>
        )
    }
    return(
        <>
            <h1 id="projects" className="text-center text-color-text-header-dark-yellow font-bold text-[2rem] pb-[3vh]
                xl:text-[2.25rem] xl:pb-[5vh]">Personal Projects</h1>
            <div className="mb-[10vh] xl:flex xl:flex-row xl:ml-[1.75vw]">
                <div className="mb-[5vh] xl:mb-[3vh] xl:mr-[2vw]">
                    <ImageContainer
                        src="/landing_logo.png"
                        alt=""
                        description={websiteDescription()}
                        link="https://github.com/gordonlin-dev/personal-website"
                    />
                </div>
                <div className="mb-[5vh] xl:mb-[3vh] xl:mr-[2vw]">
                    <ImageContainer
                        src="/TimeCourse_logo.png"
                        alt=""
                        description={timeCourseDescription()}
                        link="https://github.com/gordonlin-dev"
                    />
                </div>
                <div>
                    <ImageContainer
                        src="/MeetUT_Logo.png"
                        alt=""
                        description={meetUTDescription()}
                        link="https://github.com/gordonlin-dev/MeetUT#meetut"
                    />
                </div>
            </div>
        </>
    )
}