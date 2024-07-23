import React, { useEffect, useState } from 'react';
import sandbucket from './assets/sand-bucket-svgrepo-com.svg';
import snorkel from './assets/snorkel-svgrepo-com.svg';
import sunbed from './assets/sunbed-beach-svgrepo-com.svg';
import swimsuit from './assets/swimsuit-svgrepo-com.svg';

import './App.scss';
import Constants from './constants/Constants';
import Navbar from './NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NewBar } from './NewBar';
import Slider from './Slider';
import HoverCard from './HoverCard';

function App() {
  const [fade, setFade] = useState('');

  const changeAos = (newAos: any) => {
    setFade(newAos);
  };



  const cardsData = [
    { image: 'https://www.tradeshopitalia.com/54142-large_default/ombrellone-mare-spiaggia-giardino-alluminio-grande-200cm-tropical-con-custodia.jpg', text: 'Stabilimento', text2: 'Ombrelloni e ombrellini corti e lunghi! Ihihi', title2: 'Affitali', btnTxt: 'VAI COSI' },
    { image: 'https://t4.ftcdn.net/jpg/00/63/67/23/240_F_63672301_MAX4GxNWRXZj75Z8kZTM3OAN254bYVMk.jpg', text: 'Bar', text2: 'Il nostro bar è pieno di fighette bagnate', title2: 'Penuria', btnTxt: 'SBURRALE' },
    { image: 'https://media.istockphoto.com/id/1406941644/photo/modern-beach-bar.webp?b=1&s=170667a&w=0&k=20&c=s2_WurWPs7XxlvM5WcH5otLs_nUzN2h65j3dmkQc4rM=', text: 'Ristorante', text2: 'Hai fame? Qui cuciniamo pure la merda!', title2: 'Cucina', btnTxt: 'GNAM' },
    { image: 'https://thecrescentbeachclub.com/wp-content/uploads/2020/01/IMG_1644-1024x683.jpg', text: 'Eventi', text2: 'Feste e festini! Troie droga e sburro ovunque', title2: 'Party', btnTxt: 'ESCILO' },
  ];



  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const { navLinks } = new Constants();
  return (

    <div>
       <NewBar navLinks={navLinks} logo={sandbucket} zIndex={'9999'} /> 

      <div id="parallax-world-of-ugg">
        {/*   
  <section  >
    <div className="title">
    <h1>Beautiful Umbrellas</h1>

    </div>
  </section>
   */}
        <section>
          <div className="parallax-one">
            <h2>Stabilimento dal Troiame</h2>
          </div>
        </section>

        <section>
          <div className="hero-section">
            <h3 data-aos="fade-down" data-aos-delay="200" >FOZZA OMBRELLONI!</h3>
            <div className="hero-paragraph">
              <p data-aos="fade-up" data-aos-delay="300">Lo Stabilimento Balneare Ciucciellone, situato sulle pittoresche rive del Mar Sozzo, è gestito con passione da una famiglia di lunga tradizione marinara.  Da oltre 40 anni, ci dedichiamo a offrire ai nostri ospiti un'esperienza unica, immersa in un'atmosfera accogliente e rilassante.

              </p>
            </div>
            <div className="hero-cards-wrapper" >
              {cardsData.map((card, index) => (
                <HoverCard key={index} image={card.image} text={card.text} text2={card.text2} title2={card.title2} btnTxt={card.btnTxt} />
              ))}      </div>
          </div>
        </section>

        <section>

          <div className="block">

            <div className="text-paragraph">

                <h3 data-aos='fade-down' data-aos-delay="200">FOZZA OMBRELLONI!</h3>

              <p data-aos="fade-up" data-aos-delay="300"><span>I</span>n 1978, Brian Smith landed in Southern California with a bag of sheepskin boots and hope. He fell in love with the sheepskin experience and was convinced the world would one day share this love. The beaches of Southern California had long been an epicenter of a relaxed, casual lifestyle, a lifestyle that Brian felt was a perfect fit for his brand. So he founded the UGG brand, began selling his sheepskin boots and they were an immediate sensation. By the mid 1980's, the UGG brand became a symbol of relaxed southern California culture, gaining momentum through surf shops and other shops up and down the coast of California, from San Diego to Santa Cruz. UGG boots reached beyond the beach, popping up in big cities and small towns all over, and in every level of society. Girls wore their surfer boyfriend's pair of UGG boots like a letterman jacket. When winter came along, UGG boots were in ski shops and were seen in lodges from Mammoth to Aspen.</p>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
            <div className="image-wrapper">

              <img src='https://www.bucuti.com/storage/app/media/screensavers/dining-desktop.jpg' height={400} width={580} className="" data-aos="fade-left" data-aos-delay="500" alt="Logo" />
            </div>
            {/* <p data-aos="fade" data-aos-delay="200" className="line-break margin-top-10"></p>
      <img src={sandbucket} className="" data-aos="fade-right" data-aos-delay="300" alt="Logo"/> */}
            {/* </div> */}
            {/* <p data-aos="fade-up" data-aos-delay="200" className="margin-top-10">The UGG brand began to symbolize those who embraced sport and a relaxed, active lifestyle. More than that, an emotional connection and a true feeling of love began to grow for UGG boots, just as Brian had envisioned. People didn't just like wearing UGG boots, they fell in love with them and literally could not take them off. By the end of the 90's, celebrities and those in the fashion world took notice of the UGG brand. A cultural shift occurred as well - people were embracing, and feeling empowered, by living a more casual lifestyle and UGG became one of the symbols of this lifestyle. By 2000, a love that began on the beaches had become an icon of casual style. It was at this time that the love for UGG grew in the east, over the Rockies and in Chicago. In 2000, UGG Sheepskin boots were first featured on Oprah's Favorite Things® and Oprah emphatically declared that she "LOOOOOVES her UGG boots." From that point on, the world began to notice.</p> */}
          </div>
        </section>

        <section>

          <div className="block-gray" >

            {/*<p data-aos="fade-down" data-aos-delay="200"><span >B</span>reaking into the New York fashion world is no easy task. But by the early 2000's, UGG Australia began to take it by storm. The evolution of UGG from a brand that made sheepskin boots, slippers, clogs and sandals for an active, outdoor lifestyle to a brand that was now being touted as a symbol of a stylish, casual and luxurious lifestyle was swift. Much of this was due to a brand repositioning effort that transformed UGG into a high-end luxury footwear maker. As a fashion brand, UGG advertisements now graced the pages of Vogue Magazine as well as other fashion books. In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       <img src={snorkel} style={{height: '120px', width: '120px'}} className="App-logo" data-aos="fade-right" data-aos-delay="300" alt="Logo" />
      <p data-aos="fade" data-aos-delay="200" className="line-break margin-top-10"></p> */}


            <div className="image-wrapper" data-aos="fade-right" data-aos-delay="300" >
              <Slider ></Slider>
            </div>
            <div className="text-paragraph">
              <div className="mid-title" >
                <h3 data-aos="fade-down" data-aos-delay="200">FOZZA OMBRELLONI!</h3>
              </div>
              <p data-aos="fade-up" data-aos-delay="300" className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
            </div>


          </div>
        </section>


        <section>

          <div className="block" >

            {/*<p data-aos="fade-down" data-aos-delay="200"><span >B</span>reaking into the New York fashion world is no easy task. But by the early 2000's, UGG Australia began to take it by storm. The evolution of UGG from a brand that made sheepskin boots, slippers, clogs and sandals for an active, outdoor lifestyle to a brand that was now being touted as a symbol of a stylish, casual and luxurious lifestyle was swift. Much of this was due to a brand repositioning effort that transformed UGG into a high-end luxury footwear maker. As a fashion brand, UGG advertisements now graced the pages of Vogue Magazine as well as other fashion books. In the mid 2000's, the desire for premium casual fashion was popping up all over the world and UGG was now perfectly aligned with this movement.</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       <img src={snorkel} style={{height: '120px', width: '120px'}} className="App-logo" data-aos="fade-right" data-aos-delay="300" alt="Logo" />
      <p data-aos="fade" data-aos-delay="200" className="line-break margin-top-10"></p> */}
            <div className="text-paragraph">
              <div >
                <h3 data-aos="fade-down" data-aos-delay="200">FOZZA OMBRELLONI!</h3>
              </div>
              <p data-aos="fade-up" data-aos-delay="300" className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
            </div>

            <div className="image-wrapper">
              <img src='https://i5.walmartimages.com/asr/67c0864d-555f-4a48-be2c-74a6235d5130.8f2cf7c8d58046a2e6c8bfe3c5fa1493.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' height={400} width={380} className="" data-aos="fade-left" data-aos-delay="500" alt="Logo" />
            </div>
            {/* </div> */}

          </div>
        </section>


      </div>
    </div>


  );


}

export default App;
