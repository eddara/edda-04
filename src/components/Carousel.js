import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/carousel.module.css';
import Image from 'next/image';

import { projects } from '../../public/data/projects';
import CarouselItem from './CarouselItem';

// import {Cloudinary} from "@cloudinary/url-gen";



const Carousel = () => {
  const carouselRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');
  // const cld = new Cloudinary({cloud: {cloudName: 'dsd3eyrgl'}});

  useEffect(() => {
    setCurrentImageSrc(projects[0].src);

    // Copy the ref value to a variable
    const currentCarouselRef = carouselRef.current;

    const handleCarouselScroll = () => {
      const { scrollLeft } = currentCarouselRef;
      const containerWidth = currentCarouselRef.clientWidth;
      const index = Math.floor(scrollLeft / containerWidth);
      if (index < projects.length) {
        setCurrentImageSrc(projects[index].src);
      }
    };

    // Check if currentCarouselRef exists before adding the event listener
    if (currentCarouselRef) {
      currentCarouselRef.addEventListener('scroll', handleCarouselScroll);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      // Check if currentCarouselRef exists before removing the event listener
      if (currentCarouselRef) {
        currentCarouselRef.removeEventListener('scroll', handleCarouselScroll);
      }
    };
  }, []);

  const handleNextClick = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: window.innerWidth,
      behavior: 'smooth',
    });
  };

  const handlePrevClick = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -window.innerWidth,
      behavior: 'smooth',
    });
  };

  const handleExpandButtonClick = () => {
    setTimeout(() => {
      setIsExpanded(!isExpanded);
    }, 500);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <CarouselItem
              src={project.src}
              alt={project.alt}
              isVideo={project.isVideo}
              title={project.title}
              project={project} // Pass the entire project object
              isExpanded={isExpanded}
              currentImageSrc={currentImageSrc}
            />
          </div>
        ))}
      </div>
      <button className={styles.prevButton} onClick={handlePrevClick}>
        <svg src="/images/prev.svg" width={45} height={70} alt="Previous" viewBox="0 0 45 80" fill="none">
          <path d="M0.988272 41.1074C0.376654 40.5487 0.333806 39.5999 0.892568 38.9883C1.45133 38.3767 2.40011 38.3338 3.01173 38.8926L0.988272 41.1074ZM43.5117 75.8926L44.6192 76.9043L42.5957 79.1191L41.4883 78.1074L43.5117 75.8926ZM3.01173 38.8926L43.5117 75.8926L41.4883 78.1074L0.988272 41.1074L3.01173 38.8926Z" fill="black"/>
          <path d="M0.988272 38.8926C0.376654 39.4513 0.333806 40.4001 0.892568 41.0117C1.45133 41.6233 2.40011 41.6662 3.01173 41.1074L0.988272 38.8926ZM43.5117 4.10745L44.6192 3.09572L42.5957 0.880855L41.4883 1.89258L43.5117 4.10745ZM3.01173 41.1074L43.5117 4.10745L41.4883 1.89258L0.988272 38.8926L3.01173 41.1074Z" fill="black"/>
       </svg>
      </button>
      <button className={styles.nextButton} onClick={handleNextClick}>
      <svg src="/images/next.svg" width="45" height="70" viewBox="0 0 45 80" fill="none">
         <path d="M44.5117 38.8926C45.1233 39.4513 45.1662 40.4001 44.6074 41.0117C44.0487 41.6233 43.0999 41.6662 42.4883 41.1074L44.5117 38.8926ZM1.98827 4.10745L0.88084 3.09572L2.9043 0.880855L4.01173 1.89258L1.98827 4.10745ZM42.4883 41.1074L1.98827 4.10745L4.01173 1.89258L44.5117 38.8926L42.4883 41.1074Z" fill="black"/>
         <path d="M44.5117 41.1074C45.1233 40.5487 45.1662 39.5999 44.6074 38.9883C44.0487 38.3767 43.0999 38.3338 42.4883 38.8926L44.5117 41.1074ZM1.98827 75.8926L0.88084 76.9043L2.9043 79.1191L4.01173 78.1074L1.98827 75.8926ZM42.4883 38.8926L1.98827 75.8926L4.01173 78.1074L44.5117 41.1074L42.4883 38.8926Z" fill="black"/>
       </svg>
      </button>
      <div
         className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''} ${styles.rotating}`}
        onClick={handleExpandButtonClick}
        style={isExpanded ? { backgroundImage: `url(${currentImageSrc})` } : {}}>  
        <svg width="50" height="50" viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M32 0V67.5M65 33.5H0" />
      </svg>
      </div>
    </div>
  );
};

export default Carousel;