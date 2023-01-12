import Image from "next/image"
export default function ImageContainer(props){
    function click(e){
        e.preventDefault()
        window.open(props.link, "_blank")
    }
    return (
        <a href={props.link} onClick={(e) => click(e)}>
            <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
                height={props.height}
            />
            <div>
                {props.description}
            </div>
        </a>
    )
}