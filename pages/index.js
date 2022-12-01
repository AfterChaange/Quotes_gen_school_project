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
        <div id="neco">
          
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
  .then(function (data) {
    for(var i=0;i<data.lenght;i++) {
      document.getElementById("neco").innerHTML +=
      data[i].id + "=>" + data[i].name + " " + data[i].content + "<br />" ;

    }
  })
  .catch(function(err){
    console.log(err);
  }
)};
test();