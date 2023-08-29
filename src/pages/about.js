import { useRouter } from 'next/router';
import Header from '../components/Header';
import Image from 'next/image';

const AboutPage = () => {

  return (
    <>
      <Header />
     

      <main style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '1em',marginTop:'5em', justifyContent:'center'}}>

      <div style={{ margin: '1em' }}>
          <Image src="/images/portrait-edda1.jpg" alt="portrait Rabold" width={300} height={400} />
      </div>

      <div style={{ margin: '1em', width: '50%', }}> 
        <p style={{paddingBottom: '2em', fontSize:'1em'}}>
        My name is Edda Rabold, and I'm a designer located in Marseille who specializes in digital production technologies and unique design processes. I graduated from Burg Giebichenstein in Halle with a degree in Industrial Design and studied at the Art and Design Academy Bezalel in Jerusalem. I currently work at AATB and collaborating with a variety of artists. My particular interest is in using modern technologies to push design boundaries.</p>
    
        <p style={{paddingBottom: '5em'}}>
        I am open for new ideas and collaborations - so write me a message: <a href="mailto:mail@eddarabold.com">mail@eddarabold.com</a>
        </p>
 
        <p>2023 May – pac-off Marseille, exhibition Brèches - with the project cerf-volants, collaboration with Fabiola Amaudric</p>
        <p>2023 April – Salone di Milan, at Alcova with the Project Wool-tools, collaboration AATB X Atelier LUMA</p>
        <p>2022 – Nomination German Design Award Newcomer - Product Design</p>
        <p>2021 October – German Design Graduates - Exhibition at Kunstgewerbe Museum Berlin, with the project If I had a body</p>
        <p>2020 – Giebichenstein Designpreis, nomination for best experiment, exhibition at Kunststiftung Sachsen-Anhalt, with the project Verkörperung</p>
        <p>2020 – Neuwerk Magazin Kontakt, Burg Giebichenstein Kunsthochschule Halle, with the project Einspruch</p>
       </div>
      </main>
    </>
  );
};

export default AboutPage;