export default function TopNavigationMenu(){
    return(
        <div className="grid grid-cols-12 place-items-center overflow-hidden
            font-sans text-color-text-body-white bg-background-header h-full">
            <div className="col-span-2">
                <div className="font-bold text-4xl">
                    Gordon Lin
                </div>
            </div>
            <div className="col-span-8">

            </div>
            <div className="col-span-2">
                <nav className="text-2xl h-full">
                    <a href="#Contact" className="hover:text-color-text-header-light-blue" >Contact</a>
                </nav>
            </div>
        </div>
    )
}