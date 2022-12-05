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

{       <main>
  <div class="container center">
        <div class="card">
          <h2 id="neco"> </h2>
          <hr/>
          <div id="necoo"> </div>
          <button onclick="dalsi()">Další</button>
        </div>
    </div> 
      </main>
      
      }
      <div id="neco">
          
          </div>

      <Footer />
      
    </div>
  )
}
const names = ["Barbora Grúnerová","Klaudie Sovová","Klára Mecová","Adéla Sochová","Elen Bonková","Nikola Hrbáčová","Barbora Bálková","Tereza Glabasniová","Helena Gacíková",
"Adéla Urbanová","Nikol Dobešová","Tomáš Rýc","Richard D´ Agnolo"];
const quotes = ["Předvídavost je jako podivuhodná tapiserie, vytvořená z tisíců kousků, které se jednotlivě zdají bezcenné, ale dohromady spojené a uspořádaně sešité znázorňují oku neobvyklý pohled.","Snaha se cení... a o co se snažíš ty",
"Kde slunce vychází, tam strach nezná své místo","Západ slunce je důkazem toho, že i konce mohou být krásné","Tato tapiserie představuje fiktivní krajinu. I když se mi zprvu příliš nedařilo společně s tvrdou práci a pílí jsem došla k cíli.",
"Tento nelehký úkol mě naučil vytrvalosti, zároveň potrénoval mou trpělivost a otestoval mou zručnost. Byla zábava sledovat, jak postupně vzniká a tvaruje se. Mé dílo nemá název, který by ho jednoznačně vystihoval. Nechávám proto na tobě, abys zjistil/a, co v něm vidíš a co v tobě vyvolává. Neboj se pozastavit nad tím, proč a čím tě tato tapiserie zrovna zaujala.",
"Asi takhle vypadá má snová krajina. Je jiná, a možná trochu zvláštní, ale takhle ji vidím. Jak vypadá ta tvoje?","Keep your love of nature, for that is the true way to understand art more and more","Sním o mé malbě a potom maluji svůj sen",
"Dívat se na západ slunce je krása, někdy však je potřeba vkročit do tmy a srovnat se s realitou Krasný západ","Ze začátku jsem byla nešťastná z barev, které jsem si zvolila, přišly mi nepřirozené. Když jsem ale viděla konečný výsledek tak jsem byla mile překvapena. Teplé barvy můžou připomínat západ slunce v jižních zemích.",
"Rudý měsíc nad polem, jako klid před bouří","Když chodíte na ryby, přiroste vám řeka k srdci, jako ta nejlepší ženská. Je věrná a vzrušující, uklidňující a přitom nevyzpytatelná"];

function dalsi() {

    var cislo = Math.floor(Math.random()*13);
    /* console.log(names[cislo]);
    console.log(names.length+ " " +quotes.length)
    console.log(quotes[cislo]); */
    document.getElementById("neco").innerHTML=names[cislo].toString();
    document.getElementById("necoo").innerHTML=quotes[cislo].toString();
    console.log(cislo);

}
dalsi();