import ImageContainer from "../imageContainer";

export default function Projects() {
    const websiteDescription = () =>{
        return(
            <div>
                <div>
                    This website is made with Next.js and Tailwind CSS.
                </div>
                <br/>
                <div>
                    Deployed from Github, hosted on Azure using Azure App Service
                </div>
            </div>
        )
    }
    const timeCourseDescription = () =>{
        return(
            <div>
                <div>
                    TimeCourse is an online appointments system for professors to host office hours.
                    Professors can create organizations and invite students via invitation code
                </div>
                <br/>
                <div>
                    Users have the option of syncing the appointment bookings with their Outlook calendar.
                </div>
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
            <h1 id="projects" className="invisible">projects</h1>
            <div className="grid grid-rows-1 grid-cols-3 pb-40 gap-x-20">
                <div>
                    <ImageContainer
                        src="/github-logo-1.png"
                        alt=""
                        width="300"
                        height="300"
                        description={websiteDescription()}
                        link="https://github.com/gordonlin-dev/personal-website"
                    />
                </div>
                <div>
                    <ImageContainer
                        src="/TimeCourse_logo.png"
                        alt=""
                        width="300"
                        height="300"
                        description={timeCourseDescription()}
                        link="https://github.com/gordonlin-dev"
                    />
                </div>
                <div>
                    <ImageContainer
                        src="/MeetUT_Logo.png"
                        alt=""
                        width="300"
                        height="300"
                        description={meetUTDescription()}
                        link="https://github.com/gordonlin-dev"
                    />
                </div>
            </div>
        </>
    )
}