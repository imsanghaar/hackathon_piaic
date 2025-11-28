import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';

// Book cover image from static folder
const HeroImageUrl = '/img/hero-image.jpeg';

// Tag icons
const OpenSourceIcon = '📖';
const CoLearningIcon = '🤝';
const SpecDrivenIcon = '🎯';

export default function Hero(): React.ReactElement {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  return (
    <section className={clsx(isDarkMode ? styles.heroSectionDark : styles.heroSection)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroImageContainer}>
          <img
            src={useBaseUrl(HeroImageUrl)}
            alt="Humanoid Robot Image"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroTextContainer}>
          <div className={clsx(styles.seriesNameBordered, { [styles.seriesNameBorderedDark]: isDarkMode })}>
            IMAM SANGHAAR AI BOOK SERIES
          </div>
          <h1 className={clsx(styles.heroTitle, { [styles.heroTitleDark]: isDarkMode })}>
            The Rise Of Physical AI and Humanoid Robotics
          </h1>
          <p className={clsx(styles.heroSubtitle, { [styles.heroSubtitleDark]: isDarkMode })}>
            Building the Future of Embodied Intelligence and Humanoid Robotics
          </p>
          <div className={styles.tagButtons}>
            <div className={clsx(styles.tagButton, { [styles.tagButtonDark]: isDarkMode })}>
              <span>{OpenSourceIcon}</span> Open Source
            </div>
            <div className={clsx(styles.tagButton, { [styles.tagButtonDark]: isDarkMode })}>
              <span>{CoLearningIcon}</span> Co-Learning with AI
            </div>
            <div className={clsx(styles.tagButton, { [styles.tagButtonDark]: isDarkMode })}>
              <span>{SpecDrivenIcon}</span> Spec-Driven
            </div>
          </div>
          <div className={styles.mainButtons}>
            <Link to="/docs/introduction/" className={styles.buttonPrimary}>
              Start Reading →
            </Link>
            <Link to="https://sanghaar.vercel.app/" className={clsx(styles.buttonSecondary, { [styles.buttonSecondaryDark]: isDarkMode })}>
              About Author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

