import TopNavigationMenu from "./topNavigationMenu";
export default function MainLayout({children}){
    return(
        <>
            <main className="bg-background-main h-screen w-screen overflow-hidden">
                <div className="h-16">
                    <TopNavigationMenu/>
                </div>
                <div>
                    {children}
                </div>
                {/*<div className="grid grid-rows-10" >
                    <div className="row-span-3 bg-background-header">
                        <TopNavigationMenu/>
                    </div>
                    <div className="row-span-7">
                        <div className="grid-cols-7">
                            <div className="col-span-6">
                                {children}
                            </div>
                            <div className="col-span-1">
                                <div>test</div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </main>
        </>
    )
}