import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Book cover image from static folder
const HeroImageUrl = '/img/hero-image.jpeg';

// Tag icons
const OpenSourceIcon = '📖';
const CoLearningIcon = '🤝';
const SpecDrivenIcon = '🎯';

export default function Hero(): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroImageContainer}>
          <img
            src={useBaseUrl(HeroImageUrl)}
            alt="Humanoid Robot Image"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroTextContainer}>
          <div className={clsx(styles.seriesNameBordered)}>
            IMAM SANGHAAR AI BOOK SERIES
          </div>
          <h1 className={styles.heroTitle}>
            The Rise Of Physical AI and Humanoid Robotics
          </h1>
          <p className={styles.heroSubtitle}>
            Building the Future of Embodied Intelligence and Humanoid Robotics
          </p>
          <div className={styles.tagButtons}>
            <div className={styles.tagButton}>
              <span>{OpenSourceIcon}</span> Open Source
            </div>
            <div className={styles.tagButton}>
              <span>{CoLearningIcon}</span> Co-Learning with AI
            </div>
            <div className={styles.tagButton}>
              <span>{SpecDrivenIcon}</span> Spec-Driven
            </div>
          </div>
          <div className={styles.mainButtons}>
            <Link to="/docs/introduction/" className={styles.buttonPrimary}>
              Start Reading →
            </Link>
            <Link to="https://sanghaar.vercel.app/" className={styles.buttonSecondary}>
              About Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
