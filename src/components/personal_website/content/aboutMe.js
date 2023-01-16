import Image from "next/image";

export default function AboutMe() {
    return(
        <>
            <h1 id="about-me" className="invisible">About me</h1>
            <div className="grid grid-cols-12 pb-40">
                <div className="col-span-5 h-[475px] w-[475px] rounded-full overflow-hidden">
                    <Image
                        src="/profile.jpg"
                        alt=""
                        width={441}
                        height={511}
                        className="h-full w-full relative z-[0]"
                    />
                </div>
                <div className="col-span-7 flex items-center">
                    <div>
                        <h1 className="text-color-text-header-dark-yellow font-bold text-4xl mb-5">About me</h1>
                        <p className="text-color-text-body-white text-2xl text-justify">
                            Hi I am Gordon, a software developer with three years of experience based in Toronto, Canada.
                            I am a full stack developer with a focus on backend development.
                            My interests are in cloud computing, observability and distributed systems.
                            Aside from coding, I like to workout and cook.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}