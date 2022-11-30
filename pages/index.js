import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>píčovina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Copak to bude dnes?" />
        <p className="description">
          jebne mě dneska už :!
        </p>
        <div class="neco">
          
        </div>
      </main>



      <Footer />
    </div>
  )
}
function test (){
  console.log("test");
  fetch('./content.json').then(function (response) {
    return response.json();
    
  })
}
test();