import TopNavigationMenu from "./topNavigationMenu";
import TableOfContent from "./tableOfContent";
export default function MainLayout({children}){
    return(
        <>
            <main className="h-full w-full relative">
                <div className="h-16 fixed top-0 left-0 right-0 z-[100]">
                    <TopNavigationMenu/>
                </div>
                <div className="mt-16 grid grid-cols-12 bg-background-main">
                    <div className="col-span-1">
                    </div>
                    <div className="col-span-9">
                        {children}
                    </div>
                    <div className="col-span-2">
                        <div className="flex w-full align-center justify-center h-full fixed top-[15%] left-[43%]">
                            <TableOfContent/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}