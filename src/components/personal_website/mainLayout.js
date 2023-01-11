import TopNavigationMenu from "./topNavigationMenu";
export default function MainLayout({children}){
    return(
        <>
            <main className="bg-background-main h-screen w-screen overflow-auto relative">
                <div className="h-16 fixed top-0 left-0 right-0">
                    <TopNavigationMenu/>
                </div>
                <div className="mt-16">
                    {children}
                </div>
            </main>
        </>
    )
}