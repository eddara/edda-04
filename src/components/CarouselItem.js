import { useState, useEffect } from "react";
import { projects } from "../../public/data/projects";
import styles from '../styles/carousel.module.css';
import Image from 'next/image';

const CarouselItem = ({ src, alt, isVideo, title, project, isExpanded, currentImageSrc }) => {
  const [activeRelatedIndex, setActiveRelatedIndex] = useState(0);

  // Function to handle changing the active related image index
  const changeActiveRelatedImage = () => {
    if (project && project.related) {
      setActiveRelatedIndex((prevIndex) => (prevIndex + 1) % project.related.length);
    }
  };

  // Start the timer when the component is mounted
  useEffect(() => {
    if (project && project.related) {
        const interval = setInterval(changeActiveRelatedImage, 3000); 
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [project,changeActiveRelatedImage]);

  // Use the activeRelatedIndex to determine the main image source when expanded
  const mainImageSrc = isExpanded && project && project.related && project.related.length > 0
    ? project.related[activeRelatedIndex].src
    : currentImageSrc;

  return (
    <div key={src} className={styles.carouselItem}>
      <div className={styles.title}>{title}</div>
      {isVideo ? (
        <video autoPlay autoplay muted loop playsinline className={`${styles.media} ${styles.video}`}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className={`${styles.media} ${styles.image}`}>
            <Image src={mainImageSrc} alt={alt} fill objectFit="cover" />
        </div>
       //<img src={mainImageSrc} alt={alt} className={`${styles.media} ${styles.image}`} />
      )}

      <div className={styles.wrapper}>
        {isExpanded && project && (
          <div className={`${styles.expandedContent} ${isExpanded ? styles.expanded : ''}`}>
            <div className={styles.description}>
              <p>{project.text}</p>
              <p className={styles.detail}>{project.detail}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselItem;
