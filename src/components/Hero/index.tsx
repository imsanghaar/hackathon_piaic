import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Book cover image from static folder
const HeroImageUrl = '/img/book-cover-page.png';

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
            src={HeroImageUrl}
            alt="AI Native Software Development Book Cover"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroTextContainer}>
          <div className={styles.seriesName}>
            SANGHAAR AI-NATIVE BOOK SERIES
          </div>
          <h1 className={styles.heroTitle}>
            AI Native Software Development
          </h1>
          <p className={styles.heroSubtitle}>
            Colearning Agentic AI with Python and TypeScript – Spec Driven Reusable Intelligence
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
            <Link to="/docs/intro" className={styles.buttonPrimary}>
              Start Reading →
            </Link>
            <Link to="https://www.panaversity.org/" className={styles.buttonSecondary}>
              Explore Panaversity
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
