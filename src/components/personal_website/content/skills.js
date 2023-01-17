import Image from "next/image";

export default function Skills() {
    return(
        <>
            <h1 className="text-center text-color-text-header-light-blue font-bold text-[2.5rem] pb-[1vh]
                xl:text-6xl xl:pb-[5vh]">Skills</h1>
            <div className="text-color-text-body-white text-[1.1rem]
                xl:grid xl:grid-cols-4">
                <div className="flex justify-center">
                    <div className="border rounded-3xl w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.4rem] text-center xl:mb-[2vh]">Languages</div>
                        <div className="mb-[2vh] ml-[2vw]">
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
                        <div className="mb-[2vh] ml-[2vw]">
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
                        <div className="mb-[2vh] ml-[2vw]">
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
                    <div className="border rounded-3xl w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.4rem] text-center xl:mb-[2vh]">Web</div>
                        <div className="mb-[2vh] ml-[2vw]">
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
                        <div className="mb-[2vh] ml-[2vw]">
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
                        <div className="mb-[2vh] ml-[2vw]">
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
                    <div className="border rounded-3xl w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.4rem] text-center xl:mb-[2vh]">Database</div>
                        <div className="mb-[2vh] ml-[2vw]">
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
                        <div className="mb-[2vh] ml-[2vw]">
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
                        <div className="mb-[2vh] ml-[2vw]">
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
                    <div className="border rounded-3xl w-[60vw] xl:mr-[2vw] xl:w-[15vw] xl:mb-[5vh]">
                        <div className="font-bold text-[1.4rem] text-center xl:mb-[2vh]">Cloud</div>
                        <div className="mb-[2vh] ml-[2vw]">
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