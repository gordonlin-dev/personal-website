import {useEffect} from "react";

export default function TableOfContent(){
    useEffect(() => {
        const validHeaderIds = ["about-me", "experience", "projects", "contact"]
        const tableOfContentLinks = document.getElementById("table-of-content").children
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry =>{
                if(entry.isIntersecting && validHeaderIds.includes(entry.target.id)){
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
        }, {
            rootMargin: "-10% 0px -40% 0px"
        })
        const headings = Array.from(document.querySelectorAll("h1"));
        headings.forEach((element) => observer.observe(element))
        return () => observer.disconnect()
    })
    function scroll(e, id){
        e.preventDefault()
        document.querySelector("#" + id).scrollIntoView(
            {
                behavior: "smooth",
                block:"center",
                inline: "center"
            }
        )
    }
    return(
        <nav>
            <ul className="text-color-text-body-white text-2xl" id="table-of-content">
                <li className= "mb-3" id="about-me">
                    <a href="#about-me" onClick={(e) => scroll(e, "about-me")}>About me</a>
                </li>
                <li className= "mb-3" id="experience">
                    <a href="#experience" onClick={(e) => scroll(e, "experience")}>Experience</a>
                </li>
                <li className= "mb-3" id="projects">
                    <a href="#projects" onClick={(e) => scroll(e, "projects")}>Projects</a>
                </li>
                <li className= "mb-3" id="contact">
                    <a href="#contact" onClick={(e) => scroll(e, "contact")}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}