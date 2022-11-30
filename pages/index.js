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
          Get started by editing <code>pages/index.js</code>
        </p>
        <div class="neco">
          
        </div>
      </main>



      <Footer />
    </div>
  )
}
function test (){
  fetch('./content.json').then(function (response) {
    return response.json();
    console.log("test");
  })
}
test();