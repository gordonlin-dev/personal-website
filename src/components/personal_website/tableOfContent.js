import {useEffect} from "react";

export default function TableOfContent(){
    useEffect(() => {
        const validHeaderIds = ["about-me","skills","experience", "projects", "contact"]
        const tableOfContent = document.getElementById("table-of-content")
        const tableOfContentLinks = tableOfContent.children[0].children
        let lastIntersected = "about-me";
        const observer = new IntersectionObserver(entries => {
            let tableOfContentVisible = false;
            entries.forEach(entry =>{
                if(entry.isIntersecting && validHeaderIds.includes(entry.target.id)){
                    tableOfContentVisible = true;
                    lastIntersected = entry.target.id
                    const currentId = entry.target.id
                    for (let i = 0; i < tableOfContentLinks.length; i++){
                        const id = tableOfContentLinks[i].id
                        if(id === currentId){
                            tableOfContentLinks[i].children[0].style.color = "#A6C2C9";
                        }else{
                            tableOfContentLinks[i].children[0].style.color = "#FFFFFF";
                        }
                    }
                }
            })
            tableOfContentVisible = tableOfContentVisible || lastIntersected !== "about-me"
            tableOfContent.style.visibility = tableOfContentVisible ? "visible"  : "hidden";
        }, {
            rootMargin: "-20% 0px -20% 0px"
        })
        const headings = Array.from(document.querySelectorAll("h1"));
        headings.forEach((element) => observer.observe(element))
        return () => observer.disconnect()
    })
    function scroll(e, id){
        e.preventDefault()
        document.querySelector("h1#" + id).scrollIntoView(
            {
                behavior: "smooth",
                block:"center",
                inline: "center"
            }
        )
    }
    return(
        <nav id="table-of-content" className="hidden invisible xl:block xl:z-50 xl:fixed xl:top-[0vh]
        xl:left-[35vw] bg-background-main-transparent
        xl:rounded-[2rem] xl:pt-[1vh] xl:pb-[1vh] xl:pl-[1.5vw] xl:pr-[1.5vw]">
            <div className="text-color-text-body-white text-[1.25rem] flex flex-row justify-center" >
                <div className= "mr-[2vw] hover:text-color-text-header-light-blue" id="about-me">
                    <a href="#about-me" onClick={(e) => scroll(e, "about-me")}>About me</a>
                </div>
                <div className= "mr-[2vw] hover:text-color-text-header-light-blue" id="skills">
                    <a href="#skills" onClick={(e) => scroll(e, "skills")}>Skills</a>
                </div>
                <div className= "mr-[2vw] hover:text-color-text-header-light-blue" id="projects">
                    <a href="#projects" onClick={(e) => scroll(e, "projects")}>Projects</a>
                </div>
                <div className= "mr-[2vw] hover:text-color-text-header-light-blue" id="experience">
                    <a href="#experience" onClick={(e) => scroll(e, "experience")}>Experience</a>
                </div>
                <div className= "hover:text-color-text-header-light-blue" id="contact">
                    <a href="#contact" onClick={(e) => scroll(e, "contact")}>Contact</a>
                </div>
            </div>
        </nav>
    )
}