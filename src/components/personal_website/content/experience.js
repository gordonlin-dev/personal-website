export default function Experience() {
    return(
        <>
            <h1 id="experience" className="invisible">Experience</h1>
            <div className="grid grid-cols-2 grid-rows-2 pl-10 pr-10 pb-40">
                <div>
                    <h1
                        className="text-color-text-header-light-blue text-4xl text-center mb-5">Experience</h1>
                    <ul className="text-color-text-body-white text-xl">
                        <li className="mb-5">
                            <div className="font-bold text-2xl">
                                Software developer
                            </div>
                            <div className="flex justify-between">
                                <span>Environment Canada</span>
                                <span className="text-right">May 2021 - Present</span>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div className="font-bold text-2xl">
                                Software developer intern
                            </div>
                            <div className="flex justify-between">
                                <span>Environment Canada</span>
                                <span>May 2019 - Aug 2020</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ml-10">
                    <h1 className="text-color-text-header-light-blue text-4xl text-center mb-5">Education</h1>
                    <ul className="text-color-text-body-white text-xl">
                        <li className="mb-5">
                            <div className="font-bold text-2xl">
                                Honours Bachelor of Science - Computer Science
                            </div>
                            <div className="flex justify-between">
                                <span>University of Toronto</span>
                                <span className="text-right">Sep 2015 - May 2021</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-color-text-header-light-blue text-4xl text-center mb-5">Skills</h1>
                    <ul className="text-color-text-body-white text-xl">
                        <li className="mb-5">
                            <div className="font-bold text-2xl">
                                Programming languages
                            </div>
                            <div>
                                <span className="font-bold">Proficient: </span>
                                <span>C#, JavaScript</span>
                            </div>
                            <div>
                                <span className="font-bold">Working knowledge: </span>
                                <span>Python</span>
                            </div>
                        </li>
                        <li className="mb-5">
                            <div className="font-bold text-2xl">
                                Technologies
                            </div>
                            <div>
                                <span className="font-bold">Web: </span>
                                <span>ASP.NET Core, Blazor, Next.js</span>
                            </div>
                            <div>
                                <span className="font-bold">Databases: </span>
                                <span>Microsoft SQL, Cosmos DB, MongoDB, PostgreSQL</span>
                            </div>
                            <div>
                                <span className="font-bold">Cloud Platforms: </span>
                                <span>Azure</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ml-10">
                    <h1 className="text-color-text-header-light-blue text-4xl text-center mb-5">Certifications</h1>
                    <ul className="text-color-text-body-white text-xl list-disc list-inside">
                        <li className="mb-5">
                            Azure Fundamentals
                        </li>
                        <li className="mb-5">
                            Certified ScrumMaster
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}