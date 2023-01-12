import Image from "next/image";

export default function Contact() {
    function click(e, url){
        e.preventDefault()
        window.open(url, "_blank")
    }
    return(
        <>
            <h1 id="contact" className="text-color-text-header-light-blue
                font-bold text-center text-4xl mb-24">Contact Me</h1>
            <div className="pb-32 grid grid-cols-1 pl-52 pr-52">
                <div className="flex justify-between">
                    <a href="mailto:gordonlin.dev@gmail.com">
                        <Image
                            src="/envelope-icon.png"
                            alt=""
                            width={125}
                            height={125}
                            className="relative z-[1]"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/gordonlin-dev/"
                       onClick={(e) => click(e, "https://www.linkedin.com/in/gordonlin-dev/")}>
                        <Image
                            src="/linkedin-icon.png"
                            alt=""
                            width={125}
                            height={125}
                            className="relative z-[1]"
                        />
                    </a>
                    <a href="https://github.com/gordonlin-dev"
                       onClick={(e) => click(e, "https://github.com/gordonlin-dev")}>
                        <Image
                            src="/github-icon.png"
                            alt=""
                            width={125}
                            height={125}
                            className="relative z-[1]"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}