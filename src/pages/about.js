import Header from '../components/Header';
import Image from 'next/image';
import { aboutContent, eventsContent } from '../../public/data/aboutContent';
import Head from 'next/head';

const AboutPage = () => {

  return (
    <>
      <Head>
        <title>About Me - Edda Rabold</title>
        <meta name="description" content="Learn about Edda Rabold and her design. Contact for collaborations." />
        
        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content="About Me - Edda Rabold" />
        <meta property="og:description" content="Learn about Edda Rabold and her design. Contact for collaborations." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.eddarabold.com/about" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Edda Rabold" />
        <meta name="twitter:description" content="Learn about Edda Rabold and her design. Contact for collaborations." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <meta name="twitter:url" content="https://www.eddarabold.com/about" />

        {/* Other meta tags */}
        <meta name="author" content="Edda Rabold" />
        <meta name="keywords" content="design, digital production, collaboration, technology" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://eddarabold.com/about" />
      </Head>


      <Header />
    

      <main style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '1em',marginTop:'5em', justifyContent:'center'}}>

      <div style={{ margin: '1em' }}>
          <Image priority={true} src="/images/portrait-edda1.jpg" alt="portrait Rabold" width={300} height={400} />
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