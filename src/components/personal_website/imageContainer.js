import Image from "next/image"
export default function ImageContainer(props){
    const containerHeightClass = ` h-[${props.height}px]`
    const containerWidthClass = ` w-[${props.width}px]`
    function click(e){
        e.preventDefault()
        window.open(props.link, "_blank")
    }
    return (
        <div className=" group h-[400px] w-[400px]">
            <a href={props.link}
               onClick={(e) => click(e)}
               className="relative">
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={400}
                    height={400}
                    className="h-[400px] w-[400px] relative z-[0]"
                />
                <div className=" hidden group-hover:flex text-color-text-body-white
                    absolute top-0 left-0 h-[400px] w-[400px] bg-background-main-transparent
                    justify-center items-center overflow-hidden" >
                    <div className="text-2xl">
                        {props.description}
                    </div>
                </div>
            </a>
        </div>
    )
}