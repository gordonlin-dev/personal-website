import TopNavigationMenu from "./topNavigationMenu";
import TableOfContent from "./TableOfContent";
export default function MainLayout({children}){
    return(
        <>
            <main className="h-full w-full relative">
                <div className="h-16 fixed top-0 left-0 right-0">
                    <TopNavigationMenu/>
                </div>
                <div className="mt-16 grid grid-cols-12 bg-background-main">
                    <div className="col-span-1">
                    </div>
                    <div className="col-span-9">
                        {children}
                    </div>
                    <div className="col-span-2">
                        <div className="flex w-full align-center justify-center h-full fixed top-[30%] left-[43%]">
                            <TableOfContent/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}