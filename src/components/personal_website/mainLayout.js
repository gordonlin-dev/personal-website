import TopNavigationMenu from "./topNavigationMenu";
import TableOfContent from "./tableOfContent";
export default function MainLayout({children}){
    return(
        <main className="bg-black">
            {children}
        </main>
    )
}