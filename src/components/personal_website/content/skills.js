import Image from "next/image";

export default function Skills() {
    return(
        <>
            <h1 className="text-center text-color-text-header-dark-yellow font-bold text-[2rem] pb-[1vh]
                xl:text-[2.25rem] xl:pb-[5vh]">Skills</h1>
            <div className="text-color-text-body-white text-[1rem] mb-[5vh]
                xl:grid xl:grid-cols-4 xl:mb-[10vh] xl:ml-[2vw]">
                <div className="flex justify-center">
                    <div className="border-[0.3rem] rounded-3xl border-gray-800 w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.3rem] text-center mt-[3vh] mb-[2vh]
                        xl:mb-[3vh] text-color-text-header-light-blue">Languages</div>
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/csharp.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                C#
                            </div>
                        </div>
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/javascript.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                JavaScript
                            </div>
                        </div>
                        <div className="mb-[4vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/python.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                               Python
                            </div>
                        </div>
                    </div>
                </div>
                <br className="xl:hidden"/>
                <div className="flex justify-center">
                    <div className="border-[0.3rem] rounded-3xl border-gray-800 w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.3rem] text-center mt-[3vh] mb-[2vh]
                        xl:mb-[3vh] text-color-text-header-light-blue">Web</div>
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/dotnetcore.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                ASP.NET Core
                            </div>
                        </div>
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/blazor.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                Blazor
                            </div>
                        </div>
                        <div className="mb-[4vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/nextjs.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                NEXT.js
                            </div>
                        </div>
                    </div>
                </div>
                <br className="xl:hidden"/>
                <div className="flex justify-center">
                    <div className="border-[0.3rem] rounded-3xl border-gray-800 w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.3rem]
                        text-center mt-[3vh] mb-[2vh] xl:mb-[3vh] text-color-text-header-light-blue">Database</div>
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/sql.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                Microsoft SQL
                            </div>
                        </div>
                        <div className="mb-[2vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/mongodb.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                MongoDB
                            </div>
                        </div>
                        <div className="mb-[4vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/postgre.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                PostgreSQL
                            </div>
                        </div>
                    </div>
                </div>
                <br className="xl:hidden"/>
                <div className="flex justify-center">
                    <div className="border-[0.3rem] rounded-3xl border-gray-800 w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.3rem]
                        text-center mt-[3vh] mb-[2vh] xl:mb-[3vh] text-color-text-header-light-blue">Cloud</div>
                        <div className="mb-[4vh] ml-[5vw] xl:ml-[2vw]">
                            <Image
                                src="/skills_logos/azure.png"
                                alt=""
                                width={512}
                                height={512}
                                className="w-[50px] h-[50px] inline rounded-full overflow-hidden"
                            />
                            <div className="inline ml-[3vw] xl:ml-[1vw]">
                                Azure
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}