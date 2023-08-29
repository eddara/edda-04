import { useRouter } from 'next/router';
import Header from '../components/Header';
import Image from 'next/image';
import { aboutContent, eventsContent } from '../../public/data/aboutContent';

const AboutPage = () => {

  return (
    <>
      <Header />
     

      <main style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '1em',marginTop:'5em', justifyContent:'center'}}>

      <div style={{ margin: '1em' }}>
          <Image src="/images/portrait-edda1.jpg" alt="portrait Rabold" width={300} height={400} />
      </div>

      <div style={{ margin: '1em', width: '50%' }}>
          {aboutContent.map((sectionData, index) => (
            <div key={index} style={{ paddingBottom: '2em'}}>
              {/* <h2>{sectionData.section}</h2> */}
              {sectionData.content.map((paragraph, index) => (
                <p key={index} style={{ fontSize: '1em' }}>
                  {paragraph}
                </p>
              ))}
              {sectionData.mail && (
                <p style={{ paddingBottom: '2em', fontSize: '1em', color: '#7a0eb0', textDecoration: 'underline', cursor: 'pointer' }}>
                  <a href={`mailto:${sectionData.mail}`} style={{ color:"(91, 201, 32)", textDecoration: 'underline' }}>
                    {sectionData.mail}
                  </a>
                </p>
              )}
            </div>
          ))}
 
          {eventsContent.map((entry, index) => (
        <div key={index} style={{ margin: '0 0 1em 0',width: '90%' }}>
          <p>{entry.date} – {entry.event}</p>
          <p>{entry.details}</p>
        </div>
        ))}    
      </div>   
      </main>
    </>
  );
};

export default AboutPage;