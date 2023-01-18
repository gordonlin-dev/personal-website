import Image from "next/image"
export default function ImageContainer(props){
    function click(e){
        e.preventDefault()
        window.open(props.link, "_blank")
    }
    return (
        <>
            <div className="xl:hidden w-full">
                <a href={props.link}
                   onClick={(e) => click(e)}  className="relative flex justify-center mb-[2vh]">
                    <Image
                        src={props.src}
                        alt={props.alt}
                        width={400}
                        height={400}
                        className="h-[200px] w-[200px] relative z-[1] rounded-[3rem]"
                    />
                </a>
                <div className="text-color-text-body-white text-justify text-[1rem]">
                    {props.description}
                </div>
            </div>
            <div className="hidden xl:block group">
                <a href={props.link}
                   onClick={(e) => click(e)}
                   className="relative">
                    <Image
                        src={props.src}
                        alt={props.alt}
                        width={400}
                        height={400}
                        className="h-[400px] w-[400px] relative z-[1] rounded-[5rem]"
                    />
                    <div className=" hidden group-hover:flex text-color-text-body-white
                    absolute top-0 left-0 h-[400px] w-[400px] bg-background-main-transparent
                    justify-center items-center overflow-hidden z-[1]" >
                        <div className="text-2xl m-5">
                            {props.description}
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}