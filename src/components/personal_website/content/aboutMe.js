import Image from "next/image";

export default function AboutMe() {
    return(
        <>
            <h1 id="about-me" className="invisible">About me</h1>
            <div className="xl:grid xl:grid-cols-2">
                <div>
                    <div className="flex justify-center lg:block">
                        <div className="h-[200px] w-[200px] md:h-[350px] md:w-[350px] xl:h-[500px]
                            xl:w-[500px] rounded-full overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt=""
                                width={2715}
                                height={3220}
                                className="aspect-[543/644]"
                            />
                        </div>
                    </div>
                </div>
                <br className="xl:hidden"/>
                <div>
                    <h1 className="text-color-text-header-dark-yellow font-bold text-[2.5rem] xl:text-6xl xl:pb-[2vh]">About me</h1>
                    <p className="text-color-text-body-white text-[1.1rem] xl:text-[1.5rem] text-justify">
                        Hi I am Gordon, a software developer with three years of experience based in Toronto, Canada.
                        I am a full stack developer with a focus on backend development.
                        My interests are in cloud computing, observability and distributed systems.
                        Aside from coding, I like to workout and cook.
                    </p>
                </div>
            </div>
        </>
    )
}