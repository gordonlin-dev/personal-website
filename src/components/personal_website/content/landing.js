import Image from "next/image";

export default function Landing() {
    return(
        <div className="flex justify-center">
            <Image
                src="/landing.png"
                alt=""
                width={3888}
                height={2592}
                className="w-screen h-auto lg:h-screen lg:w-screen lg:aspect-[2043∶1160]"
            />
        </div>
    )
}