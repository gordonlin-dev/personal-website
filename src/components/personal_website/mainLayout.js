export default function MainLayout({children}){
    return(
        <>
            <main className="bg-background-main h-full w-full overflow-hidden">
                <div className="grid grid-rows-7" >
                    <div className="row-span-1 bg-background-header">
                        <div>
                            Test
                        </div>
                    </div>
                    <div className="row-span-6">
                        <div className="grid grid-cols-7">
                            <div className="col-span-6">
                                {children}
                            </div>
                            <div className="col-span-1">
                                <div>test</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}