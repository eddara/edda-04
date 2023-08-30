import Header from "../components/Header"
import CarouselComponent from '../components/Carousel'
import Head from 'next/head';

export default function Home() {

  return (
     <>
     <Head>
        <title>Edda Rabold</title>
        <meta name="description" content="I am Edda Rabold, a industrial designer specializing in digital fabrication and unique design processes." />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content="Edda Rabold" />
        <meta property="og:description" content="I am Edda Rabold, a industrial designer specializing in digital fabrication and unique design processes." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.eddarabold.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edda Rabold" />
        <meta name="twitter:description" content="I am Edda Rabold, a industrial designer specializing in digital fabrication and unique design processes" />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <meta name="twitter:url" content="https://www.eddarabold.com/" />

        {/* Other meta tags */}
        <meta name="author" content="Edda Rabold" />
        <meta name="keywords" content="design, digital fabrictaion, technology, robotics, Marseille, Berlin" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://eddarabold.com" />
      </Head>

     <Header /> 

      <main>

      <CarouselComponent />

       </main>

     </>
  )
}
