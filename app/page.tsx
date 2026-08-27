const areas = [
  ["01", "Familjerätt", "Äktenskapsförord, samboavtal, bodelning och juridik när familjelivet förändras."],
  ["02", "Arv & framtid", "Testamente, framtidsfullmakt, bouppteckning, arvskifte och gåvohandlingar."],
  ["03", "Medling", "Strukturerade samtal för att hitta hållbara lösningar utan onödigt långa tvister."],
  ["04", "Företagarens juridik", "Avtal och rådgivning för småföretagare med fokus på tydlighet och framförhållning."],
];

export default function Home() {
  return <main>
    <div className="topbar"><span>Malmö · Höllviken · Hembesök efter överenskommelse</span><a href="tel:+46406858000">040-685 80 00</a></div>
    <header>
      <a className="brand" href="#hem"><span>AAC</span><div><b>Advokatfirman</b><small>Anita Carlsson</small></div></a>
      <nav><a href="#expertis">Expertis</a><a href="#anita">Om Anita</a><a href="#omdomen">Omdömen</a><a href="#kontakt">Kontakt</a></nav>
      <a className="headerCta" href="#kontakt">Boka rådgivning</a>
    </header>

    <section className="hero" id="hem">
      <div className="heroShade"></div>
      <div className="heroInner">
        <p className="eyebrow light">Den mänskliga advokatbyrån · Sedan 1998</p>
        <h1>Juridisk trygghet<br/><em>genom livets skeden.</em></h1>
        <p className="heroLead">Personlig och erfaren rådgivning inom familjerätt, arvsrätt och förebyggande juridik – med tid att lyssna och mod att vara tydlig.</p>
        <div className="heroActions"><a className="btn gold" href="#kontakt">Kontakta Anita</a><a className="btn ghost" href="#expertis">Utforska expertisen</a></div>
      </div>
      <aside className="heroProof"><span>Ledamot sedan</span><strong>1987</strong><p>Medlem i Sveriges advokatsamfund och verksam inom juridiken i mer än fyra decennier.</p></aside>
    </section>

    <section className="statement"><p className="eyebrow">Juridik med mänskligt perspektiv</p><h2>Viktiga beslut förtjänar både juridisk precision och ett personligt bemötande.</h2><div><p>Bakom varje juridisk fråga finns en människa, en relation eller en framtid som behöver skyddas. Därför börjar varje uppdrag med att förstå hela situationen.</p><a href="#anita">Lär känna Anita →</a></div></section>

    <section className="expertise" id="expertis">
      <div className="sectionHead"><p className="eyebrow light">Verksamhetsområden</p><h2>Rätt stöd,<br/>i rätt tid.</h2><p>Från förebyggande avtal till komplicerade förändringar. Du får tydliga råd, ett personligt engagemang och en lösning anpassad efter din situation.</p></div>
      <div className="areaGrid">{areas.map(([n,t,d]) => <article key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#kontakt" aria-label={`Kontakta Anita om ${t}`}>Ta första kontakten <b>↗</b></a></article>)}</div>
    </section>

    <section className="about" id="anita">
      <figure><img src="/anita-carlsson.webp" alt="Advokat Anita Carlsson"/><figcaption><span>Advokat Anita Carlsson</span><b>Grundare · Advokat sedan 1987</b></figcaption></figure>
      <div className="aboutCopy"><p className="eyebrow">Erfarenhet som gör skillnad</p><h2>Trygg, tydlig och nära.</h2><p className="intro">Anita Carlsson grundade byrån 1998 och har arbetat med familjejuridik sedan 1985. Hennes erfarenhet från domstol, myndighet och advokatbyrå ger en ovanligt bred förståelse.</p><p>Idag ligger fokus på medling och förebyggande juridik: att skapa tydliga avtal, minska osäkerhet och hjälpa klienter att fatta genomtänkta beslut innan en konflikt växer.</p><dl><div><dt>1987</dt><dd>Ledamot i Advokatsamfundet</dd></div><div><dt>1998</dt><dd>Grundade den egna byrån</dd></div><div><dt>40+ år</dt><dd>Juridisk erfarenhet</dd></div></dl></div>
    </section>

    <section className="process"><div><p className="eyebrow">Så går det till</p><h2>En tydlig väg framåt.</h2></div><ol><li><b>01</b><span><strong>Första kontakt</strong>Ring eller mejla och beskriv kort vad frågan gäller.</span></li><li><b>02</b><span><strong>Rådgivning</strong>Vi går igenom situationen, alternativen och kostnadsbilden.</span></li><li><b>03</b><span><strong>Lösning</strong>Du får hjälp att ta fram rätt handlingar eller nästa juridiska steg.</span></li></ol></section>

    <section className="reviews" id="omdomen"><div className="reviewIntro"><p className="eyebrow light">Klientröster</p><h2>Förtroende byggs i varje möte.</h2><p>Exempel på hur verifierade omdömen kan presenteras. Citaten ersätts efter kundens godkännande.</p></div><div className="reviewCards"><blockquote><p>“Ett varmt och professionellt bemötande. Jag fick tydliga svar och kände mig trygg genom hela processen.”</p><footer>Exempelomdöme · Familjerätt</footer></blockquote><blockquote><p>“Anita förklarade juridiken så att den blev begriplig och hjälpte oss att hitta en lösning som höll för båda.”</p><footer>Exempelomdöme · Medling</footer></blockquote></div></section>

    <section className="contact" id="kontakt"><div><p className="eyebrow">Boka rådgivning</p><h2>Låt oss börja med ett samtal.</h2><p>Beskriv kort vad du behöver hjälp med. Anita återkommer för att boka en tid och gå igenom nästa steg.</p><div className="contactLinks"><a href="tel:+46406858000"><span>Telefon</span><b>040-685 80 00</b></a><a href="mailto:ac@advokatcarlsson.se"><span>E-post</span><b>ac@advokatcarlsson.se</b></a></div></div><div className="offices"><article><span>Malmö</span><b>Rörsjögatan 10<br/>211 37 Malmö</b></article><article><span>Höllviken</span><b>Sohögsvägen 24 A<br/>236 34 Höllviken</b></article><p>Öppet måndag–fredag 09.00–16.00<br/>Hembesök erbjuds efter överenskommelse.</p></div></section>

    <footer><div className="footerBrand"><span>AAC</span><p>Advokatfirman<br/><b>Anita Carlsson</b></p></div><div><b>Navigera</b><a href="#expertis">Expertis</a><a href="#anita">Om Anita</a><a href="#kontakt">Kontakt</a></div><div><b>Kontakt</b><a href="tel:+46406858000">040-685 80 00</a><a href="mailto:ac@advokatcarlsson.se">ac@advokatcarlsson.se</a></div><div className="legal"><span>© 2026 Advokatfirman Anita Carlsson AB</span><span>Ledamot av Sveriges advokatsamfund</span><a href="#hem">Till toppen ↑</a></div></footer>
    <div className="mobileBar"><a href="tel:+46406858000">Ring Anita</a><a href="mailto:ac@advokatcarlsson.se">Skicka e-post</a></div>
  </main>
}
