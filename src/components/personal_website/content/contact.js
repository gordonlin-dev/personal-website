import Image from "next/image";

export default function Contact() {
    function click(e, url){
        e.preventDefault()
        window.open(url, "_blank")
    }
    return(
        <>
            <h1 id="contact" className="text-center text-color-text-header-light-blue font-bold text-[2.5rem] pb-[1vh]
                xl:text-[2.25rem] xl:pb-[5vh]">Contact Me</h1>
            <div className="flex justify-between ml-[8vw] mr-[8vw] pb-[3vh] xl:ml-[22vw] xl:mr-[22vw] xl:pb-[10vh]">
                <a href="mailto:gordonlin.dev@gmail.com">
                    <Image
                        src="/envelope-icon.png"
                        alt=""
                        width={125}
                        height={125}
                        className="h-[60px] w-[60px] relative z-[1] xl:h-[85px] xl:w-[85px]"
                    />
                </a>
                <a href="https://www.linkedin.com/in/gordonlin-dev/"
                   onClick={(e) => click(e, "https://www.linkedin.com/in/gordonlin-dev/")}>
                    <Image
                        src="/linkedin-icon.png"
                        alt=""
                        width={125}
                        height={125}
                        className="h-[60px] w-[60px] relative z-[1] xl:h-[85px] xl:w-[85px]"
                    />
                </a>
                <a href="https://github.com/gordonlin-dev"
                   onClick={(e) => click(e, "https://github.com/gordonlin-dev")}>
                    <Image
                        src="/github-icon.png"
                        alt=""
                        width={125}
                        height={125}
                        className="h-[60px] w-[60px] relative z-[1] xl:h-[85px] xl:w-[85px]"
                    />
                </a>
            </div>
        </>
    )
}