import Image from "next/image";

export default function Experience() {
    return(
        <>
            <h1 id="experience" className="invisible">Experience</h1>
            <div className="xl:grid xl:grid-cols-2 xl:mb-[10vh]">
                <div className="text-color-text-body-white text-[1.1rem] xl:border-r-2">
                    <h1 className="text-center text-color-text-header-dark-yellow font-bold text-[2.5rem] pb-[1vh]
                        xl:text-[2.25rem] xl:pb-[2vh] xl:text-color-text-header-dark-yellow">Experience</h1>
                    <div className="mb-[2vh] ml-[2vw] flex flex-row xl:mb-[1vh]">
                        <Image
                            src="/skills_logos/environmentcanada.jpg"
                            alt=""
                            width={512}
                            height={512}
                            className="w-[60px] h-[60px] inline rounded-full overflow-hidden"
                        />
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <div>Software Developer</div>
                            <div className="text-[0.9rem]">Environment Canada</div>
                            <div className="text-[0.9rem]">May 2021 - Present</div>
                        </div>
                    </div>
                    <div className="mb-[2vh] ml-[2vw] flex flex-row">
                        <Image
                            src="/skills_logos/environmentcanada.jpg"
                            alt=""
                            width={512}
                            height={512}
                            className="w-[60px] h-[60px] inline rounded-full overflow-hidden"
                        />
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <div>Software Developer Intern</div>
                            <div className="text-[0.9rem]">Environment Canada</div>
                            <div className="text-[0.9rem]">May 2019 - Aug 2020</div>
                        </div>
                    </div>
                </div>
                <div className="xl:ml-[2vw]">
                    <div className="text-color-text-body-white text-[1.1rem]">
                        <h1 className="text-center text-color-text-header-light-blue font-bold text-[2.5rem] pb-[1vh]
                xl:text-[2.25rem] xl:pb-[2vh] xl:text-color-text-header-dark-yellow">Education</h1>
                        <div className="mb-[2vh] ml-[2vw] flex flex-row xl:mb-[1vh]">
                            <Image
                                src="/skills_logos/uoft.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[60px] h-[60px] inline rounded-full overflow-hidden"
                            />
                            <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                                <div>BSc - Computer Science</div>
                                <div className="text-[0.9rem]">University of Toronto</div>
                                <div className="text-[0.9rem]">Sep 2015 - May 2021</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-color-text-body-white text-[1.1rem] pb-[1vh]">
                        <h1 className="text-center text-color-text-header-dark-yellow font-bold text-[2.5rem] pb-[1vh]
                xl:text-[2.25rem] xl:pb-[2vh] xl:text-color-text-header-dark-yellow">Certifications</h1>
                        <div className="mb-[2vh] ml-[2vw] flex flex-row">
                            <Image
                                src="/skills_logos/azurefundamentals.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[60px] h-[60px] inline rounded-full overflow-hidden"
                            />
                            <div className="ml-[5vw] h-[60px] flex items-center xl:ml-[2vw]">
                                <div>Azure Fundamentals</div>
                            </div>
                        </div>
                        <div className="mb-[2vh] ml-[2vw] flex flex-row">
                            <Image
                                src="/skills_logos/csm.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[60px] h-[60px] inline rounded-full overflow-hidden"
                            />
                            <div className="ml-[5vw] h-[60px] flex items-center xl:ml-[2vw]">
                                <div>Certified ScrumMaster</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}