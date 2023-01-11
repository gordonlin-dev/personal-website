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
            <div id="body">
                <h1 id="test1" className="text-color-text-body-white text-3xl">Test 1</h1>
                <div className="text-color-text-body-white text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis quam elit. Cras fringilla neque tellus, quis consequat lacus convallis vehicula. Curabitur eget lobortis urna. Curabitur aliquet, purus in finibus varius, metus lorem ultrices diam, eget dignissim ipsum odio et nisl. Duis aliquet malesuada ex commodo convallis. Nam enim magna, hendrerit vitae justo in, dapibus consectetur est. Duis blandit in mauris cursus mattis. Sed vulputate lobortis ipsum, quis malesuada mi tempus sed. Integer vitae arcu eget est tempor ultricies sollicitudin et sapien. Ut congue aliquet velit, eu ultrices velit euismod et. Nam luctus urna non velit elementum sollicitudin. Donec id commodo dolor. Fusce posuere erat quis iaculis feugiat. Duis et augue non felis luctus vehicula. Sed non risus neque.

                    Mauris id sapien malesuada dolor semper luctus et ac diam. Nulla molestie ipsum velit, eu imperdiet dui hendrerit eu. Nam hendrerit orci non vulputate efficitur. Suspendisse facilisis lacinia metus non mollis. Maecenas imperdiet eros et eros dictum pellentesque. Pellentesque ornare magna ut purus ultrices, nec blandit dolor suscipit. Nullam non est turpis. Integer egestas tempor tristique. Cras mollis nec lacus vitae porta. In volutpat orci nibh, vel ultrices arcu suscipit ut. Nam vestibulum commodo lorem. Quisque vitae mi libero. Aliquam metus nibh, mollis non viverra et, ullamcorper a mauris. Phasellus odio nisi, vulputate at lacus nec, sagittis imperdiet orci. In id leo at sem commodo lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Pellentesque arcu risus, malesuada eget varius ut, sagittis id neque. Quisque quis turpis vitae magna dictum egestas. Suspendisse pellentesque urna eget tellus convallis, eu interdum sapien interdum. Cras eu nisi vehicula, suscipit lacus id, tincidunt nibh. Suspendisse pellentesque ipsum tellus, at blandit ex viverra id. In dignissim, orci et ullamcorper consectetur, orci erat iaculis ante, nec mollis eros leo quis enim. Duis rhoncus tortor non suscipit elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum accumsan, dolor quis egestas porttitor, quam turpis lobortis mi, sed molestie urna purus sit amet lorem.

                    Nullam interdum lectus erat, et euismod sem porttitor et. Pellentesque quis sapien iaculis, ultrices enim eget, mollis dui. Aliquam auctor elit sit amet dolor rhoncus, quis lobortis neque fermentum. Aliquam finibus magna nec ligula malesuada, eget viverra odio facilisis. In venenatis molestie justo. Quisque a efficitur purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ultricies condimentum ex, quis egestas diam tincidunt sit amet.

                    In condimentum nibh eget dolor finibus
                </div>
                <h1 id="test2" className="text-color-text-body-white text-3xl">Test 2</h1>
                <div className="text-color-text-body-white text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis quam elit. Cras fringilla neque tellus, quis consequat lacus convallis vehicula. Curabitur eget lobortis urna. Curabitur aliquet, purus in finibus varius, metus lorem ultrices diam, eget dignissim ipsum odio et nisl. Duis aliquet malesuada ex commodo convallis. Nam enim magna, hendrerit vitae justo in, dapibus consectetur est. Duis blandit in mauris cursus mattis. Sed vulputate lobortis ipsum, quis malesuada mi tempus sed. Integer vitae arcu eget est tempor ultricies sollicitudin et sapien. Ut congue aliquet velit, eu ultrices velit euismod et. Nam luctus urna non velit elementum sollicitudin. Donec id commodo dolor. Fusce posuere erat quis iaculis feugiat. Duis et augue non felis luctus vehicula. Sed non risus neque.

                    Mauris id sapien malesuada dolor semper luctus et ac diam. Nulla molestie ipsum velit, eu imperdiet dui hendrerit eu. Nam hendrerit orci non vulputate efficitur. Suspendisse facilisis lacinia metus non mollis. Maecenas imperdiet eros et eros dictum pellentesque. Pellentesque ornare magna ut purus ultrices, nec blandit dolor suscipit. Nullam non est turpis. Integer egestas tempor tristique. Cras mollis nec lacus vitae porta. In volutpat orci nibh, vel ultrices arcu suscipit ut. Nam vestibulum commodo lorem. Quisque vitae mi libero. Aliquam metus nibh, mollis non viverra et, ullamcorper a mauris. Phasellus odio nisi, vulputate at lacus nec, sagittis imperdiet orci. In id leo at sem commodo lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Pellentesque arcu risus, malesuada eget varius ut, sagittis id neque. Quisque quis turpis vitae magna dictum egestas. Suspendisse pellentesque urna eget tellus convallis, eu interdum sapien interdum. Cras eu nisi vehicula, suscipit lacus id, tincidunt nibh. Suspendisse pellentesque ipsum tellus, at blandit ex viverra id. In dignissim, orci et ullamcorper consectetur, orci erat iaculis ante, nec mollis eros leo quis enim. Duis rhoncus tortor non suscipit elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum accumsan, dolor quis egestas porttitor, quam turpis lobortis mi, sed molestie urna purus sit amet lorem.

                    Nullam interdum lectus erat, et euismod sem porttitor et. Pellentesque quis sapien iaculis, ultrices enim eget, mollis dui. Aliquam auctor elit sit amet dolor rhoncus, quis lobortis neque fermentum. Aliquam finibus magna nec ligula malesuada, eget viverra odio facilisis. In venenatis molestie justo. Quisque a efficitur purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ultricies condimentum ex, quis egestas diam tincidunt sit amet.

                    In condimentum nibh eget dolor finibus
                </div>
                <h1 id="test3" className="text-color-text-body-white text-3xl">Test 3</h1>
                <div className="text-color-text-body-white text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis quam elit. Cras fringilla neque tellus, quis consequat lacus convallis vehicula. Curabitur eget lobortis urna. Curabitur aliquet, purus in finibus varius, metus lorem ultrices diam, eget dignissim ipsum odio et nisl. Duis aliquet malesuada ex commodo convallis. Nam enim magna, hendrerit vitae justo in, dapibus consectetur est. Duis blandit in mauris cursus mattis. Sed vulputate lobortis ipsum, quis malesuada mi tempus sed. Integer vitae arcu eget est tempor ultricies sollicitudin et sapien. Ut congue aliquet velit, eu ultrices velit euismod et. Nam luctus urna non velit elementum sollicitudin. Donec id commodo dolor. Fusce posuere erat quis iaculis feugiat. Duis et augue non felis luctus vehicula. Sed non risus neque.

                    Mauris id sapien malesuada dolor semper luctus et ac diam. Nulla molestie ipsum velit, eu imperdiet dui hendrerit eu. Nam hendrerit orci non vulputate efficitur. Suspendisse facilisis lacinia metus non mollis. Maecenas imperdiet eros et eros dictum pellentesque. Pellentesque ornare magna ut purus ultrices, nec blandit dolor suscipit. Nullam non est turpis. Integer egestas tempor tristique. Cras mollis nec lacus vitae porta. In volutpat orci nibh, vel ultrices arcu suscipit ut. Nam vestibulum commodo lorem. Quisque vitae mi libero. Aliquam metus nibh, mollis non viverra et, ullamcorper a mauris. Phasellus odio nisi, vulputate at lacus nec, sagittis imperdiet orci. In id leo at sem commodo lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Pellentesque arcu risus, malesuada eget varius ut, sagittis id neque. Quisque quis turpis vitae magna dictum egestas. Suspendisse pellentesque urna eget tellus convallis, eu interdum sapien interdum. Cras eu nisi vehicula, suscipit lacus id, tincidunt nibh. Suspendisse pellentesque ipsum tellus, at blandit ex viverra id. In dignissim, orci et ullamcorper consectetur, orci erat iaculis ante, nec mollis eros leo quis enim. Duis rhoncus tortor non suscipit elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum accumsan, dolor quis egestas porttitor, quam turpis lobortis mi, sed molestie urna purus sit amet lorem.

                    Nullam interdum lectus erat, et euismod sem porttitor et. Pellentesque quis sapien iaculis, ultrices enim eget, mollis dui. Aliquam auctor elit sit amet dolor rhoncus, quis lobortis neque fermentum. Aliquam finibus magna nec ligula malesuada, eget viverra odio facilisis. In venenatis molestie justo. Quisque a efficitur purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ultricies condimentum ex, quis egestas diam tincidunt sit amet.

                    In condimentum nibh eget dolor finibus
                </div>
                <h1 id="test4" className="text-color-text-body-white text-3xl">Test 4</h1>
                <div className="text-color-text-body-white text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis quam elit. Cras fringilla neque tellus, quis consequat lacus convallis vehicula. Curabitur eget lobortis urna. Curabitur aliquet, purus in finibus varius, metus lorem ultrices diam, eget dignissim ipsum odio et nisl. Duis aliquet malesuada ex commodo convallis. Nam enim magna, hendrerit vitae justo in, dapibus consectetur est. Duis blandit in mauris cursus mattis. Sed vulputate lobortis ipsum, quis malesuada mi tempus sed. Integer vitae arcu eget est tempor ultricies sollicitudin et sapien. Ut congue aliquet velit, eu ultrices velit euismod et. Nam luctus urna non velit elementum sollicitudin. Donec id commodo dolor. Fusce posuere erat quis iaculis feugiat. Duis et augue non felis luctus vehicula. Sed non risus neque.

                    Mauris id sapien malesuada dolor semper luctus et ac diam. Nulla molestie ipsum velit, eu imperdiet dui hendrerit eu. Nam hendrerit orci non vulputate efficitur. Suspendisse facilisis lacinia metus non mollis. Maecenas imperdiet eros et eros dictum pellentesque. Pellentesque ornare magna ut purus ultrices, nec blandit dolor suscipit. Nullam non est turpis. Integer egestas tempor tristique. Cras mollis nec lacus vitae porta. In volutpat orci nibh, vel ultrices arcu suscipit ut. Nam vestibulum commodo lorem. Quisque vitae mi libero. Aliquam metus nibh, mollis non viverra et, ullamcorper a mauris. Phasellus odio nisi, vulputate at lacus nec, sagittis imperdiet orci. In id leo at sem commodo lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Pellentesque arcu risus, malesuada eget varius ut, sagittis id neque. Quisque quis turpis vitae magna dictum egestas. Suspendisse pellentesque urna eget tellus convallis, eu interdum sapien interdum. Cras eu nisi vehicula, suscipit lacus id, tincidunt nibh. Suspendisse pellentesque ipsum tellus, at blandit ex viverra id. In dignissim, orci et ullamcorper consectetur, orci erat iaculis ante, nec mollis eros leo quis enim. Duis rhoncus tortor non suscipit elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum accumsan, dolor quis egestas porttitor, quam turpis lobortis mi, sed molestie urna purus sit amet lorem.

                    Nullam interdum lectus erat, et euismod sem porttitor et. Pellentesque quis sapien iaculis, ultrices enim eget, mollis dui. Aliquam auctor elit sit amet dolor rhoncus, quis lobortis neque fermentum. Aliquam finibus magna nec ligula malesuada, eget viverra odio facilisis. In venenatis molestie justo. Quisque a efficitur purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ultricies condimentum ex, quis egestas diam tincidunt sit amet.

                    In condimentum nibh eget dolor finibus
                </div>
            </div>
        </MainLayout>
      </>
  )
}

