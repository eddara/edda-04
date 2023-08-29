import Header from '../components/Header';
import Image from 'next/image';
import { aboutContent, eventsContent } from '../../public/data/aboutContent';
import Head from 'next/head';
import styles from '../styles/about.module.css'; 

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

      <main className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            priority={true}
            src="/images/portrait-edda1.jpg"
            alt="portrait Rabold"
            width={300}
            height={400}
          />
        </div>

        <div className={styles.aboutContent}>
          {aboutContent.map((sectionData, index) => (
            <div key={index} className={styles.aboutSection}>
              {sectionData.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
              {sectionData.mail && (
                <p className={styles.mail}>
                  <a
                    href={`mailto:${sectionData.mail}`}
                    className={styles.mailLink}
                  >
                    {sectionData.mail}
                  </a>
                </p>
              )}
            </div>
          ))}

          {eventsContent.map((entry, index) => (
            <div key={index} className={styles.event}>
              <p className={styles.eventDate}>{entry.date}</p>
              <p className={styles.eventDetails}>{entry.event}</p>
              <p className={styles.eventDetails}>{entry.details}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default AboutPage;
