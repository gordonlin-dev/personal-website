import Head from 'next/head'
import Image from 'next/image'
import MainLayout from "../components/personal_website/mainLayout";

export default function Index() {
  return (
      <>
        <Head>
            <title>Gordon Lin</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <MainLayout>
            <div className="text-color-text-header-dark-yellow">
                hello
            </div>
            <div className="text-color-text-header-light-blue">
                hello
            </div>
            <div className="text-color-text-body-white">
                hello
            </div>
        </MainLayout>
      </>
  )
}

