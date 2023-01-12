import {useEffect} from "react";

export default function TableOfContent(){
    useEffect(() => {
        const tableOfContentLinks = document.getElementById("table-of-content").children
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry =>{
                if(entry.isIntersecting){
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
            rootMargin: "-10% 0px -50% 0px"
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
                <li className= "mb-3" id="test1">
                    <a href="#test1" onClick={(e) => scroll(e, "test1")}>About me</a>
                </li>
                <li className= "mb-3" id="test2">
                    <a href="#test2" onClick={(e) => scroll(e, "test2")}>Experience</a>
                </li>
                <li className= "mb-3" id="test3">
                    <a href="#test3" onClick={(e) => scroll(e, "test3")}>Projects</a>
                </li>
                <li className= "mb-3" id="test4">
                    <a href="#test4" onClick={(e) => scroll(e, "test4")}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}