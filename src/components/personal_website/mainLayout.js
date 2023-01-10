export default function MainLayout({children}){
    return(
        <>
            <main className="bg-background-main h-screen w-screen">
                {children}
            </main>
        </>
    )
}